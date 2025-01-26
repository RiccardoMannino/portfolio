import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import MainLayout from '@/components/MainLayout'
import Script from 'next/script'
import { Toaster } from 'react-hot-toast'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Riccardo Mannino | Frontend Developer',
  description: 'Riccardo Mannino Portfolio Website',
  openGraph: {
    description: 'Riccardo Mannino Portfolio Website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overscroll-none">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex h-screen bg-slate-100 sm:h-dvh sm:overflow-scroll`}
      >
        <link rel="icon" href="favicon.ico" sizes="16x16" />

        <Sidebar />
        <MainLayout>{children}</MainLayout>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={24}
          toastOptions={{
            success: { duration: 4000 },
            error: { duration: 4000 },
            style: {
              backgroundColor: '#111827',
              color: '#fff',
              fontSize: '1.2rem',
              fontWeight: '500',
              padding: '1rem',
            },
          }}
        />
      </body>
    </html>
  )
}
