import Link from 'next/link'
import { UilGithubAlt, UilLinkedinAlt } from '@iconscout/react-unicons'
import { useTranslations } from 'next-intl'

const Navigation = () => {
  const t = useTranslations('Header')

  const links = [
    {
      href: '#about',
      label: t('links.about'),
    },
    {
      href: '#projects',
      label: t('links.projects'),
    },
    {
      href: '#blog',
      label: t('links.blog'),
    },
    {
      href: 'https://www.linkedin.com/in/eobando/',
      label: <UilLinkedinAlt />,
    },
    {
      href: 'https://github.com/Mecrano',
      label: <UilGithubAlt />,
    },
  ]

  return (
    <nav>
      {links.map(({ href, label }) => (
        <Link key={href} href={href} scroll={false}>
          <a>{label}</a>
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
