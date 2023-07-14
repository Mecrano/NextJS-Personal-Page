import type { NextPage, GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next'
import React from 'react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { UilUser, UilCalender, UilGithubAlt, UilGlobe, UilShareAlt } from '@iconscout/react-unicons'

import { getProjectBySlug, listSlugProjects } from 'lib/contentful'
import Button from 'components/Button'
import ContentfulBody from 'components/ContentfulBody'

const getDate = (publishedAt: string, locale: string) => {
  const date = new Date(publishedAt)

  return date.toLocaleString(locale, { month: 'long', day: 'numeric', year: 'numeric' })
}

const ProjectDetail: NextPage = ({ project }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const locale = useLocale()
  const { title, author, publishedAt, timeRead, repositoryLink, demoLink, imageUrl, content }: Project = project ?? {}

  return (
    <article className="md:px-7 md:mt-6">
      <div className="pb-5 border-b border-dashed border-gray-200 dark:border-gray-400">
        <div className="flex items-center justify-between">
          <h1 className="text-h4 font-bold pb-6 md:text-h3-md">{title}</h1>
          <div className="flex items-center gap-1">
            {repositoryLink ? (
              <Button variant="icon">
                <Link href={repositoryLink} scroll={false} target="_blank">
                  <UilGithubAlt />
                </Link>
              </Button>
            ) : null}
            {demoLink ? (
              <Button variant="icon">
                <Link href={demoLink} scroll={false} target="_blank">
                  <UilGlobe />
                </Link>
              </Button>
            ) : null}
            <Button variant="icon">
              <UilShareAlt />
            </Button>
          </div>
        </div>
        <span className="flex items-center gap-3 pb-3 text-purple-200 text-h6 md:text-h6-md dark:text-purple-100">
          <UilUser />
          {author?.name}
        </span>
        <span className="flex items-center gap-3 text-gray-400 dark:text-gray-300">
          <UilCalender />
          {getDate(publishedAt ?? '', locale)} · {timeRead}
        </span>
      </div>
      <div className="relative aspect-video my-10">
        <Image src={imageUrl} alt={title} priority fill />
      </div>
      <ContentfulBody content={content} />
    </article>
  )
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const projectsByLocale = (await Promise.all(locales?.map((locale) => listSlugProjects(false, `${locale}`)) ?? [])) ?? []
  const allProjects = projectsByLocale?.flat()?.map((project) => {
    return {
      params: {
        slug: `/projects/${project?.slug ?? ''}`,
      },
      locale: project?.locale,
    }
  })

  return {
    paths: allProjects ?? [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale, preview = false }) => {
  const { slug } = params ?? { slug: '' }
  const [project] = (await getProjectBySlug(`${slug}`, preview, `${locale}`)) ?? [null]

  return {
    props: {
      messages: (await import(`messages/${locale}.json`)).default,
      project,
    },
  }
}

export default ProjectDetail
