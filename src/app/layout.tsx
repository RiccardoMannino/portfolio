import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import MainLayout from '@/components/MainLayout'
import Script from 'next/script'

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Script src="//code.tidio.co/s6rxdeglaehynnnibhoiymfu9q834k5u.js"></Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex h-screen bg-slate-100 sm:h-dvh sm:overflow-scroll lg:overflow-hidden`}
      >
        <link rel="icon" href="favicon.png" sizes="any" />
        <Sidebar />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
