import type { MetadataRoute } from 'next'

import { projects } from '@/content/projects'
import { siteConfig } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes = ['', '/sherbimet', '/pune', '/rreth-nesh', '/kontakt'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/pune/${project.slug}`,
    lastModified,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...projectRoutes]
}
