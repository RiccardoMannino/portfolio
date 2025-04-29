'use client'

import { TypewriterEffectSmooth } from '@/components/TypeWriterEffectSmooth'

export default function TypewriterEffect() {
  const phrases = [
    [
      { text: 'Riccardo', className: 'text-4xl' },
      { text: 'Mannino', className: 'text-4xl' },
    ],
    [
      { text: 'Junior', className: 'text-4xl ,' },
      { text: 'Frontend', className: 'text-4xl' },
      { text: 'Developer', className: 'text-emerald-500 text-4xl' },
    ],
  ]

  return (
    <div className="mb-10 flex flex-col items-center justify-center">
      <p className="text-4xl font-bold text-emerald-500">Ciao, sono</p>
      <TypewriterEffectSmooth words={phrases} />
    </div>
  )
}
