import { MaskText } from '@/components/animations/mask-text'
import { StaggerGroup, StaggerItem } from '@/components/animations/stagger'
import { AccentWord } from '@/components/ui/accent-word'
import { PlaceholderNote, Section } from '@/components/ui/section'
import { testimonials } from '@/content/testimonials'

export function Testimonials() {
  return (
    <Section>
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <MaskText className="text-display-sm text-ink" lines={[<>What <AccentWord>clients</AccentWord> say</>]} />
          <div className="mb-2">
            <PlaceholderNote>Placeholder quotes — not real client testimonials</PlaceholderNote>
          </div>
        </div>

        <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <figure className="flex h-full flex-col justify-between rounded-panel border border-line bg-surface/40 p-8 md:p-10">
                <blockquote className="font-sans text-lg leading-relaxed text-ink">
                  <span aria-hidden="true" className="mb-6 block h-px w-10 bg-accent" />
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-10 font-sans text-[13px] uppercase tracking-[0.16em] text-muted md:text-xs">
                  {testimonial.author}
                  <span aria-hidden="true" className="mx-2 text-line-strong">
                    /
                  </span>
                  {testimonial.role}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </Section>
  )
}
