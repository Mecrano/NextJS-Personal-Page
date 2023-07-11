import React from 'react'
import type { NextPage, GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next'

import { getProjectBySlug, listSlugProjects } from 'lib/contentful'

const ProjectDetail: NextPage = ({ project }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title } = project ?? {}

  return <div>{title}</div>
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
  const [project] = (await getProjectBySlug(`${slug}`, preview, `${locale}`)) ?? []

  return {
    props: {
      messages: (await import(`messages/${locale}.json`)).default,
      project,
    },
  }
}

export default ProjectDetail
