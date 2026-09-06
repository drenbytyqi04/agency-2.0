import { AccentWord } from '@/components/ui/accent-word'
import { MaskText } from '@/components/animations/mask-text'
import { StaggerGroup, StaggerItem } from '@/components/animations/stagger'
import { Eyebrow, Section } from '@/components/ui/section'

/**
 * How we work, as commitments rather than claimed results.
 *
 * Deliberately not "4x more leads" style figures: those would be invented outcomes attributed
 * to work that has not been delivered. Every number here describes what we commit to instead.
 */
const commitments = [
  { value: '2–4', unit: 'weeks', label: 'Typical build time for a marketing website' },
  { value: '95+', unit: 'target', label: 'Lighthouse performance we build against' },
  { value: '1:1', unit: 'contact', label: 'You talk to the people doing the work' },
]

export function Commitments() {
  return (
    <Section>
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>About us</Eyebrow>
          </div>

          <div className="lg:col-span-8">
            <MaskText
              className="text-display-md text-ink"
              lines={['Smart, fast and creative', <>— digital work with a <AccentWord>purpose</AccentWord>.</>]}
            />

            <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-3">
              {commitments.map((item, index) => (
                <StaggerItem key={item.label}>
                  <div
                    className={`h-full rounded-card border bg-surface/40 p-6 ${
                      index === 1 ? 'border-accent/45' : 'border-line'
                    }`}
                  >
                    <p className="flex items-baseline gap-2">
                      <span className="font-display text-4xl font-semibold text-ink [font-variant-numeric:tabular-nums]">
                        {item.value}
                      </span>
                      <span className="font-sans text-[13px] text-muted md:text-xs">{item.unit}</span>
                    </p>
                    <p className="mt-3 font-sans text-sm text-muted">{item.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </Section>
  )
}
