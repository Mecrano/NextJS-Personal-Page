import type { NextPage, GetStaticProps } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import Hero from 'components/global/Hero'

const Home: NextPage = () => {
  const t = useTranslations('Index')

  return (
    <>
      <Hero>
        {t.rich('hero', {
          bold: (children) => <b>{children}</b>,
        })}
      </Hero>

      <Link href="/" locale="es">
        <a>Pasar a español</a>
      </Link>
      <Link href="/" locale="en">
        <a>Pasar a ingles</a>
      </Link>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  }
}

export default Home
