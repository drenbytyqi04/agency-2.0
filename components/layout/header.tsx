'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { MobileMenu } from '@/components/layout/mobile-menu'
import { ctas, navigation, siteConfig } from '@/lib/site'

/** Sticky header: transparent at the top, backed and slightly shorter once scrolled. */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Route changes should never leave the overlay open.
  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-editorial ${
          scrolled ? 'border-b border-line bg-base/85 backdrop-blur-md' : 'border-b border-transparent'
        }`}
      >
        <div
          className={`shell flex items-center justify-between transition-all duration-300 ease-editorial ${
            scrolled ? 'h-[3.75rem]' : 'h-[var(--header-height)]'
          }`}
        >
          <Link
            href="/"
            className="font-display text-2xl font-semibold uppercase leading-none tracking-[0.06em] text-ink transition-colors hover:text-accent"
            aria-label="Nexa — home"
          >
            Nexa
          </Link>

          <nav className="hidden lg:block" aria-label="Main navigation">
            <ul className="flex items-center gap-9">
              {navigation.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={`link-underline font-sans text-[13px] tracking-[0.01em] transition-colors ${
                        active ? 'text-accent' : 'text-muted hover:text-ink'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={siteConfig.bookingHref}
              className="hidden min-h-[46px] items-center rounded-full border border-line-strong px-6 font-sans text-[12px] font-medium text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-ink lg:inline-flex"
            >
              {ctas.primaryShort}
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="-mr-2 flex h-12 w-12 items-center justify-center text-ink lg:hidden"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
                <path d="M0 1h22M0 13h14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
