import { UilGithubAlt, UilLinkedinAlt } from '@iconscout/react-unicons'
import { useTranslations } from 'next-intl'

import ThemeSwitcher from '../ThemeSwitcher'
import LanguageSwitcher from '../LanguageSwitcher'
import NavigationMenu from '../NavigationMenu'
import styles from './styles.module.css'

const Header = () => {
  const t = useTranslations('Header')

  const navigationLinks = [
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

  return (
    <header className={`${styles.mainHeader} flex-center w-full sm:mt-5 sticky top-0 z-50`}>
      <div className="flex justify-between w-full max-w-7xl p-3">
        <NavigationMenu links={navigationLinks} />

        <div className="flex justify-end items-center gap-x-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Header
