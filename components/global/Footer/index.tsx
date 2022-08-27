import { UilGithubAlt, UilLinkedinAlt } from '@iconscout/react-unicons'
import { useTranslations } from 'next-intl'

import Navigation from '../Navigation'
import styles from './styles.module.css'

const Footer = () => {
  const t = useTranslations('Footer')

  const links = [
    {
      href: 'https://github.com/Mecrano',
      label: <UilGithubAlt />,
    },
    {
      href: 'https://www.linkedin.com/in/eobando/',
      label: <UilLinkedinAlt />,
    },
  ]

  return (
    <footer className={`flex-center flex-col ${styles.mainFooter}`}>
      <p className="m-1">{t('sentence')}</p>
      <p className="m-1 mb-6">{t('copyright')}</p>
      <Navigation links={links} />
    </footer>
  )
}

export default Footer
