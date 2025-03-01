'use client'

import { ReactNode, useRef } from 'react'
import { useInView, motion } from 'motion/react'

interface SectionProps {
  children: ReactNode
  type: string
  transition?: string
  transform?: string
  translate?: string
  opacity?: number
  className?: string
  id?: string
}

export default function Container({
  children,
  transform = 'translateY(0)',
  translate = 'translateY(50px)',
  opacity = 1,
  transition = 'opacity 0.5s ease, transform 0.5s ease',
  className,
  id,
  type,
}: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const divRef = useRef<HTMLDivElement>(null)

  const isInView = useInView(type === 'section' ? sectionRef : divRef)

  const style = {
    transform: isInView ? transform : translate,
    opacity: isInView ? opacity : 0,
    transition,
  }

  return type === 'section' ? (
    <motion.section
      id={id}
      ref={sectionRef}
      style={style}
      className={className}
    >
      {children}
    </motion.section>
  ) : (
    type === 'div' && (
      <motion.div id={id} ref={divRef} style={style} className={className}>
        {children}
      </motion.div>
    )
  )
}
