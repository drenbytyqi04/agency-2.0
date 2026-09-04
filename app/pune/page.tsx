import type { Metadata } from 'next'

import { MaskText } from '@/components/animations/mask-text'
import { FinalCta } from '@/components/sections/final-cta'
import { WorkGrid } from '@/components/sections/work-grid'
import { Eyebrow, PlaceholderNote } from '@/components/ui/section'
import { projects } from '@/content/projects'
import { toProjectView } from '@/lib/project-view'
import { siteConfig } from '@/lib/site'

const description =
  'Projekte demonstruese që tregojnë si punojmë: ueb-faqe, dyqane online, branding dhe sisteme rezervimesh.'

export const metadata: Metadata = {
  title: 'Punët',
  description,
  alternates: { canonical: '/pune' },
  openGraph: { title: 'Punët — Nexa', description, url: `${siteConfig.url}/pune` },
  twitter: { title: 'Punët — Nexa', description },
}

export default function WorkPage() {
  return (
    <>
      <header className="pb-14 pt-[calc(var(--header-height)+5rem)]">
        <div className="shell">
          <Eyebrow>Punët</Eyebrow>
          <MaskText
            as="h1"
            className="mt-8 text-display-lg text-ink"
            lines={['Punë që bëjnë', 'diferencë.']}
          />
          <div className="mt-10">
            <PlaceholderNote>
              Projekte demonstruese — jo punë e realizuar për klientë realë
            </PlaceholderNote>
          </div>
        </div>
      </header>

      <WorkGrid projects={projects.map(toProjectView)} />
      <FinalCta />
    </>
  )
}
