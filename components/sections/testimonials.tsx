import { MaskText } from '@/components/animations/mask-text'
import { StaggerGroup, StaggerItem } from '@/components/animations/stagger'
import { PlaceholderNote, Section } from '@/components/ui/section'
import { testimonials } from '@/content/testimonials'

export function Testimonials() {
  return (
    <Section>
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <MaskText className="text-display-sm text-ink" lines={['What clients say']} />
          <div className="mb-2">
            <PlaceholderNote>Placeholder quotes — not real client testimonials</PlaceholderNote>
          </div>
        </div>

        <StaggerGroup className="mt-14 grid gap-px bg-line md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <figure className="flex h-full flex-col justify-between bg-base p-8 md:p-10">
                <blockquote className="font-sans text-lg leading-relaxed text-ink">
                  <span aria-hidden="true" className="mb-6 block h-px w-10 bg-accent" />
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-10 font-sans text-xs uppercase tracking-[0.16em] text-muted">
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
