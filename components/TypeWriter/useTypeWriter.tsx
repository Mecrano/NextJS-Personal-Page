import { useState, useEffect, useCallback, useMemo } from 'react'

interface TypingData {
  title: string
  indexWord: number
  indexCharacter: number
  text: string
  eraseMode: boolean
}

const useTypeWriter = (titles: string[], typingInterval: number, pauseBetweenWords: number) => {
  const firstWord: TypingData = useMemo(
    () => ({
      title: titles[0],
      indexWord: 1,
      indexCharacter: 0,
      text: '',
      eraseMode: false,
    }),
    [titles]
  )

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

  const getNextWord = useCallback(
    ({ indexWord }: TypingData, pause: number) =>
      new Promise<TypingData>((resolve) => {
        setTimeout(() => {
          const newTypingData = {
            ...firstWord,
            title: titles[indexWord],
            indexWord: indexWord + 1,
          }

          resolve(newTypingData)
        }, pause)
      }),
    [firstWord, titles]
  )

  const startTyping = useCallback(
    async (typingData: TypingData) => {
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
    },
    [firstWord, getNextWord, pauseBetweenWords, titles?.length, typingInterval]
  )

  useEffect(() => {
    startTyping(currentWord)
  }, [currentWord, startTyping])

  return currentWord?.text ?? ''
}

export default useTypeWriter
