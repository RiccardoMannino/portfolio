import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'
import { motion } from 'motion/react'
import {
  VariantLabels,
  AnimationControls,
  TargetAndTransition,
  Target,
  Transition,
} from 'motion/react'

type Button = {
  onClick?: (event: React.FormEvent) => void
  children: ReactNode
  type: 'submit' | 'reset' | 'button' | undefined
  className?: string
  transition?: Transition
  initial?: boolean | Target | VariantLabels
  animate?: boolean | AnimationControls | TargetAndTransition | undefined
  whileHover?: VariantLabels | TargetAndTransition
}

export default function Button({
  onClick,
  children,
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
      initial={initial}
      animate={animate}
      onClick={onClick}
      type={type}
      className={cn(
        'phone:self-center phone:px-4 phone:py-2 flex w-fit items-center justify-between rounded-full bg-gray-900 px-4 py-3 text-xs font-semibold text-white',
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
