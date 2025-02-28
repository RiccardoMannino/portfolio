import React from 'react'

type title = {
  title: string
}

export default function Tag({ title }: title) {
  return (
    <div className="w-fit rounded bg-emerald-400 p-1 text-sm font-semibold text-neutral-50">
      {title}
    </div>
  )
}
