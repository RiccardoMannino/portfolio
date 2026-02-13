'use client'

import { ThemeContext } from '@/app/context/theme/ThemeContext'
import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react'
import { useContext } from 'react'
import Button from './Button'

export default function ThemeToggle() {
  const { toggle, theme } = useContext(ThemeContext)

  return (
    <Button
      onClick={toggle}
      className={`fixed top-4 left-4 z-100 flex cursor-pointer items-center justify-between ${theme === 'dark' ? 'shadow-foreground' : ''}`}
    >
      {theme === 'dark' ? (
        <IconMoonFilled size={20} className="text-background" />
      ) : (
        <IconSunFilled size={20} className="font-foreground" />
      )}
    </Button>
  )
}
