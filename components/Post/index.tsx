import React from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'

interface PostProps extends Post {
  index: number
  actionText: string
}

const getDate = (publishedAt: string, locale: string) => {
  const date = new Date(publishedAt)

  return date.toLocaleString(locale, { month: 'long', day: 'numeric', year: 'numeric' })
}

const Post = ({ index, title, publishedAt, slug, actionText }: PostProps) => {
  const locale = useLocale()

  return (
    <article className="w-full md:w-1/2 flex items-center justify-center p-16">
      <div>
        <span className="text-h1 md:text-h1-md">0{index}</span>
        <p className="pt-6 text-h4 md:text-h4-md">{title}</p>
        <div className="pt-6 flex items-center gap-6">
          <time>{getDate(publishedAt ?? '', locale)}</time>
          <Link href={slug}>{actionText}</Link>
        </div>
        <p className="text-prueba">text</p>
      </div>
    </article>
  )
}

export default Post
