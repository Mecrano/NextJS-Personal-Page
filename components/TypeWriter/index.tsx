import TypeWriter from './TypeWriter'
import useTypeWriter from './useTypeWriter'

interface TypeWriterContainerProps {
  prefix?: string
  titles: string[]
  typingInterval?: number
  pauseBetweenWords?: number
}

const TypeWriterContainer = ({ prefix = ' ', titles, typingInterval = 100, pauseBetweenWords = 1500 }: TypeWriterContainerProps) => {
  const text = useTypeWriter(titles, typingInterval, pauseBetweenWords)

  return <TypeWriter prefix={prefix} text={text} />
}

export default TypeWriterContainer
