import React from 'react'
import type { NextPage, GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next'

import { getPostBySlug, listSlugPosts } from 'lib/contentful'

const PostDetail: NextPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title } = post ?? {}

  return <div>{title}</div>
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const postsByLocale = (await Promise.all(locales?.map((locale) => listSlugPosts(false, `${locale}`)) ?? [])) ?? []
  const allPosts = postsByLocale?.flat()?.map((post) => {
    return {
      params: {
        slug: `/posts/${post?.slug ?? ''}`,
      },
      locale: post?.locale,
    }
  })

  return {
    paths: allPosts ?? [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale, preview = false }) => {
  const { slug } = params ?? { slug: '' }
  const [post] = (await getPostBySlug(`${slug}`, preview, `${locale}`)) ?? []

  return {
    props: {
      messages: (await import(`messages/${locale}.json`)).default,
      post,
    },
  }
}

export default PostDetail
