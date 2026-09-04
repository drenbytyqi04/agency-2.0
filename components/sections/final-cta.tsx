import { MaskText } from '@/components/animations/mask-text'
import { Reveal } from '@/components/animations/reveal'
import { ButtonLink } from '@/components/ui/button'
import { ctas, siteConfig } from '@/lib/site'

export function FinalCta() {
  return (
    <section className="texture-noise relative overflow-hidden border-t border-line bg-surface py-section">
      <div aria-hidden="true" className="texture-grid absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -left-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-accent/[0.06] blur-[120px]"
      />

      <div className="shell relative">
        <MaskText className="text-display-lg text-ink" lines={['Ke një ide?', 'Ta bëjmë realitet.']} />

        <Reveal delay={0.15}>
          <div className="mt-12 grid gap-8 border-t border-line pt-8 lg:grid-cols-12">
            <p className="max-w-xl font-sans text-base text-muted lg:col-span-5 lg:col-start-7">
              Na trego çfarë po ndërton. Ne ta tregojmë si mund ta bëjmë më mirë.
            </p>
            <div className="lg:col-span-12">
              <ButtonLink href={siteConfig.bookingHref}>{ctas.primary}</ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
