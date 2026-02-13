// src/components/NextIconTheme.tsx
'use client'
import { useContext } from 'react'
import Image from 'next/image'
import NextIcon from '../icons/nextjs.svg'
import NextIconwhite from '../icons/nextjswhite.svg'

import ThemeProvider from '@/app/context/theme/ThemeProvider'
import { ThemeContext } from '@/app/context/theme/ThemeContext'

export default function NextIconTheme(props: any) {
  const { theme } = useContext(ThemeContext)

  return (
    <Image
      src={theme !== 'dark' ? NextIcon : NextIconwhite}
      width={70}
      height={70}
      alt="Nextjs"
      {...props}
    />
  )
}
