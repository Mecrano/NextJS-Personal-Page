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

const extractProjectEntries = (response: GraphQLResponse) => {
  return response?.data?.projectCollection?.items?.map(({ sys, ...project }) => {
    return {
      ...sys,
      ...project,
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
            publishedAt
          }
          title
          description
          content {
            json
          }
          imageUrl
          slug
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

  return extractProjectEntries(entries)
}

const extractPostEntries = (response: GraphQLResponse) => {
  return response?.data?.postCollection?.items?.map(({ sys, ...post }) => {
    return {
      ...sys,
      ...post,
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

  return extractPostEntries(entries)
}
