import Image from 'next/image'
import { useRouter } from 'next/router'
import { UilGithubAlt, UilGlobe } from '@iconscout/react-unicons'

import Button from 'components/Button'

interface ButtonProject {
  label: string
  link: string
  type: 'text' | 'icon'
  variant?: 'primary' | 'secondary' | 'tertiary' | 'icon'
}

export interface ProjectProps {
  id?: string
  title: string
  description: string
  imageURL: string
  buttons: ButtonProject[]
  inverted?: boolean
}

const Project = ({ title, description, imageURL, buttons, inverted }: ProjectProps) => {
  const { push } = useRouter()

  return (
    <div className={`md:flex items-center justify-between my-10 mb-20 gap-4${inverted ? '' : ' md:flex-row-reverse'}`}>
      <div className="max-w-xl mb-6 md:mb-0">
        <Image alt={title} src={imageURL} layout="intrinsic" width="550px" height="550px" />
      </div>
      <div className={`max-w-xl w-full flex flex-col text-center md:text-left${inverted ? ' md:items-end md:text-right' : ''}`}>
        <h4 className="mb-3 text-2xl font-medium">{title}</h4>
        <p className="mb-10">{description}</p>
        <div className="flex-center md:justify-start gap-2">
          {buttons.map(({ label, link, variant, type }) => (
            <Button key={link} variant={variant} onClick={() => push(link)}>
              {type === 'text' ? label : label === 'github' ? <UilGithubAlt /> : <UilGlobe />}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
