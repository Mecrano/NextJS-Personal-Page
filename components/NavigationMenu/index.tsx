import NavigationMenu from './NavigationMenu'
import useNavigationMenu from './useNavigationMenu'

export interface NavigationMenuLink {
  href: string
  label: any
  type?: 'text' | 'icon'
}

interface NavigationMenuProps {
  links: NavigationMenuLink[]
}

const NavigationMenuContainer = ({ links }: NavigationMenuProps) => {
  const { open, textLinks, iconLinks, handleOpen } = useNavigationMenu(links)

  return <NavigationMenu open={open} textLinks={textLinks} iconLinks={iconLinks} handleOpen={handleOpen} />
}

export default NavigationMenuContainer
