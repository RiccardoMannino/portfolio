'use client'
import { useParams } from 'next/navigation'
import { progetti } from '@/progetti'
import Image from 'next/image'
import React from 'react'
import Container from '@/components/Container'

export default function Progetto() {
  const { progettos } = useParams()

  const progetto = progetti.find(
    (p) => p.nome.toLowerCase().split(' ').join('-') === progettos,
  )

  if (!progetto) {
    return <p className="text-red-500">Progetto non trovato</p>
  }

  return (
    <Container type="section" className="mx-auto flex flex-col gap-7 p-6">
      <Image src={progetto?.immagine} alt="immagine" className="rounded-2xl" />
      <h1 className="text-3xl font-bold text-emerald-500">{progetto?.nome}</h1>
      <p className="mt-4 text-neutral-500">{progetto?.descrizione}</p>
      <p className="mt-2">{progetto?.approfondimento}</p>
    </Container>
  )
}
