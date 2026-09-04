'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import { processSteps } from '@/content/clients'

/**
 * Process told horizontally.
 *
 * Desktop: the section is pinned while the four steps translate sideways with scroll.
 * Mobile: the same steps become a swipeable row with scroll-snap — a different layout
 * decision, not a shrunken desktop one. Reduced motion falls back to the mobile layout.
 */
export function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Three viewport-widths of travel across four panels.
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%'])

  return (
    <section id="process" className="border-t border-line">
      {/* Mobile / reduced motion: horizontal swipe with snap points. */}
      <div className={`py-section ${reduced ? '' : 'lg:hidden'}`}>
        <div className="shell">
          <h2 className="text-display-md text-ink">How we work</h2>
        </div>
        <ul className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-gutter pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {processSteps.map((step) => (
            <li
              key={step.index}
              className={`w-[78vw] max-w-sm shrink-0 snap-start rounded-panel border bg-surface/50 p-8 ${
                step.index === '01' ? 'border-l-2 border-l-accent border-y-line border-r-line' : 'border-line'
              }`}
            >
              <span className="font-display text-4xl font-semibold leading-none text-accent [font-variant-numeric:tabular-nums]">{step.index}</span>
              <h3 className="mt-6 font-display text-3xl leading-none text-ink">
                {step.title}
              </h3>
              <p className="mt-4 font-sans text-sm text-muted">{step.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop: sticky horizontal storytelling. */}
      {!reduced && (
        <div ref={containerRef} className="relative hidden h-[380vh] lg:block">
          <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
            <div className="shell">
              <h2 className="text-display-md text-ink">How we work</h2>
            </div>

            <motion.ul style={{ x }} className="mt-16 flex w-[400vw] will-change-transform">
              {processSteps.map((step) => (
                <li key={step.index} className="flex w-screen items-start px-gutter">
                  <div className="flex max-w-3xl items-start gap-12">
                    <span className="font-display text-[9rem] leading-[0.8] text-accent/90">
                      {step.index}
                    </span>
                    <div className="pt-4">
                      <h3 className="font-display text-6xl leading-none text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-6 max-w-md font-sans text-lg text-muted">{step.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </motion.ul>

            {/* Progress rail — tells the reader how much of the story is left. */}
            <div className="shell mt-16">
              <div className="h-px w-full bg-line">
                <motion.div
                  className="h-px origin-left bg-accent"
                  style={{ scaleX: scrollYProgress }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
