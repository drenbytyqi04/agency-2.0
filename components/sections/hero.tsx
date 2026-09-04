import { MaskText } from '@/components/animations/mask-text'
import { Reveal } from '@/components/animations/reveal'
import { AccentWord } from '@/components/ui/accent-word'
import { ButtonLink } from '@/components/ui/button'
import { RotatingBadge } from '@/components/ui/rotating-badge'
import { ctas, siteConfig } from '@/lib/site'

export function Hero() {
  return (
    <section className="texture-noise relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-[calc(var(--header-height)+3rem)]">
      <div aria-hidden="true" className="texture-grid absolute inset-0" />

      {/* Ambient colour: a cool green bloom behind the headline, a warmer lime off the edge. */}
      <div
        aria-hidden="true"
        className="ambient-glow left-[8%] top-[6%] h-[30rem] w-[30rem] bg-[#1f7a4d]/25"
      />
      <div
        aria-hidden="true"
        className="ambient-glow -right-32 top-1/3 h-[34rem] w-[34rem] bg-accent/[0.09]"
      />

      <div className="shell relative">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <Reveal>
            <p className="eyebrow">Digital studio / Kosovo + Remote</p>
          </Reveal>

          <Reveal delay={0.35} className="hidden md:block">
            <RotatingBadge
              href={siteConfig.bookingHref}
              label="Book a 15-min call"
              ariaLabel={ctas.primary}
            />
          </Reveal>
        </div>

        <MaskText
          as="h1"
          delay={0.1}
          className="mt-8 max-w-5xl text-display-lg text-ink"
          lines={[
            'We build websites',
            <>
              that bring <AccentWord>clients</AccentWord>
            </>,
            'not just design.',
          ]}
        />

        <div className="mt-12 grid gap-10 border-t border-line pt-8 lg:grid-cols-12">
          <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-7">
            <p className="max-w-xl font-sans text-base text-muted">
              We design and build modern websites that make businesses look sharper, perform
              faster and sell more.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={siteConfig.bookingHref}>{ctas.primary}</ButtonLink>
              <ButtonLink href="/work" variant="ghost">
                {ctas.secondary}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
