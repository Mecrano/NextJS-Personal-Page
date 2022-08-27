import { UilGithubAlt, UilLinkedinAlt } from '@iconscout/react-unicons'
import { useTranslations } from 'next-intl'

import Back from './Back'
import ThemeSwitcher from './ThemeSwitcher'
import Navigation from '../Navigation'
import styles from './styles.module.css'

const Header = () => {
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
    <header className={`${styles.mainHeader} flex-center w-full my-5 sticky top-0`}>
      <div className="flex justify-between w-full max-w-7xl p-3">
        <Back />
        <div className="flex justify-end items-center gap-x-10">
          <Navigation links={links} />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Header
