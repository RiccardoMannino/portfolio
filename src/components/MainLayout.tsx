''

import React from 'react'
import Footer from './Footer'
import Sidebar from './Sidebar'
import ThemeContextProvider from '@/app/context/theme/ThemeContext'
import ThemeProvider from '@/app/context/theme/ThemeProvider'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ThemeContextProvider>
        <ThemeProvider>
          <Sidebar />
          <div className="flex-1 lg:pt-2 lg:pl-2">
            <div className="min-h-screen overflow-x-hidden border border-transparent lg:rounded-tl-xl">
              <main className="mx-auto mb-10 h-screen w-full max-w-4xl px-4 py-20">
                {children}
                <Footer />
              </main>
            </div>
          </div>
        </ThemeProvider>
      </ThemeContextProvider>
    </>
  )
}
