'use client'

import { useContext, useEffect } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeProvider = ({ children }) => {
  const { theme, isClient } = useContext(ThemeContext)

  // Sincronizza la classe `dark` su <html> così le regole globali funzionano
  useEffect(() => {
    if (!isClient) return
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme, isClient])

  return <div className="w-full">{children}</div>
}

export default ThemeProvider