import Link from 'next/link'

import { ButtonLink } from '@/components/ui/button'
import { Eyebrow } from '@/components/ui/section'

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center pb-section pt-[calc(var(--header-height)+5rem)]">
      <div className="shell">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-8 text-display-md text-ink">This page does not exist.</h1>
        <p className="mt-6 max-w-md font-sans text-base text-muted">
          The link may be out of date. Try the homepage, or take a look at our work.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/">Back to homepage</ButtonLink>
          <Link
            href="/work"
            className="link-underline self-center font-sans text-[13px] uppercase tracking-[0.16em] text-ink"
          >
            See our work
          </Link>
        </div>
      </div>
    </section>
  )
}
