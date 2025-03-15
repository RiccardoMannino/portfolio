import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="h-10 text-base font-medium text-emerald-500">
      <div className="phone:flex-col phone:gap-6 phone:text-center flex flex-wrap items-center justify-between py-10">
        <p>© 2025 Riccardo Mannino. Tutti i diritti riservati.</p>
        <div className="phone:pb-10 phone:text-center flex items-center gap-5 font-semibold">
          <Link href="/privacy">Privacy policy</Link>
          <Link href="#">Cookie policy</Link>
        </div>
      </div>
    </footer>
  )
}
