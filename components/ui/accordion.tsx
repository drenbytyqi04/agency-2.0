'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useId, useState } from 'react'

export interface AccordionItem {
  question: string
  answer: string
}

/**
 * Disclosure list. Native buttons, aria-expanded/aria-controls wired up, and content that
 * stays in the accessibility tree order. Height animation is skipped under reduced motion.
 */
export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const baseId = useId()
  const reduced = useReducedMotion()

  return (
    <div className="border-t border-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`

        return (
          <div key={item.question} className="border-b border-line">
            <h4>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left font-sans text-base text-ink transition-colors duration-300 hover:text-accent"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={`relative mt-2 block h-3 w-3 shrink-0 transition-transform duration-300 ease-editorial ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current" />
                </span>
              </button>
            </h4>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduced ? { opacity: 1 } : { height: 0, opacity: 0 }}
                  animate={reduced ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                  exit={reduced ? { opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-7 font-sans text-sm text-muted">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
