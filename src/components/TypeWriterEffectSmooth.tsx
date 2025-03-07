'use client'

import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[][]
  className?: string
  cursorClassName?: string
}) => {
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const currentPhrase = words[phraseIndex]
    const fullText = currentPhrase.map((word) => word.text).join(' ')

    if (isDeleting) {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, 50) // Velocità di cancellazione
      } else {
        setIsDeleting(false)
        setPhraseIndex((prevIndex) => (prevIndex + 1) % words.length)
      }
    } else {
      if (currentText.length < fullText.length) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1))
        }, 100) // Velocità di scrittura
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2000) // Pausa prima di iniziare a cancellare
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, words, phraseIndex])

  return (
    <div className={cn('my-2 flex space-x-1', className)}>
      <motion.div className="flex h-20 flex-wrap justify-center text-wrap font-bold">
        {words[phraseIndex].map((word, idx) => (
          <span key={word.text} className={cn(word.className)}>
            {currentText.slice(
              words[phraseIndex]
                .slice(0, idx)
                .reduce((acc, w) => acc + w.text.length + 1, 0),
              words[phraseIndex]
                .slice(0, idx + 1)
                .reduce((acc, w) => acc + w.text.length + 1, 0) - 1,
            )}
            {idx < words[phraseIndex].length - 1 && '\u00A0'}
          </span>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
          }}
          className={cn(
            'h-12 w-[4px] self-start rounded-xs bg-emerald-500 phone:block',
            cursorClassName,
          )}
        ></motion.span>
      </motion.div>
    </div>
  )
}
