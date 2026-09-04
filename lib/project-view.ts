import type { Project } from '@/content/projects'
import { altFor, resolveImage } from '@/lib/images'

/**
 * Serialisable view model for a project card.
 *
 * Image paths are resolved on the server (resolveImage touches the filesystem), so cards can
 * be rendered from Client Components — such as the filtered work grid — without dragging
 * node:fs into the browser bundle.
 */
export interface ProjectView {
  slug: string
  title: string
  category: Project['category']
  year: string
  description: string
  src: string
  alt: string
}

export function toProjectView(project: Project): ProjectView {
  return {
    slug: project.slug,
    title: project.title,
    category: project.category,
    year: project.year,
    description: project.description,
    src: resolveImage(project.image),
    alt: altFor(project.image, project.title),
  }
}
