interface GraphQLProjectCollection {
  items: Project[]
}

interface GraphQLPostCollection {
  items: Post[]
}

type GraphQLData = {
  projectCollection?: GraphQLProjectCollection
  postCollection?: GraphQLPostCollection
}

interface GraphQLResponse {
  data: GraphQLData
}

const fetchGraphQL = async (query: string, preview = false) => {
  return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error)

      return []
    })
}

const extractProjectEntries = (response: GraphQLResponse, locale: string) => {
  return response?.data?.projectCollection?.items?.map(({ sys, ...project }) => {
    return {
      ...sys,
      ...project,
      locale,
    }
  })
}

export const listProjects = async (preview: boolean, locale: string, limit = 100) => {
  const entries: any = await fetchGraphQL(
    `query {
      projectCollection(limit: ${limit}, preview: ${preview ? 'true' : 'false'}, locale: "${locale}") {
        items {
          sys {
            id
          }
          title
          description
          imageUrl
          slug
          callToAction
          repositoryLink
          demoLink
        }
      }
    }`,
    preview
  )

  return extractProjectEntries(entries, locale)
}

export const listSlugProjects = async (preview: boolean, locale: string, limit = 100) => {
  const entries: any = await fetchGraphQL(
    `query {
      projectCollection(limit: ${limit}, preview: ${preview ? 'true' : 'false'}, locale: "${locale}") {
        items {
          slug
        }
      }
    }`,
    preview
  )

  return extractProjectEntries(entries, locale)
}

export const getProjectBySlug = async (slug: string, preview: boolean, locale: string) => {
  const entries: any = await fetchGraphQL(
    `query {
      projectCollection(where: { slug: "${slug}" }, preview: ${preview ? 'true' : 'false'}, locale: "${locale}", limit: 1) {
        items {
            sys {
              id
              publishedAt
            }
            title
            description
            content {
              json
              links {
                assets {
                  block {
                    sys {
                      id
                    }
                    url
                    description
                  }
                }
              }
            }
            imageUrl
            slug
            timeRead
            author {
              name
            }
            callToAction
            repositoryLink
            demoLink
        }
      }
    }`,
    preview
  )

  return extractProjectEntries(entries, locale)
}

const extractPostEntries = (response: GraphQLResponse, locale: string) => {
  return response?.data?.postCollection?.items?.map(({ sys, ...post }) => {
    return {
      ...sys,
      ...post,
      locale,
    }
  })
}

export const listPosts = async (preview: boolean, locale: string, limit = 100) => {
  const entries: any = await fetchGraphQL(
    `query {
      postCollection(limit: ${limit}, preview: ${preview ? 'true' : 'false'}, locale: "${locale}") {
        items {
          sys {
            id
            publishedAt
          }
          title
          content {
            json
          }
          imageUrl
          slug
          author {
            name
          }
        }
      }
    }`,
    preview
  )

  return extractPostEntries(entries, locale)
}

export const listSlugPosts = async (preview: boolean, locale: string, limit = 100) => {
  const entries: any = await fetchGraphQL(
    `query {
      postCollection(limit: ${limit}, preview: ${preview ? 'true' : 'false'}, locale: "${locale}") {
        items {
          slug
        }
      }
    }`,
    preview
  )

  return extractPostEntries(entries, locale)
}

export const getPostBySlug = async (slug: string, preview: boolean, locale: string) => {
  const entries: any = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${preview ? 'true' : 'false'}, locale: "${locale}", limit: 1) {
        items {
          sys {
            id
            publishedAt
          }
          title
          content {
            json
            links {
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  description
                }
              }
            }
          }
          imageUrl
          slug
          timeRead
          author {
            name
          }
        }
      }
    }`,
    preview
  )

  return extractPostEntries(entries, locale)
}
