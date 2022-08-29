import { useState, useEffect } from 'react'

import styles from './styles.module.css'

interface TypeWriterProps {
  prefix?: string
  titles: string[]
  typingInterval?: number
  pauseBetweenWords?: number
}

interface TypingData {
  title: string
  indexWord: number
  indexCharacter: number
  text: string
  eraseMode: boolean
}

const TypeWriter = ({ prefix = ' ', titles, typingInterval = 100, pauseBetweenWords = 1500 }: TypeWriterProps) => {
  const firstWord: TypingData = {
    title: titles[0],
    indexWord: 0,
    indexCharacter: 0,
    text: '',
    eraseMode: false,
  }

  const [currentWord, setCurrentWord] = useState<TypingData>(firstWord)

  const sleep = (delay: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, delay)
    })
  }

  const getNextText = ({ indexCharacter, title, eraseMode, ...typingData }: TypingData, pause: number) =>
    new Promise<TypingData>((resolve) => {
      setTimeout(() => {
        const newIndex = eraseMode ? indexCharacter - 1 : indexCharacter + 1
        const newTypingData = { ...typingData, title, eraseMode, indexCharacter: newIndex, text: title.slice(0, newIndex) }

        resolve(newTypingData)
      }, pause)
    })

  const getNextWord = ({ indexWord }: TypingData, pause: number) =>
    new Promise<TypingData>((resolve) => {
      setTimeout(() => {
        const newTypingData = {
          ...firstWord,
          title: titles[indexWord],
          indexWord: indexWord + 1,
        }

        resolve(newTypingData)
      }, pause)
    })

  const startTyping = async (typingData: TypingData) => {
    if (typingData.eraseMode) {
      if (typingData?.indexCharacter > 0) {
        const nextText = await getNextText(typingData, typingInterval)

        setCurrentWord(nextText)
      } else if (typingData?.indexWord === titles?.length) {
        await sleep(typingInterval * 2)
        setCurrentWord(firstWord)
      } else if (typingData?.indexCharacter === 0 || typingData?.indexWord < titles?.length) {
        const nextWord = await getNextWord(typingData, typingInterval * 2)

        setCurrentWord(nextWord)
      }
    } else if (typingData?.indexCharacter < typingData?.title?.length) {
      const nextText = await getNextText(typingData, typingInterval)

      setCurrentWord(nextText)
    } else if (typingData?.indexCharacter === typingData?.title?.length) {
      await sleep(pauseBetweenWords)
      setCurrentWord({ ...typingData, eraseMode: true })
    }
  }

  useEffect(() => {
    startTyping(currentWord)
  }, [currentWord])

  return (
    <span className={styles.typewriter}>
      {prefix}
      <b className="ml-2.5">{`${currentWord?.text}`}</b>
    </span>
  )
}

export default TypeWriter
