import { useTranslations } from 'next-intl'
import { UilGithubAlt, UilLinkedinAlt } from '@iconscout/react-unicons'

import type { NavigationMenuLink } from 'components/NavigationMenu'

const useHeader = () => {
  const t = useTranslations('Header')

  const navigationLinks: NavigationMenuLink[] = [
    {
      href: '#about',
      type: 'text',
      label: t('links.about'),
    },
    {
      href: '#projects',
      type: 'text',
      label: t('links.projects'),
    },
    {
      href: '#blog',
      type: 'text',
      label: t('links.blog'),
    },
    {
      href: 'https://www.linkedin.com/in/eobando/',
      type: 'icon',
      label: <UilLinkedinAlt />,
    },
    {
      href: 'https://github.com/Mecrano',
      type: 'icon',
      label: <UilGithubAlt />,
    },
  ]

  return navigationLinks
}

export default useHeader
