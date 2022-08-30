import styles from './styles.module.css'

interface TypeWriterProps {
  prefix?: string
  text: string
}

const TypeWriter = ({ prefix, text }: TypeWriterProps) => {
  return (
    <span className={styles.typewriter}>
      {prefix}
      <b className="ml-2.5">{`${text}`}</b>
    </span>
  )
}

export default TypeWriter
