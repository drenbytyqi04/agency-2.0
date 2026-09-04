import { MaskText } from '@/components/animations/mask-text'
import { StaggerGroup, StaggerItem } from '@/components/animations/stagger'
import { ButtonLink } from '@/components/ui/button'
import { Section } from '@/components/ui/section'
import { pricingNote, pricingTiers } from '@/content/pricing'
import { siteConfig } from '@/lib/site'

export function Pricing() {
  return (
    <Section id="pricing">
      <div className="shell">
        <MaskText className="max-w-4xl text-display-md text-ink" lines={['Choose how', 'we work together.']} />

        <StaggerGroup className="mt-16 grid gap-px bg-line lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <StaggerItem key={tier.id}>
              <div
                className={`flex h-full flex-col p-8 md:p-10 ${
                  tier.highlighted ? 'bg-surface ring-1 ring-inset ring-accent/40' : 'bg-base'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-3xl uppercase leading-none text-ink">
                    {tier.name}
                  </h3>
                  {tier.highlighted && (
                    <span className="border border-accent px-2.5 py-1 font-sans text-[10px] uppercase tracking-[0.16em] text-accent">
                      Most chosen
                    </span>
                  )}
                </div>

                <div className="mt-8 flex items-baseline gap-2">
                  {tier.pricePrefix && (
                    <span className="font-sans text-xs uppercase tracking-[0.16em] text-muted">
                      {tier.pricePrefix}
                    </span>
                  )}
                  <span className="font-display text-5xl leading-none text-ink [font-variant-numeric:tabular-nums]">
                    {tier.price}
                  </span>
                </div>
                {tier.recurring && (
                  <p className="mt-2 font-sans text-sm text-accent [font-variant-numeric:tabular-nums]">
                    {tier.recurring}
                  </p>
                )}

                <p className="mt-6 font-sans text-sm text-muted">{tier.description}</p>

                <ul className="mt-8 flex-1 space-y-3 border-t border-line pt-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-baseline gap-3 font-sans text-sm text-ink">
                      <span aria-hidden="true" className="mt-[0.45rem] h-px w-3 shrink-0 bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <ButtonLink
                    href={siteConfig.bookingHref}
                    variant={tier.highlighted ? 'primary' : 'ghost'}
                    className="w-full"
                  >
                    {tier.cta}
                  </ButtonLink>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <p className="mt-8 font-sans text-sm text-muted">{pricingNote}</p>
      </div>
    </Section>
  )
}
