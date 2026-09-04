import { MaskText } from '@/components/animations/mask-text'
import { Reveal } from '@/components/animations/reveal'
import { ButtonLink } from '@/components/ui/button'
import { ctas, siteConfig } from '@/lib/site'

export function Hero() {
  return (
    <section className="texture-noise relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-[calc(var(--header-height)+3rem)]">
      <div aria-hidden="true" className="texture-grid absolute inset-0" />
      {/* Single accent moment: a soft lime bloom off the right edge. */}
      <div
        aria-hidden="true"
        className="absolute -right-40 top-1/4 h-[36rem] w-[36rem] rounded-full bg-accent/[0.07] blur-[120px]"
      />

      <div className="shell relative">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span aria-hidden="true" className="inline-block h-px w-8 bg-accent" />
            Digital studio / Kosovë + Remote
          </p>
        </Reveal>

        <MaskText
          as="h1"
          delay={0.1}
          className="mt-8 text-display-lg text-ink"
          lines={['Ndërtojmë', 'ueb-faqe që', 'sjellin klientë.']}
        />

        <div className="mt-12 grid gap-10 border-t border-line pt-8 lg:grid-cols-12">
          <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-7">
            <p className="max-w-xl font-sans text-base text-muted">
              Dizajnojmë dhe zhvillojmë ueb-faqe moderne që i bëjnë bizneset të duken më mirë, të
              performojnë më shpejt dhe të shesin më shumë.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={siteConfig.bookingHref}>{ctas.primary}</ButtonLink>
              <ButtonLink href="/pune" variant="ghost">
                {ctas.secondary}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
