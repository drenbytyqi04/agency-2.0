import Link from 'next/link'

import { ButtonLink } from '@/components/ui/button'
import { Eyebrow } from '@/components/ui/section'

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center pb-section pt-[calc(var(--header-height)+5rem)]">
      <div className="shell">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-8 text-display-md text-ink">Kjo faqe nuk ekziston.</h1>
        <p className="mt-6 max-w-md font-sans text-base text-muted">
          Linku mund të jetë i vjetruar. Provo nga ballina ose shiko punët.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/">Kthehu në ballinë</ButtonLink>
          <Link
            href="/pune"
            className="link-underline self-center font-sans text-[13px] uppercase tracking-[0.16em] text-ink"
          >
            Shiko punët
          </Link>
        </div>
      </div>
    </section>
  )
}
