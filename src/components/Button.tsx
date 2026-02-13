'use client'

import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'
import { motion } from 'motion/react'
import {
  VariantLabels,
  TargetAndTransition,
  Target,
  Transition,
} from 'motion/react'

type Button = {
  onClick?: (event: React.FormEvent) => void
  children: ReactNode
  type?: 'submit' | 'reset' | 'button' | undefined
  className?: string
  transition?: Transition
  initial?: boolean | Target | VariantLabels
  animate?: boolean | TargetAndTransition | undefined
  whileHover?: VariantLabels | TargetAndTransition
  disabled?: boolean
}

export default function Button({
  onClick,
  children,
  disabled,
  type,
  className,
  transition,
  initial,
  animate,
  ...props
}: Button) {
  return (
    <motion.button
      transition={transition}
      disabled={disabled}
      initial={initial}
      animate={animate}
      onClick={onClick}
      type={type}
      className={cn(
        'phone:self-center phone:px-4 phone:py-2 hover:bg-primary-hover bg-primary text-foreground flex w-fit items-center justify-between rounded-full border-2 border-black px-4 py-3 text-xs font-semibold shadow-md transition hover:translate-y-1 hover:shadow active:translate-x-1 active:translate-y-2 active:shadow-none',
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
