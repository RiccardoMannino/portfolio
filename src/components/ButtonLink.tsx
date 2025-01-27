import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

type Button = {
  onClick: (event: React.FormEvent) => void
  children: ReactNode
  type: 'submit' | 'reset' | 'button' | undefined
  className?: string
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

{
  /* <h2 className="mb-5 mt-10 text-center text-lg font-medium md:text-left md:text-2xl">
        Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
        {icons.map((i) => (
          <Image
          key={i.alt}
          src={i.icon}
          alt={i.alt}
          className="m-1 h-[45px] w-[45px] transition duration-300 hover:-translate-y-2 hover:cursor-pointer md:h-[60px] md:w-[60px]"
          />
          ))}
          </div> */
}
