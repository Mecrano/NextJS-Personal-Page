import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslations } from 'next-intl'

// import { listProjects, listPosts } from 'lib/contentful'
import Hero from 'components/Hero'
import TypeWriter from 'components/TypeWriter'
import Code from 'components/Icons/Code'
import Project from 'components/Project'
import Post from 'components/Post'

const text2bold = {
  bold: (children: React.ReactNode) => <b>{children}</b>,
}

const Home: NextPage = ({ projects = [], posts = [] }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const t = useTranslations('Index')

  return (
    <>
      <section id="about" className="mb-16">
        <Hero
          greeting={t.rich('hero.greeting', text2bold)}
          knowledge={<TypeWriter prefix={t('hero.knowledge.prefix')} titles={['Full Stack Developer', 'Web Developer', 'VTEX Developer']} />}
          from={t.rich('hero.from', text2bold)}
        >
          <Code />
        </Hero>
      </section>
      <section id="projects" className="mb-16 px-3">
        <div className="md:flex items-center justify-between max-w-5xl w-full mx-auto mt-28 mb-6 md:mb-28">
          <h2 className="text-3xl mb-2 md:text-center md:pr-3 font-bold">{t('projects.title')}</h2>
          <p className="max-w-2xl w-full md:text-center sm:text-2xl">{t('projects.sub-heading')}</p>
        </div>
        <div>
          {projects?.map(({ id, ...project }: Project, index: number) => (
            <Project key={id} {...project} inverted={!!(index % 2)} />
          ))}
        </div>
      </section>
      <section id="blog" className="mb-16 px-3">
        <div className="md:flex items-center justify-between max-w-5xl w-full mx-auto mt-28 mb-6 md:mb-28">
          <h2 className="text-3xl mb-2 md:text-center md:pr-3 font-bold">{t('blog.title')}</h2>
          <p className="max-w-2xl w-full md:text-center sm:text-2xl">{t('blog.sub-heading')}</p>
        </div>
        <div className="flex flex-wrap">
          {posts?.map(({ id, ...post }: Post, index: number) => (
            <Post key={id} index={index + 1} actionText={t('blog.action')} {...post} />
          ))}
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // const [projects, posts] = (await Promise.all([listProjects(false, `${locale}`, 3), listPosts(false, `${locale}`, 4)])) ?? [[], []]

  return {
    props: {
      messages: (await import(`../messages/${locale?.split('-')[0]}.json`)).default,
      // projects,
      // posts,
    },
  }
}

export default Home
