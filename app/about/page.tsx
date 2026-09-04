import type { Metadata } from 'next'

import { MaskText } from '@/components/animations/mask-text'
import { Reveal } from '@/components/animations/reveal'
import { StaggerGroup, StaggerItem } from '@/components/animations/stagger'
import { FinalCta } from '@/components/sections/final-cta'
import { Eyebrow, PlaceholderNote } from '@/components/ui/section'
import { team, values } from '@/content/team'
import { siteConfig } from '@/lib/site'

const description =
  'Nexa is a digital studio from Kosovo combining strategy, design and development to build digital experiences with a purpose.'

export const metadata: Metadata = {
  title: 'About',
  description,
  alternates: { canonical: '/about' },
  openGraph: { title: 'About — Nexa', description, url: `${siteConfig.url}/about` },
  twitter: { title: 'About — Nexa', description },
}

export default function AboutPage() {
  return (
    <>
      <header className="border-b border-line pb-16 pt-[calc(var(--header-height)+5rem)]">
        <div className="shell">
          <Eyebrow>About</Eyebrow>
          <MaskText
            as="h1"
            className="mt-8 text-display-lg text-ink"
            lines={['Nexa is', 'good work,', 'without the noise.']}
          />
          <p className="mt-10 max-w-2xl font-sans text-lg leading-relaxed text-muted lg:ml-auto">
            {description}
          </p>
        </div>
      </header>

      <section className="border-b border-line py-section">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Eyebrow>How we work</Eyebrow>
            </div>

            <StaggerGroup className="grid gap-px bg-line sm:grid-cols-2 lg:col-span-9">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="h-full bg-base p-8 md:p-10">
                    <h2 className="font-display text-3xl leading-none text-ink">
                      {value.title}
                    </h2>
                    <p className="mt-4 font-sans text-sm text-muted">{value.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <MaskText className="text-display-sm text-ink" lines={['The team']} />
            <div className="mb-2">
              <PlaceholderNote>Placeholder team — fictional profiles</PlaceholderNote>
            </div>
          </div>

          <StaggerGroup className="mt-14 grid gap-px bg-line md:grid-cols-3">
            {team.map((member) => (
              <StaggerItem key={member.id}>
                <div className="h-full bg-base p-8 md:p-10">
                  {/* Typographic initials instead of a stock portrait: no real person is
                      misrepresented as part of the team. */}
                  <div
                    aria-hidden="true"
                    className="flex h-24 w-24 items-center justify-center border border-line bg-surface font-display text-3xl text-accent"
                  >
                    {member.initials}
                  </div>
                  <h3 className="mt-8 font-display text-2xl leading-none text-ink">
                    {member.name}
                  </h3>
                  <p className="mt-2 font-sans text-xs uppercase tracking-[0.16em] text-accent">
                    {member.role}
                  </p>
                  <p className="mt-5 font-sans text-sm text-muted">{member.focus}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal className="mt-16 max-w-2xl border-t border-line pt-8">
            <p className="font-sans text-base text-muted">
              We work from {siteConfig.contact.city}, with clients in Kosovo, Switzerland, Germany
              and Austria. We meet online when speed matters, and in person when it is worth it.
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
