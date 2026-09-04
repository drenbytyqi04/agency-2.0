import type { Metadata } from 'next'

import { MaskText } from '@/components/animations/mask-text'
import { Reveal } from '@/components/animations/reveal'
import { StaggerGroup, StaggerItem } from '@/components/animations/stagger'
import { FinalCta } from '@/components/sections/final-cta'
import { Eyebrow, PlaceholderNote } from '@/components/ui/section'
import { team, values } from '@/content/team'
import { siteConfig } from '@/lib/site'

const description =
  'Nexa është studio digjitale nga Kosova që kombinon strategjinë, dizajnin dhe zhvillimin për të krijuar përvoja digjitale që kanë qëllim.'

export const metadata: Metadata = {
  title: 'Rreth nesh',
  description,
  alternates: { canonical: '/rreth-nesh' },
  openGraph: { title: 'Rreth nesh — Nexa', description, url: `${siteConfig.url}/rreth-nesh` },
  twitter: { title: 'Rreth nesh — Nexa', description },
}

export default function AboutPage() {
  return (
    <>
      <header className="border-b border-line pb-16 pt-[calc(var(--header-height)+5rem)]">
        <div className="shell">
          <Eyebrow>Rreth nesh</Eyebrow>
          <MaskText
            as="h1"
            className="mt-8 text-display-lg text-ink"
            lines={['Nexa është', 'punë e mirë,', 'pa zhurmë.']}
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
              <Eyebrow>Si punojmë</Eyebrow>
            </div>

            <StaggerGroup className="grid gap-px bg-line sm:grid-cols-2 lg:col-span-9">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="h-full bg-base p-8 md:p-10">
                    <h2 className="font-display text-3xl uppercase leading-none text-ink">
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
            <MaskText className="text-display-sm text-ink" lines={['Ekipi']} />
            <div className="mb-2">
              <PlaceholderNote>Ekip demonstrues — profile fiktive</PlaceholderNote>
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
                    className="flex h-24 w-24 items-center justify-center border border-line bg-surface font-display text-3xl uppercase text-accent"
                  >
                    {member.initials}
                  </div>
                  <h3 className="mt-8 font-display text-2xl uppercase leading-none text-ink">
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
              Punojmë nga {siteConfig.contact.city}, me klientë në Kosovë, Zvicër, Gjermani dhe
              Austri. Takimet i bëjmë online kur duhet shpejt, dhe personalisht kur ia vlen.
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
