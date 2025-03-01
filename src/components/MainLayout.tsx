import React from 'react'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex-1 bg-gray-100 lg:pl-2 lg:pt-2">
      <div className="min-h-screen overflow-y-auto border border-transparent bg-white lg:rounded-tl-xl lg:border-neutral-200">
        <main className="mx-auto w-full max-w-4xl px-4 py-20 sm:h-dvh lg:h-screen">
          {children}
          <footer className="h-10 text-lg font-medium text-emerald-500">
            <div className="flex flex-wrap items-center justify-between py-10 phone:flex-col phone:gap-6 phone:text-center">
              <p>© 2025 Riccardo Mannino. Tutti i diritti riservati.</p>
              <div className="flex items-center gap-5 phone:text-center">
                <p>Privacy policy</p>
                <p>Cookie policy</p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
