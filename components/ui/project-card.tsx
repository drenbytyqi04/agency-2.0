import Image from 'next/image'
import Link from 'next/link'

import { isPlaceholderSrc } from '@/lib/image-src'
import type { ProjectView } from '@/lib/project-view'

interface ProjectCardProps {
  project: ProjectView
  /** Layout weight inside the asymmetric grid. */
  size?: 'lg' | 'md'
  priority?: boolean
}

/**
 * Portfolio card. Presentational only — it receives an already-resolved image path, so it is
 * safe to render from both Server and Client Components.
 *
 * The image scales inside a fixed frame on hover; the frame never moves, so nothing reflows.
 */
export function ProjectCard({ project, size = 'md', priority = false }: ProjectCardProps) {
  const aspect = size === 'lg' ? 'aspect-[4/3]' : 'aspect-[3/2]'

  // An external destination needs a plain anchor with the usual safety attributes;
  // internal ones stay with next/link so navigation is client-side.
  const linkProps = project.isExternal
    ? { href: project.href, target: '_blank' as const, rel: 'noopener noreferrer' }
    : { href: project.href }
  const Anchor = project.isExternal ? 'a' : Link

  return (
    <article className="group">
      <Anchor {...linkProps} className="block">
        <div className={`relative ${aspect} overflow-hidden rounded-card bg-surface`}>
          <Image
            src={project.src}
            alt={project.alt}
            fill
            sizes={
              size === 'lg'
                ? '(max-width: 1024px) 100vw, 60vw'
                : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            }
            priority={priority}
            unoptimized={isPlaceholderSrc(project.src)}
            className="object-cover transition-transform duration-[900ms] ease-editorial will-change-transform group-hover:scale-[1.04]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-base/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Hover marker, hidden from assistive tech — the link already announces the action. */}
          <span
            aria-hidden="true"
            className="absolute bottom-5 right-5 translate-y-2 rounded-full border border-accent bg-base/70 px-5 py-2 font-sans text-[11px] tracking-[0.02em] text-accent opacity-0 backdrop-blur-sm transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100"
          >
            {project.isExternal ? 'Visit site ↗' : 'View case'}
          </span>
        </div>

        <div className="mt-5 flex items-baseline justify-between gap-6 border-t border-line pt-4">
          <h3 className="font-display text-2xl leading-none text-ink transition-colors duration-300 group-hover:text-accent md:text-3xl">
            {project.title}
            {project.isExternal && <span className="sr-only"> (opens the live site in a new tab)</span>}
          </h3>
          <span className="shrink-0 font-sans text-[12px] uppercase tracking-[0.18em] text-muted md:text-[11px]">
            {project.category} · {project.year}
          </span>
        </div>
        {project.description && (
          <p className="mt-3 max-w-lg font-sans text-sm text-muted">{project.description}</p>
        )}
      </Anchor>
    </article>
  )
}
