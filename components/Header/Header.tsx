import type { NavigationMenuLink } from '../NavigationMenu'
import ThemeSwitcher from '../ThemeSwitcher'
import LanguageSwitcher from '../LanguageSwitcher'
import NavigationMenu from '../NavigationMenu'
import styles from './styles.module.css'

interface HeaderProps {
  navigationLinks: NavigationMenuLink[]
}

const Header = ({ navigationLinks }: HeaderProps) => {
  return (
    <header className={`${styles.mainHeader} flex-center w-full sm:mt-5 sticky top-0 z-50`}>
      <div className="flex justify-between w-full max-w-7xl p-3">
        <NavigationMenu links={navigationLinks} />

        <div className="flex justify-end items-center gap-x-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Header
