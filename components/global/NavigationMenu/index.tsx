import { useState } from 'react'
import { UilBars, UilTimes } from '@iconscout/react-unicons'
import Link from 'next/link'

import Button from 'components/UI/Button'

import styles from './styles.module.css'

interface NavigationMenuLink {
  href: string
  label: any
  type: 'text' | 'icon'
}

interface NavigationMenuProps {
  links: NavigationMenuLink[]
}

const NavigationMenu = ({ links }: NavigationMenuProps) => {
  const [open, setOpen] = useState(false)

  const textLinks = links.filter(({ type }) => type === 'text')
  const iconLinks = links.filter(({ type }) => type === 'icon')

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="flex-center justify-start">
      <Button className={styles.mobileShow} variant="icon" onClick={handleOpen}>
        <UilBars />
      </Button>
      <nav className={`flex justify-between items-center gap-x-6 ${styles.navDrawer} ${open ? styles.open : ''}`}>
        <Button className={`${styles.mobileShow}`} variant="icon" onClick={handleOpen}>
          <UilTimes />
        </Button>
        {textLinks.map(({ href, label }) => (
          <Link key={href} href={href} scroll={false}>
            <a className={styles.navigation}>{label}</a>
          </Link>
        ))}
        <div className="flex justify-between items-center gap-x-6">
          {iconLinks.map(({ href, label }) => (
            <Link key={href} href={href} scroll={false}>
              <a className={styles.navigation}>{label}</a>
            </Link>
          ))}
        </div>
      </nav>
      <div className={styles.backDrop} onClick={handleOpen}></div>
    </div>
  )
}

export default NavigationMenu
