import React from 'react'
import Footer from './Footer'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex-1 bg-gray-100 lg:pt-2 lg:pl-2">
      <div className="min-h-screen overflow-x-hidden border border-transparent bg-white lg:rounded-tl-xl lg:border-neutral-200">
        <main className="mx-auto mb-10 h-screen w-full max-w-4xl px-4 py-20">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  )
}
