'use client'
import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({ theme: '', toggle: () => {}, isClient: false })

export default function ThemeContextProvider({ children }) {
  // Inizializza con stringa vuota, poi aggiorna con useEffect
  const [theme, setTheme] = useState('')
  const [isClient, setIsClient] = useState(false)

  // Carica il tema dal localStorage solo dopo il mount del componente
  useEffect(() => {
    setIsClient(true)
    const storedTheme = localStorage.getItem('theme') || ''
    setTheme(storedTheme)
  }, [])

  // Funzione di toggle per il tema
  const toggle = () => {
    setTheme(prevTheme => prevTheme === '' ? 'dark' : '')
  }

  // Salva il tema nel localStorage quando cambia
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('theme', theme)
    }
  }, [theme, isClient])

  return (
    <ThemeContext value={{ theme, toggle, isClient }}>
      {children}
    </ThemeContext>
  )
}