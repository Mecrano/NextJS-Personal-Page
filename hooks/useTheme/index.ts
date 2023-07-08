import { useState, useEffect } from 'react'

const useTheme = () => {
  const [theme, setLocalTheme] = useState<string | null>(null)

  const setTheme = (newTheme: string) => {
    const html = document.querySelector(':root')

    // eslint-disable-next-line vtex/prefer-early-return
    if (html) {
      html.className = newTheme
      localStorage.setItem('theme', newTheme)
      setLocalTheme(newTheme)
    }
  }

  useEffect(() => {
    const storageTheme = window?.localStorage?.getItem('theme')

    if (storageTheme) {
      setLocalTheme(storageTheme)
      setTheme(storageTheme)
    } else if (window?.matchMedia) {
      const themeHandler = window.matchMedia('(prefers-color-scheme: dark)')

      setTheme(themeHandler.matches ? 'dark' : 'light')

      themeHandler.addEventListener('change', (event) => {
        if (!window?.localStorage?.getItem('theme')) {
          setLocalTheme(event.matches ? 'dark' : 'light')
        }
      })
    } else {
      setLocalTheme('light')
    }
  }, [])

  return { theme, setTheme }
}

export default useTheme
