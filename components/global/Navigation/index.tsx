import Link from 'next/link'

import styles from './styles.module.css'

interface NavigationLink {
  href: string
  label: any
}

interface NavigationProps {
  links: NavigationLink[]
}

const Navigation = ({ links }: NavigationProps) => {
  return (
    <nav className="flex justify-between items-center gap-x-7">
      {links.map(({ href, label }) => (
        <Link key={href} href={href} scroll={false}>
          <a className={styles.navigation}>{label}</a>
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
