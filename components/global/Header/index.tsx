import Back from './Back'
import Navigation from './Navigation'
import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  return (
    <header className="flex-center w-full my-5">
      <div className="flex justify-between w-full max-w-6xl p-3">
        <Back />
        <div className="flex justify-end items-center gap-x-10">
          <Navigation />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Header
