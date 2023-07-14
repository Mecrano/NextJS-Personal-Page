import Image from 'next/image'
import { useRouter } from 'next/router'
import { UilGithubAlt, UilGlobe } from '@iconscout/react-unicons'
import Link from 'next/link'

import Button from 'components/Button'

export interface ProjectProps {
  id?: string
  title: string
  description: string
  imageUrl: string
  slug: string
  callToAction: string
  repositoryLink?: string | null
  demoLink?: string | null
  inverted?: boolean
}

const Project = ({ title, description, imageUrl, slug, callToAction, repositoryLink = null, demoLink = null, inverted }: ProjectProps) => {
  const { push } = useRouter()

  return (
    <div className={`md:flex items-center justify-between my-10 mb-20 gap-4${inverted ? '' : ' md:flex-row-reverse'}`}>
      <div className="max-w-xl mb-6 aspect-square md:mb-0">
        <Image alt={title} src={imageUrl} width="550" height="550" />
      </div>
      <div className={`max-w-xl w-full flex flex-col text-center md:text-left${inverted ? ' md:items-end md:text-right' : ''}`}>
        <h4 className="mb-3 text-h4 font-medium md:text-h4-md">{title}</h4>
        <p className="mb-10 text-h6 md:text-h6">{description}</p>
        <div className="flex-center md:justify-start gap-2">
          <Button variant="primary" onClick={() => push(`/projects/${slug}`)}>
            {callToAction}
          </Button>
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
        </div>
      </div>
    </div>
  )
}

export default Project
