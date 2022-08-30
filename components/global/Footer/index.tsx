import { UilGithubAlt, UilLinkedinAlt } from '@iconscout/react-unicons'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import styles from './styles.module.css'

const Footer = () => {
  const t = useTranslations('Footer')

  const links = [
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
    <footer className={`flex-center flex-col ${styles.mainFooter}`}>
      <p className="m-1">{t('sentence')}</p>
      <p className="m-1 mb-6">{t('copyright')}</p>
      <div className="flex justify-between items-center gap-x-6">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} scroll={false}>
            <a className={styles.navigation}>{label}</a>
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer
