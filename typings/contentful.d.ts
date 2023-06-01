type Sys = {
  id: string
  publishedAt: string
}

type Author = {
  name: string
}

interface Post {
  sys?: Sys
  id?: string
  publishedAt?: string
  title: string
  content: unknown
  imageUrl: string
  slug: string
  author: Author
}

interface Project extends Post {
  description: string
  callToAction: string
  repositoryLink: string
  demoLink: string
}
