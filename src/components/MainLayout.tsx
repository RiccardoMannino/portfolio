import React from 'react'
import Footer from './Footer'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex-1 bg-gray-100 lg:pl-2 lg:pt-2">
      <div className="min-h-screen overflow-x-hidden border border-transparent bg-white phone:overflow-y-hidden lg:rounded-tl-xl lg:border-neutral-200">
        <main className="mx-auto w-full max-w-4xl px-4 py-20 sm:h-dvh lg:h-screen">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  )
}
