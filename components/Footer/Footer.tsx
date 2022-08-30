import Link from 'next/link'

import type { NavigationMenuLink } from 'components/NavigationMenu'

import styles from './styles.module.css'

interface FooterProps {
  links: NavigationMenuLink[]
  t: any
}

const Footer = ({ links, t }: FooterProps) => {
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
