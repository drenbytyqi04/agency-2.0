import Image from 'next/image'
import Link from 'next/link'

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

  return (
    <article className="group">
      <Link href={`/pune/${project.slug}`} className="block">
        <div className={`relative ${aspect} overflow-hidden bg-surface`}>
          <Image
            src={project.src}
            alt={project.alt}
            fill
            sizes={size === 'lg' ? '(max-width: 1024px) 100vw, 60vw' : '(max-width: 1024px) 100vw, 40vw'}
            priority={priority}
            className="object-cover transition-transform duration-[900ms] ease-editorial will-change-transform group-hover:scale-[1.04]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-base/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          {/* Hover marker, hidden from assistive tech — the link already announces the action. */}
          <span
            aria-hidden="true"
            className="absolute bottom-5 right-5 translate-y-2 border border-accent bg-base/70 px-4 py-2 font-sans text-[11px] uppercase tracking-[0.16em] text-accent opacity-0 backdrop-blur-sm transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100"
          >
            Shiko rastin
          </span>
        </div>

        <div className="mt-5 flex items-baseline justify-between gap-6 border-t border-line pt-4">
          <h3 className="font-display text-2xl uppercase leading-none text-ink transition-colors duration-300 group-hover:text-accent md:text-3xl">
            {project.title}
          </h3>
          <span className="shrink-0 font-sans text-[11px] uppercase tracking-[0.18em] text-muted">
            {project.category} · {project.year}
          </span>
        </div>
        <p className="mt-3 max-w-lg font-sans text-sm text-muted">{project.description}</p>
      </Link>
    </article>
  )
}
