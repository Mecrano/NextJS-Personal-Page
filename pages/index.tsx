import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslations } from 'next-intl'

import type { ProjectProps } from 'components/Project'
import Hero from 'components/Hero'
import TypeWriter from 'components/TypeWriter'
import Code from 'components/Icons/Code'
import Project from 'components/Project'

const text2bold = {
  bold: (children: React.ReactNode) => <b>{children}</b>,
}

const Home: NextPage = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
          {projects.map((project: ProjectProps, index: number) => (
            <Project key={project.id} inverted={!!(index % 2)} {...project} />
          ))}
        </div>
      </section>
      <section id="blog" className="mb-16  px-3"></section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
      projects: [
        {
          id: '1',
          title: 'Tassel',
          description: 'UI & UX design for a fashion marketplace. \n Personal conceptual side project.',
          imageURL: '/images/projects/Project1.webp',
          buttons: [
            {
              label: 'READ CASE STUDY',
              link: '/projects/tassel',
              type: 'text',
              variant: 'primary',
            },
            {
              label: 'github',
              link: '/github',
              type: 'icon',
              variant: 'icon-secondary',
            },
            {
              label: 'demo',
              link: '/demo',
              type: 'icon',
              variant: 'icon-secondary',
            },
          ],
        },
        {
          id: '2',
          title: 'Tassel',
          description: 'UI & UX design for a fashion marketplace. \n Personal conceptual side project.',
          imageURL: '/images/projects/Project1.webp',
          buttons: [
            {
              label: 'READ CASE STUDY',
              link: '/projects/tassel',
              type: 'text',
              variant: 'primary',
            },
            {
              label: 'github',
              link: '/github',
              type: 'icon',
              variant: 'icon-secondary',
            },
          ],
        },
      ],
    },
  }
}

export default Home
