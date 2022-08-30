import { useState } from 'react'

import type { NavigationMenuLink } from '.'

const useNavigationMenu = (links: NavigationMenuLink[]) => {
  const [open, setOpen] = useState(false)

  const textLinks = links.filter(({ type }) => type === 'text')
  const iconLinks = links.filter(({ type }) => type === 'icon')

  const handleOpen = () => {
    setOpen(!open)
  }

  return {
    open,
    textLinks,
    iconLinks,
    handleOpen,
  }
}

export default useNavigationMenu
