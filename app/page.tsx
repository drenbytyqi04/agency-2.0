import type { Metadata } from 'next'

import { Commitments } from '@/components/sections/commitments'
import { FeaturedWork } from '@/components/sections/featured-work'
import { FinalCta } from '@/components/sections/final-cta'
import { Hero } from '@/components/sections/hero'
import { Pricing } from '@/components/sections/pricing'
import { Process } from '@/components/sections/process'
import { ServicesOverview } from '@/components/sections/services-overview'
import { Testimonials } from '@/components/sections/testimonials'
import { TrustMarquee } from '@/components/sections/trust-marquee'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <ServicesOverview />
      <Commitments />
      <FeaturedWork />
      <Process />
      <Pricing />
      <Testimonials />
      <FinalCta />
    </>
  )
}
