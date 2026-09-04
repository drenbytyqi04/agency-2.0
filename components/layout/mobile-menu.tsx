'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import { ctas, navigation, siteConfig } from '@/lib/site'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

/** Fullscreen navigation. Locks body scroll, traps focus and closes on Escape. */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = panelRef.current.querySelectorAll<HTMLElement>('a[href], button')
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    // Move focus into the panel so the next Tab stays inside it.
    panelRef.current?.querySelector<HTMLElement>('a[href], button')?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col bg-base lg:hidden"
          initial={reduced ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
          animate={reduced ? { opacity: 1 } : { clipPath: 'inset(0 0 0% 0)' }}
          exit={reduced ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex h-[var(--header-height)] shrink-0 items-center justify-between px-gutter">
            <span className="font-display text-2xl uppercase tracking-[0.08em]">Nexa</span>
            <button
              type="button"
              onClick={onClose}
              className="-mr-2 flex h-12 w-12 items-center justify-center text-ink"
              aria-label="Mbyll menunë"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center px-gutter" aria-label="Navigimi kryesor">
            <ul>
              {navigation.map((item, index) => (
                <li key={item.href} className="border-b border-line">
                  <motion.div
                    initial={reduced ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-baseline gap-4 py-5 font-display text-[13vw] uppercase leading-none text-ink transition-colors hover:text-accent"
                    >
                      <span className="font-sans text-[11px] tracking-[0.2em] text-muted">
                        0{index + 1}
                      </span>
                      {item.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </nav>

          <div className="shrink-0 border-t border-line px-gutter py-8">
            <Link
              href={siteConfig.bookingHref}
              onClick={onClose}
              className="flex min-h-[48px] w-full items-center justify-center bg-accent px-6 py-4 font-sans text-[13px] uppercase tracking-[0.16em] text-accent-ink"
            >
              {ctas.primary}
            </Link>
            <p className="mt-6 font-sans text-sm text-muted">{siteConfig.contact.email}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
