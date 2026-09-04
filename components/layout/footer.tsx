import Link from 'next/link'

import { navigation, siteConfig } from '@/lib/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-base">
      <div className="shell py-16 md:py-20">
        {/* Oversized wordmark, clipped to the grid — the footer is the last typographic moment. */}
        <Link href="/" aria-label="Nexa — home" className="block">
          <span className="block font-display text-[26vw] uppercase leading-[0.78] tracking-[-0.02em] text-ink transition-colors duration-500 hover:text-accent lg:text-[19vw]">
            Nexa
          </span>
        </Link>

        <p className="mt-8 max-w-md font-sans text-sm text-muted">{siteConfig.tagline}</p>

        <div className="mt-14 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label="Footer navigation">
            <h2 className="eyebrow mb-5">Pages</h2>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline font-sans text-sm text-ink transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow mb-5">Contact</h2>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="link-underline text-ink transition-colors hover:text-accent"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phoneHref}`}
                  className="link-underline text-ink transition-colors hover:text-accent"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-5">Social</h2>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ink transition-colors hover:text-accent"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ink transition-colors hover:text-accent"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-5">Location</h2>
            <p className="font-sans text-sm text-ink">{siteConfig.contact.city}</p>
            <p className="mt-2 font-sans text-sm text-muted">We work remotely too.</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-8 font-sans text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Nexa. All rights reserved.</p>
          <p>{siteConfig.supporting}</p>
        </div>
      </div>
    </footer>
  )
}
