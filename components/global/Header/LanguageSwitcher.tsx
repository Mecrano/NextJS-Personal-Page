import type { ChangeEvent } from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

import DropDown from 'components/UI/DropDown'

const LanguageSwitcher = () => {
  const { locale, push, pathname, locales } = useRouter()
  const [language, setLanguage] = useState(locale ?? 'en')
  const t = useTranslations('Header.languageOptions')

  const languageOptions =
    locales?.map((lang: string | any) => ({
      value: lang,
      label: t(lang),
    })) ?? []

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value)
  }

  useEffect(() => {
    if (language !== locale) {
      push(pathname, '', {
        locale: language,
      })
    }
  }, [language, locale, pathname, push])

  return <DropDown value={language} onChange={handleChange} options={languageOptions} />
}

export default LanguageSwitcher
