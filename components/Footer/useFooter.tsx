import { UilGithubAlt, UilLinkedinAlt } from '@iconscout/react-unicons'
import { useTranslations } from 'next-intl'

const useFooter = () => {
  const t = useTranslations('Footer')

  const links = [
    {
      href: 'https://www.linkedin.com/in/eobando/',
      label: <UilLinkedinAlt />,
    },
    {
      href: 'https://github.com/Mecrano',
      label: <UilGithubAlt />,
    },
  ]

  return { links, t }
}

export default useFooter
