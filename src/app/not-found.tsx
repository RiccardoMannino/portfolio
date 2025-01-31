'use client'
import Link from 'next/link'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Pagina non trovata!'
  }, [])

  return (
    <>
      <div className="flex h-[25rem] flex-col justify-center">
        <div className="flex w-full flex-col items-center justify-between gap-7">
          <h2 className="text-3xl font-bold text-emerald-500">
            Pagina Non Trovata!
          </h2>
          <p className="text-xl font-semibold">
            Impossibile trovare la risorsa richiesta
          </p>
          <Link
            href="/"
            className="rounded-full bg-gray-900 p-3 font-semibold text-gray-50"
          >
            Ritorna alla Home
          </Link>
        </div>
      </div>
    </>
  )
}
