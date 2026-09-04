import { placeholderClients } from '@/content/clients'
import { PlaceholderNote } from '@/components/ui/section'

/**
 * Horizontal marquee of invented brand names.
 * Labelled as demonstration content — these are not Nexa clients.
 */
export function TrustMarquee() {
  const items = [...placeholderClients, ...placeholderClients]

  return (
    <section aria-label="Marka demonstruese" className="overflow-hidden border-y border-line py-10">
      <div className="shell mb-8">
        <PlaceholderNote>Emra demonstrues — jo klientë realë</PlaceholderNote>
      </div>

      {/* Duplicated track: the animation translates by exactly -50% for a seamless loop. */}
      <div className="relative flex w-full overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16 motion-reduce:animate-none">
          {items.map((name, index) => (
            <span
              key={`${name}-${index}`}
              aria-hidden={index >= placeholderClients.length}
              className="select-none font-display text-4xl uppercase tracking-[0.06em] text-muted/45 md:text-5xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
