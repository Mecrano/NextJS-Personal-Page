import Link from 'next/link'

import type { NavigationMenuLink } from 'components/NavigationMenu'

interface FooterProps {
  links: NavigationMenuLink[]
  t: any
}

const Footer = ({ links, t }: FooterProps) => {
  return (
    <footer className={`flex-center flex-col min-h-[300px]`}>
      <p className="m-1">{t('sentence')}</p>
      <p className="m-1 mb-6">{t('copyright')}</p>
      <div className="flex justify-between items-center gap-x-6">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} scroll={false} className="p-2 text-lg hover:text-gray-400 dark:hover:text-gray-300 whitespace-nowrap">
            {label}
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer
