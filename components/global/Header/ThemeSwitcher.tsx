import { UilSun, UilMoon } from '@iconscout/react-unicons'

import Button from 'components/UI/Button'
import useTheme from 'hooks/useTheme'

const ThemeIcon = ({ theme }: { theme: string | null }) => {
  switch (theme) {
    case 'dark':
      return <UilMoon />

    case 'light':
      return <UilSun />

    default:
      // Light
      return <UilSun />
  }
}

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="icon"
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}
    >
      <ThemeIcon theme={theme} />
    </Button>
  )
}

export default ThemeSwitcher
