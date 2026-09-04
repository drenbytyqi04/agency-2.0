'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useMemo, useState } from 'react'

import { ProjectCard } from '@/components/ui/project-card'
import type { ProjectCategory } from '@/content/projects'
import { projectCategories } from '@/content/projects'
import type { ProjectView } from '@/lib/project-view'

/** Client-side filtered portfolio grid. Filtering never touches the network. */
export function WorkGrid({ projects }: { projects: ProjectView[] }) {
  const [active, setActive] = useState<ProjectCategory | 'Të gjitha'>('Të gjitha')
  const reduced = useReducedMotion()

  const visible = useMemo(
    () => (active === 'Të gjitha' ? projects : projects.filter((p) => p.category === active)),
    [active, projects],
  )

  return (
    <>
      <div className="border-y border-line py-5">
        <div className="shell">
          <ul className="flex flex-wrap gap-x-2 gap-y-2" role="list">
            {projectCategories.map((category) => {
              const isActive = category === active
              return (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => setActive(category)}
                    aria-pressed={isActive}
                    className={`min-h-[44px] border px-5 py-2 font-sans text-[12px] uppercase tracking-[0.14em] transition-colors duration-300 ${
                      isActive
                        ? 'border-accent bg-accent text-accent-ink'
                        : 'border-line text-muted hover:border-line-strong hover:text-ink'
                    }`}
                  >
                    {category}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="shell py-16 md:py-24">
        {/* Keeps the heading order intact between the page h1 and the h3 on each card. */}
        <h2 className="sr-only">Projektet</h2>

        {/* aria-live keeps screen readers informed when the result count changes. */}
        <p className="sr-only" aria-live="polite">
          {visible.length} projekte të shfaqura
        </p>

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.div
                key={project.slug}
                layout={!reduced}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.4, delay: reduced ? 0 : index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className={index % 3 === 0 ? 'md:col-span-2' : ''}
              >
                <ProjectCard
                  project={project}
                  size={index % 3 === 0 ? 'lg' : 'md'}
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visible.length === 0 && (
          <p className="py-20 text-center font-sans text-sm text-muted">
            Nuk ka projekte në këtë kategori.
          </p>
        )}
      </div>
    </>
  )
}
