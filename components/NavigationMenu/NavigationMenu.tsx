import { UilBars, UilTimes } from '@iconscout/react-unicons'
import Link from 'next/link'

import Button from 'components/Button'

import type { NavigationMenuLink } from '.'

interface NavigationMenuProps {
  handleOpen: () => void
  open: boolean
  textLinks: NavigationMenuLink[]
  iconLinks: NavigationMenuLink[]
}

const NavigationLinks = ({ links }: { links: NavigationMenuLink[] }) => (
  <>
    {links.map(({ href, label }) => (
      <Link key={href} href={href} scroll={false} className="p-2 text-lg hover:text-gray-400 dark:hover:text-gray-300 whitespace-nowrap">
        {label}
      </Link>
    ))}
  </>
)

const NavigationMenu = ({ handleOpen, open, textLinks, iconLinks }: NavigationMenuProps) => {
  return (
    <div className="flex-center justify-start">
      <Button className="flex md:hidden" variant="icon" onClick={handleOpen}>
        <UilBars />
      </Button>
      <nav
        className={`flex flex-col justify-start transition-[left] duration-500 ease-out w-11/12 max-w-xs p-2 fixed -left-[110vw] top-0 bottom-0 z-[51] bg-white dark:bg-gray-700 md:static md:flex-row md:justify-between md:items-center md:gap-x-6 ${
          open ? '!left-0 ease-in' : ''
        }`}
      >
        <Button className="flex self-end mb-5 md:hidden" variant="icon" onClick={handleOpen}>
          <UilTimes />
        </Button>
        <NavigationLinks links={textLinks} />
        <div className="flex justify-center items-center gap-x-6 mt-3 md:mt-0">
          <NavigationLinks links={iconLinks} />
        </div>
      </nav>
      <div className={`opacity-0 transition-opacity duration-500 ease-out z-50 ${open ? 'fixed top-0 left-0 right-0 bottom-0 bg-black !opacity-25 ease-in' : ''}`} onClick={handleOpen}></div>
    </div>
  )
}

export default NavigationMenu
