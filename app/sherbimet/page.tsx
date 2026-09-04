import type { Metadata } from 'next'

import { MaskText } from '@/components/animations/mask-text'
import { Reveal } from '@/components/animations/reveal'
import { FinalCta } from '@/components/sections/final-cta'
import { Accordion } from '@/components/ui/accordion'
import { ButtonLink } from '@/components/ui/button'
import { Eyebrow } from '@/components/ui/section'
import { services } from '@/content/services'
import { siteConfig } from '@/lib/site'

const description =
  'Ueb-faqe, dyqane online, sisteme rezervimesh, brand, UI/UX, SEO dhe mirëmbajtje — çfarë përfshihet dhe sa kushton.'

export const metadata: Metadata = {
  title: 'Shërbimet',
  description,
  alternates: { canonical: '/sherbimet' },
  openGraph: { title: 'Shërbimet — Nexa', description, url: `${siteConfig.url}/sherbimet` },
  twitter: { title: 'Shërbimet — Nexa', description },
}

export default function ServicesPage() {
  return (
    <>
      <header className="border-b border-line pb-16 pt-[calc(var(--header-height)+5rem)]">
        <div className="shell">
          <Eyebrow>Shërbimet</Eyebrow>
          <MaskText
            as="h1"
            className="mt-8 text-display-lg text-ink"
            lines={['Çfarë mund', 'të ndërtojmë', 'për ju.']}
          />
          <p className="mt-10 max-w-xl font-sans text-base text-muted lg:ml-auto">
            Çdo shërbim ka një qëllim të matshëm. Më poshtë është çfarë përfshihet, për kë është dhe
            sa kushton — pa fjalë të tepërta.
          </p>
        </div>
      </header>

      <div className="shell">
        {services.map((service, index) => (
          <Reveal
            key={service.slug}
            as="section"
            className={`grid gap-10 border-b border-line py-16 lg:grid-cols-12 lg:py-20 ${
              index % 2 === 1 ? 'lg:pl-[8%]' : ''
            }`}
          >
            <div className="lg:col-span-4">
              <span className="font-sans text-[11px] tracking-[0.2em] text-accent">
                {service.index}
              </span>
              <h2 className="mt-4 font-display text-4xl uppercase leading-[0.92] text-ink md:text-5xl">
                {service.title}
              </h2>
              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="eyebrow">Çmimi orientues</dt>
                  <dd className="mt-1 font-sans text-base text-ink [font-variant-numeric:tabular-nums]">
                    {service.priceRange}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Për kë është</dt>
                  <dd className="mt-1 font-sans text-sm text-muted">{service.idealFor}</dd>
                </div>
              </dl>
              <div className="mt-8">
                <ButtonLink href={siteConfig.bookingHref} variant="ghost">
                  {service.cta}
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="max-w-2xl font-sans text-lg leading-relaxed text-ink">
                {service.summary}
              </p>

              <h3 className="eyebrow mt-10">Çfarë përfshihet</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-baseline gap-3 font-sans text-sm text-muted">
                    <span aria-hidden="true" className="mt-[0.45rem] h-px w-3 shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              {service.faq.length > 0 && (
                <div className="mt-12">
                  <h3 className="eyebrow mb-2">Pyetje të shpeshta</h3>
                  <Accordion items={service.faq} />
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <FinalCta />
    </>
  )
}
