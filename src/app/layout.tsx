import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import MainLayout from '@/components/MainLayout'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  metadataBase: new URL('https:/www.riccardomannino.it'),
  title: 'Riccardo Mannino | Frontend Developer',
  keywords: [
    'Riccardo mannino',
    'Sviluppatore Frontend Junior Palermo',
    'Frontend Developer Junior',
    'Sviluppatore Web',
  ],
  description:
    'Sono Riccardo Mannino Realizzo siti web moderni e personalizzati per aziende e privati.',
  openGraph: {
    url: 'https://www.riccardomannino.it',
    title: 'Riccardo Mannino | Frontend Developer',
    siteName: 'Riccardo Mannino',
    images: [
      {
        url: '../assets/Me.jpg',
        width: 1200,
        height: 630,
      },
    ],
    description:
      'Sono Riccardo Mannino Realizzo siti web moderni e personalizzati per aziende e privati.',
    locale: 'it-IT',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className="scroll-smooth antialiased">
      <body className={`flex bg-slate-100`}>
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
