import type { MetadataRoute } from 'next'

import { caseStudyProjects } from '@/content/projects'
import { siteConfig } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes = ['', '/services', '/work', '/about', '/contact'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Only projects that actually have a page — link-only entries have no route to index.
  const projectRoutes = caseStudyProjects.map((project) => ({
    url: `${siteConfig.url}/work/${project.slug}`,
    lastModified,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...projectRoutes]
}
