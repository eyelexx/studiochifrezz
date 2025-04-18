import { useTranslation } from 'next-i18next';
import * as S from './styles'

interface ProjectNavigationProps {
  currentSlug: string
  projects: { slug: string; name: string }[]
}

const ProjectNavigation = ({
  currentSlug,
  projects
}: ProjectNavigationProps) => {
const { t } = useTranslation('projects')

  const currentIndex = projects.findIndex(
    (project) => project.slug === currentSlug
  )

  // Determinar o projeto anterior e o próximo
  const previousProject = projects[currentIndex - 1] || null
  const nextProject = projects[currentIndex + 1] || null

  return (
    <S.NavigationWrapper>
      {previousProject ? (
        <S.NavLink href={`/projects/${previousProject.slug}`}>
          &larr; {t(`projects.${previousProject.slug}.name`, previousProject.name)}
        </S.NavLink>
      ) : (
        <span />
      )}
      {nextProject ? (
        <S.NavLink href={`/projects/${nextProject.slug}`}>
          {t(`projects.${nextProject.slug}.name`, nextProject.name)} &rarr;
        </S.NavLink>
      ) : (
        <span />
      )}
    </S.NavigationWrapper>
  )
}

export default ProjectNavigation
