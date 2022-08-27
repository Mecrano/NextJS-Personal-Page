import type { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { UilMoon } from '@iconscout/react-unicons'

import Button from 'components/UI/Button'
import styles from 'styles/Home.module.css'

const Home: NextPage = () => {
  const t = useTranslations('Index')

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href="/" locale="es">
          <a>Pasar a español</a>
        </Link>
        <Link href="/" locale="en">
          <a>Pasar a ingles</a>
        </Link>
        <h1 className={styles.title}>
          {t('title')}
          <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>{t('description')}</p>

        <Button>
          <UilMoon /> Primary
        </Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="tertiary">tertiary</Button>
        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
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
