'use client'

import { TypewriterEffectSmooth } from '@/components/TypeWriterEffectSmooth'

export default function TypewriterEffect() {
  const phrases = [
    [
      { text: 'Riccardo', className: 'md:text-4xl text-3xl' },
      { text: 'Mannino', className: 'md:text-4xl text-3xl' },
    ],
    [
      { text: 'Junior', className: 'md:text-4xl text-3xl' },
      { text: 'Frontend', className: 'md:text-4xl text-3xl' },
      { text: 'Developer', className: 'text-emerald-500 md:text-4xl text-3xl' },
    ],
  ]

  return (
    <div className="mb-10 flex flex-col items-center justify-center">
      <p className="text-3xl font-bold text-emerald-500 md:text-4xl">
        Ciao, sono
      </p>
      <TypewriterEffectSmooth words={phrases} />
    </div>
  )
}
