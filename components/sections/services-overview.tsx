import { MaskText } from '@/components/animations/mask-text'
import { StaggerGroup, StaggerItem } from '@/components/animations/stagger'
import { AccentWord } from '@/components/ui/accent-word'
import { ButtonLink } from '@/components/ui/button'
import { Eyebrow, Section } from '@/components/ui/section'
import { serviceGroups } from '@/content/services'

export function ServicesOverview() {
  return (
    <Section id="services">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>What we do</Eyebrow>
          </div>
          <MaskText
            className="text-display-md text-ink lg:col-span-8"
            lines={['We deliver work that', <>makes digital <AccentWord>simple</AccentWord>.</>]}
          />
        </div>

        <StaggerGroup className="mt-16 grid gap-5 md:grid-cols-3">
          {serviceGroups.map((group) => (
            <StaggerItem key={group.index}>
              <div className="group h-full rounded-panel border border-line bg-surface/50 p-8 transition-colors duration-500 ease-editorial hover:border-line-strong hover:bg-surface md:p-10">
                <span className="font-sans text-[11px] tracking-[0.2em] text-accent">
                  {group.index}
                </span>
                <h3 className="mt-5 font-display text-3xl leading-none text-ink md:text-4xl">
                  {group.title}
                </h3>
                <ul className="mt-8 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 font-sans text-sm text-muted transition-colors duration-300 group-hover:text-ink"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.45rem] inline-block h-px w-3 shrink-0 bg-line-strong transition-colors duration-300 group-hover:bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-10">
          <ButtonLink href="/services" variant="ghost" size="sm">
            All services
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
