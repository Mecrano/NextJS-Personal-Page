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
    <article className="w-full flex items-center justify-start py-6 border-b border-dashed border-gray-400 dark:border-gray-200 md:first:!border-b md:odd:border-0 md:odd:border-r last:border-0 md:justify-center md:w-1/2 md:p-16">
      <div>
        <div className={`text-h1 font-bold md:text-h1-md w-20 h-auto md:w-16`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -50 85 55" className="block">
            <text className="fill-transparent stroke-2 stroke-black dark:stroke-white">0{index}</text>
          </svg>
        </div>
        <p className="pt-6 text-h4 md:text-h4-md font-bold">{title}</p>
        <div className="pt-6 flex items-center gap-6">
          <time className="whitespace-nowrap text-gray-500 dark:text-gray-200 text-small md:text-body-md">{getDate(publishedAt ?? '', locale)}</time>
          <Link href={`/post/${slug}`} className="underline text-purple-200 dark:text-purple-100 text-small md:text-body-md">
            {actionText}
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Post
