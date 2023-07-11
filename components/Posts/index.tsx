import React from 'react'

import Post from './Post'

interface PostsProps {
  posts: Post[]
  t: any
}

const Posts = ({ posts, t }: PostsProps) => {
  return (
    <div className={`before:gradient-light dark:before:gradient-dark flex flex-wrap relative`}>
      {posts?.map(({ id, ...post }: Post, index: number) => (
        <Post key={id} index={index + 1} actionText={t('blog.action')} {...post} />
      ))}
    </div>
  )
}

export default Posts
