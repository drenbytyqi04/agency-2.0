import { MaskText } from '@/components/animations/mask-text'
import { StaggerGroup, StaggerItem } from '@/components/animations/stagger'
import { AccentWord } from '@/components/ui/accent-word'
import { ButtonLink } from '@/components/ui/button'
import { PhotoCredits } from '@/components/ui/photo-credits'
import { ProjectCard } from '@/components/ui/project-card'
import { Section } from '@/components/ui/section'
import { featuredProjects } from '@/content/projects'
import { toProjectView } from '@/lib/project-view'

/** How many projects the homepage shows before sending people to the full index. */
const HOMEPAGE_PROJECT_LIMIT = 12

export function FeaturedWork() {
  const shown = featuredProjects.slice(0, HOMEPAGE_PROJECT_LIMIT)
  const views = shown.map(toProjectView)
  const hasMore = featuredProjects.length > shown.length

  return (
    <Section id="work">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <MaskText className="text-display-md text-ink" lines={[<>Work that <AccentWord>speaks</AccentWord>.</>]} />
          {hasMore && (
            <ButtonLink href="/work" variant="ghost" size="sm" className="mb-2">
              All work
            </ButtonLink>
          )}
        </div>

        <StaggerGroup className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {views.map((project, index) => (
            <StaggerItem key={project.slug}>
              {/* The first row is above the fold on most screens. */}
              <ProjectCard project={project} priority={index < 3} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <PhotoCredits
          files={shown.map((project) => project.image)}
          className="mt-14 border-t border-line pt-6"
        />
      </div>
    </Section>
  )
}
