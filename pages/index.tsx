import type { NextPage, GetStaticProps } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import Hero from 'components/global/Hero'
import TypeWriter from 'components/global/TypeWriter'
import Code from 'components/Icons/Code'

const text2bold = {
  bold: (children: React.ReactNode) => <b>{children}</b>,
}

const Home: NextPage = () => {
  const t = useTranslations('Index')

  return (
    <>
      <Hero
        greeting={t.rich('hero.greeting', text2bold)}
        knowledge={<TypeWriter prefix={t('hero.knowledge.prefix')} titles={['Full Stack Developer', 'Web Developer', 'VTEX Developer']} />}
        from={t.rich('hero.from', text2bold)}
      >
        <Code />
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
