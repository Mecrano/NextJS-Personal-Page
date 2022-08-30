import { UilBars, UilTimes } from '@iconscout/react-unicons'
import Link from 'next/link'

import Button from 'components/Button'

import type { NavigationMenuLink } from '.'
import styles from './styles.module.css'

interface NavigationMenuProps {
  handleOpen: () => void
  open: boolean
  textLinks: NavigationMenuLink[]
  iconLinks: NavigationMenuLink[]
}

const NavigationLinks = ({ links }: { links: NavigationMenuLink[] }) => (
  <>
    {links.map(({ href, label }) => (
      <Link key={href} href={href} scroll={false}>
        <a className={styles.navigation}>{label}</a>
      </Link>
    ))}
  </>
)

const NavigationMenu = ({ handleOpen, open, textLinks, iconLinks }: NavigationMenuProps) => {
  return (
    <div className="flex-center justify-start">
      <Button className={styles.mobileShow} variant="icon" onClick={handleOpen}>
        <UilBars />
      </Button>
      <nav className={`flex justify-between items-center gap-x-6 ${styles.navDrawer} ${open ? styles.open : ''}`}>
        <Button className={`${styles.mobileShow}`} variant="icon" onClick={handleOpen}>
          <UilTimes />
        </Button>
        <NavigationLinks links={textLinks} />
        <div className="flex justify-between items-center gap-x-6">
          <NavigationLinks links={iconLinks} />
        </div>
      </nav>
      <div className={styles.backDrop} onClick={handleOpen}></div>
    </div>
  )
}

export default NavigationMenu
