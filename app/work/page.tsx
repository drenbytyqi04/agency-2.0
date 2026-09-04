import type { Metadata } from 'next'

import { MaskText } from '@/components/animations/mask-text'
import { FinalCta } from '@/components/sections/final-cta'
import { WorkGrid } from '@/components/sections/work-grid'
import { PhotoCredits } from '@/components/ui/photo-credits'
import { Eyebrow, PlaceholderNote } from '@/components/ui/section'
import { projects } from '@/content/projects'
import { toProjectView } from '@/lib/project-view'
import { siteConfig } from '@/lib/site'

const description =
  'Demonstration projects showing how we work: websites, online stores, branding and booking systems.'

export const metadata: Metadata = {
  title: 'Work',
  description,
  alternates: { canonical: '/work' },
  openGraph: { title: 'Work — Nexa', description, url: `${siteConfig.url}/work` },
  twitter: { title: 'Work — Nexa', description },
}

export default function WorkPage() {
  return (
    <>
      <header className="pb-14 pt-[calc(var(--header-height)+5rem)]">
        <div className="shell">
          <Eyebrow>Work</Eyebrow>
          <MaskText
            as="h1"
            className="mt-8 text-display-lg text-ink"
            lines={['Work that makes', 'a difference.']}
          />
          <div className="mt-10">
            <PlaceholderNote>
              Demonstration projects — not work delivered for real clients
            </PlaceholderNote>
          </div>
        </div>
      </header>

      <WorkGrid projects={projects.map(toProjectView)} />

      <div className="shell pb-16">
        <PhotoCredits files={projects.map((project) => project.image)} />
      </div>

      <FinalCta />
    </>
  )
}
