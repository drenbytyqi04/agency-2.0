import type { Metadata } from 'next'

import { MaskText } from '@/components/animations/mask-text'
import { ContactForm } from '@/components/forms/contact-form'
import { Eyebrow } from '@/components/ui/section'
import { siteConfig } from '@/lib/site'

const description =
  'Have a project, an idea, or just want to know what could be improved? Get in touch.'

export const metadata: Metadata = {
  title: 'Contact',
  description,
  alternates: { canonical: '/contact' },
  openGraph: { title: 'Contact — Nexa', description, url: `${siteConfig.url}/contact` },
  twitter: { title: 'Contact — Nexa', description },
}

export default function ContactPage() {
  return (
    <section className="pb-section pt-[calc(var(--header-height)+5rem)]">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-5">
            <Eyebrow>Contact</Eyebrow>
            <MaskText as="h1" className="mt-8 text-display-md text-ink" lines={['Let’s talk.']} />

            <p className="mt-8 max-w-md font-sans text-base text-muted">{description}</p>

            <dl className="mt-14 space-y-8 border-t border-line pt-10">
              <div>
                <dt className="eyebrow">Location</dt>
                <dd className="mt-2 font-sans text-lg text-ink">{siteConfig.contact.city}</dd>
              </div>
              <div>
                <dt className="eyebrow">Email</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="link-underline font-sans text-lg text-ink transition-colors hover:text-accent"
                  >
                    {siteConfig.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Phone</dt>
                <dd className="mt-2">
                  <a
                    href={`tel:${siteConfig.contact.phoneHref}`}
                    className="link-underline font-sans text-lg text-ink [font-variant-numeric:tabular-nums] transition-colors hover:text-accent"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="sr-only">Contact form</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
