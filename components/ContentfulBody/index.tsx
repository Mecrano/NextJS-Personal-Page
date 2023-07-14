import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import Image from 'next/image'

import markdownStyles from './markdown-styles.module.css'

interface ContentfulBodyProps {
  content: any
}

const customMarkdownOptions = (content: any) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const asset = content?.links?.assets?.block?.find((currentAsset: any) => currentAsset?.sys?.id === node?.data?.target?.sys?.id)

      if (asset?.url) {
        return <Image src={asset.url} layout="fill" alt={asset.description} />
      }

      return null
    },
  },
})

const ContentfulBody = ({ content }: ContentfulBodyProps) => {
  return <div className={markdownStyles.markdown}>{documentToReactComponents(content?.json, customMarkdownOptions(content))}</div>
}

export default ContentfulBody
