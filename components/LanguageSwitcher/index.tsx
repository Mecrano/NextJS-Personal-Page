import DropDown from 'components/DropDown'

import useLanguageSwitcher from './useLanguageSwitcher'

const LanguageSwitcherContainer = () => {
  const { language, handleChange, languageOptions } = useLanguageSwitcher()

  return <DropDown value={language} onChange={handleChange} options={languageOptions} />
}

export default LanguageSwitcherContainer
