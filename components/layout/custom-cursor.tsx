'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Minimal lime dot cursor, pointer devices only.
 *
 * Deliberately not an accessibility surface: the native cursor is left visible on touch and
 * coarse-pointer devices, the element is aria-hidden, and it never intercepts pointer events.
 * Disabled entirely under prefers-reduced-motion.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduced) return

    setEnabled(true)

    // Position is written straight to the transform each frame — no React state per move.
    let raf = 0
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const current = { ...target }

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX
      target.y = event.clientY
      const element = event.target as HTMLElement | null
      setActive(Boolean(element?.closest('a, button, input, textarea, select, [role="button"]')))
    }

    const tick = () => {
      current.x += (target.x - current.x) * 0.18
      current.y += (target.y - current.y) * 0.18
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[90] hidden rounded-full bg-accent transition-[width,height,opacity] duration-300 ease-editorial md:block ${
        active ? 'h-6 w-6 opacity-60' : 'h-2 w-2 opacity-100'
      }`}
    />
  )
}
