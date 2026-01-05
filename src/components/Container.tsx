'use client'

import { ReactNode, useRef } from 'react'
import {
  useInView,
  motion,
  VariantLabels,
  TargetAndTransition,
} from 'motion/react'

type SectionProps = {
  children: ReactNode
  type?: 'div' | 'section'
  transition?: string | undefined
  transform?: string
  translate?: string
  opacity?: number
  className?: string
  id?: string
  whileHover?: VariantLabels | TargetAndTransition
}

export default function Container({
  children,
  transform = 'translateY(0)',
  translate = 'translateY(50px)',
  opacity = 1,
  transition = 'opacity 0.5s ease, transform 0.5s ease',
  className,
  id,
  type = 'div',
  whileHover,
}: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const divRef = useRef<HTMLDivElement>(null)

  const isInView = useInView(type === 'section' ? sectionRef : divRef)

  const style = {
    transform: isInView ? transform : translate,
    opacity: isInView ? opacity : 0,
    transition,
  }

  return type === 'div' ? (
    <motion.div
      id={id}
      ref={divRef}
      style={style}
      className={className}
      whileHover={whileHover}
    >
      {children}
    </motion.div>
  ) : (
    <motion.section
      id={id}
      ref={sectionRef}
      style={style}
      className={className}
    >
      {children}
    </motion.section>
  )
}
