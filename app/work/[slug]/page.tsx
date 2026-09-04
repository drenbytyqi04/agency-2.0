import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { MaskText } from '@/components/animations/mask-text'
import { Reveal } from '@/components/animations/reveal'
import { ButtonLink } from '@/components/ui/button'
import { PhotoCredits } from '@/components/ui/photo-credits'
import { Eyebrow, PlaceholderNote } from '@/components/ui/section'
import { caseStudyProjects, getNextProject, getProject } from '@/content/projects'
import { isPlaceholderSrc } from '@/lib/image-src'
import { altFor, creditFor, resolveImage } from '@/lib/images'
import { ctas, siteConfig } from '@/lib/site'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  const title = `${project.title} — ${project.category}`

  return {
    title,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${title} — Nexa`,
      description: project.description,
      url: `${siteConfig.url}/work/${project.slug}`,
      images: [{ url: '/images/og/default.svg', width: 1200, height: 630, alt: project.title }],
    },
    twitter: { title: `${title} — Nexa`, description: project.description },
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const next = getNextProject(project.slug)
  const heroSrc = resolveImage(project.image)
  const heroCredit = creditFor(project.image)

  // Only render the sections that actually have something written for them.
  const chapters = [
    { label: 'Challenge', body: project.challenge },
    { label: 'Approach', body: project.approach },
    { label: 'Solution', body: project.solution },
    { label: 'Result', body: project.result },
  ].filter((chapter): chapter is { label: string; body: string } => Boolean(chapter.body))

  return (
    <article>
      <header className="pb-12 pt-[calc(var(--header-height)+4rem)]">
        <div className="shell">
          <Link
            href="/work"
            className="link-underline font-sans text-[12px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
          >
            ← All work
          </Link>

          <MaskText
            as="h1"
            className="mt-10 text-display-lg text-ink"
            lines={[project.title]}
          />

          <dl className="mt-10 grid gap-6 border-t border-line pt-6 sm:grid-cols-3 lg:max-w-2xl">
            <div>
              <dt className="eyebrow">Category</dt>
              <dd className="mt-1 font-sans text-sm text-ink">{project.category}</dd>
            </div>
            <div>
              <dt className="eyebrow">Sector</dt>
              <dd className="mt-1 font-sans text-sm text-ink">{project.sector}</dd>
            </div>
            <div>
              <dt className="eyebrow">Year</dt>
              <dd className="mt-1 font-sans text-sm text-ink [font-variant-numeric:tabular-nums]">
                {project.year}
              </dd>
            </div>
          </dl>

          {project.liveUrl && (
            <div className="mt-8">
              <ButtonLink href={project.liveUrl} variant="ghost" size="sm">
                View live site
              </ButtonLink>
            </div>
          )}

          {project.isPlaceholder && (
            <div className="mt-8">
              <PlaceholderNote>
                Demonstration case — a fictional project built to show how we work
              </PlaceholderNote>
            </div>
          )}
        </div>
      </header>

      <figure className="relative aspect-[16/10] w-full overflow-hidden bg-surface md:aspect-[16/8]">
        <Image
          src={heroSrc}
          alt={altFor(project.image, project.title)}
          fill
          priority
          sizes="100vw"
          unoptimized={isPlaceholderSrc(heroSrc)}
          className="object-cover"
        />
      </figure>
      {heroCredit && (
        <div className="shell pt-3">
          <figcaption className="font-sans text-[11px] text-muted">
            Photo:{' '}
            <a href={heroCredit.url} target="_blank" rel="noopener noreferrer" className="link-underline">
              {heroCredit.photographer}
            </a>{' '}
            / Unsplash
          </figcaption>
        </div>
      )}

      <section className="shell py-section">
        <p className="max-w-3xl font-sans text-xl leading-relaxed text-ink md:text-2xl">
          {project.intro}
        </p>

        {chapters.length > 0 && (
        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
          {chapters.map((chapter) => (
            <Reveal key={chapter.label}>
              <h2 className="font-display text-3xl leading-none text-ink">
                {chapter.label}
              </h2>
              <p className="mt-5 max-w-xl font-sans text-base text-muted">{chapter.body}</p>
            </Reveal>
          ))}
        </div>
        )}
      </section>

      {project.metrics && project.metrics.length > 0 && (
      <section className="border-y border-line bg-surface py-16">
        <div className="shell">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <Eyebrow>In numbers</Eyebrow>
            {project.isPlaceholder && (
              <PlaceholderNote>Illustrative figures — not measured client results</PlaceholderNote>
            )}
          </div>

          <dl className="mt-10 grid gap-px bg-line sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="bg-surface p-8">
                <dd className="font-display text-5xl leading-none text-accent [font-variant-numeric:tabular-nums] md:text-6xl">
                  {metric.value}
                </dd>
                <dt className="mt-4 font-sans text-xs uppercase tracking-[0.16em] text-muted">
                  {metric.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>
      )}

      {project.gallery.length > 0 && (
        <section className="shell py-section">
          <h2 className="sr-only">Project gallery</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {project.gallery.map((image, index) => {
              const src = resolveImage(image)
              return (
              <Reveal
                key={image}
                delay={index * 0.05}
                className={index % 3 === 0 ? 'md:col-span-2' : ''}
              >
                <div
                  className={`relative overflow-hidden bg-surface ${
                    index % 3 === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <Image
                    src={src}
                    alt={altFor(image, `${project.title} — view ${index + 1}`)}
                    fill
                    loading="lazy"
                    sizes={index % 3 === 0 ? '(max-width: 768px) 100vw, 90vw' : '(max-width: 768px) 100vw, 45vw'}
                    unoptimized={isPlaceholderSrc(src)}
                    className="object-cover"
                  />
                </div>
              </Reveal>
              )
            })}
          </div>
        </section>
      )}

      <section className="border-t border-line py-section">
        <div className="shell">
          <PhotoCredits
            files={[project.image, ...project.gallery]}
            className="mb-14 border-b border-line pb-6"
          />

          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <Eyebrow>Next project</Eyebrow>
              <Link href={`/work/${next.slug}`} className="group mt-4 block">
                <h2 className="font-display text-display-sm text-ink transition-colors duration-300 group-hover:text-accent">
                  {next.title}
                </h2>
              </Link>
            </div>
            <ButtonLink href={siteConfig.bookingHref}>{ctas.primary}</ButtonLink>
          </div>
        </div>
      </section>
    </article>
  )
}
