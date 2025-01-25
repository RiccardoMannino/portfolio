import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

type Button = {
  onClick: (event: React.FormEvent) => void
  children: ReactNode
  type: 'submit' | 'reset' | 'button' | undefined
  className: string
}

export default function Button({ onClick, children, type, className }: Button) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(
        'bold flex w-fit items-center justify-between rounded-full bg-gray-900 px-4 py-3 text-xs font-semibold text-white phone:self-center phone:px-2 phone:py-2',
        className,
      )}
    >
      {children}
    </button>
  )
}
