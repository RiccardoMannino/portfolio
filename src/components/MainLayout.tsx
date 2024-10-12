import React from 'react'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex-1 bg-gray-100 lg:pl-2 lg:pt-2">
      <div className="min-h-screen overflow-y-auto border border-transparent bg-white lg:overflow-hidden lg:rounded-tl-xl lg:border-neutral-200">
        <main className="mx-auto w-full max-w-4xl px-4 py-20 sm:h-dvh lg:h-screen">
          {children}
        </main>
      </div>
    </div>
  )
}
