'use client'
import { useParams, useRouter } from 'next/navigation'
import { progetti } from '@/progetti'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import Container from '@/components/Container'
import Button from '@/components/ButtonLink'
import { IconArrowNarrowLeft } from '@tabler/icons-react'
import Tag from '@/components/Tag'

export default function Progetto() {
  const [hover, setHover] = useState(false)
  const { progettos } = useParams()
  const router = useRouter()

  const progetto = progetti.find(
    (p) => p.nome.toLowerCase().split(' ').join('-') === progettos,
  )
  const tecnologie = progetti
    .filter((p) => p.nome.toLowerCase().split(' ').join('-') === progettos)
    .map((el) => el.tecnologie.map((ele) => <Tag title={ele} key={ele} />))

  if (!progetto) {
    return <p className="text-red-500">Progetto non trovato</p>
  }

  return (
    <Container type="section" className="mx-auto flex flex-col gap-7 p-6">
      <div
        onClick={(e) => {
          e.preventDefault(), router.back()
        }}
        className="flex items-center gap-2 hover:cursor-pointer"
      >
        <Button
          type="button"
          className="bg-emerald-500 p-0 phone:p-0"
          animate={{ x: hover ? -5 : 0 }}
          whileHover={{ x: -5 }}
        >
          <IconArrowNarrowLeft size={30} color="white" />
        </Button>
        <span
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(!hover)}
          className="text-lg font-semibold text-emerald-500"
        >
          Torna indietro
        </span>
      </div>
      <div className="flex gap-7">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-emerald-500">
            {progetto?.nome}
          </h1>
          <p className="mt-4 text-neutral-500 phone:text-center">
            {progetto?.descrizione}
          </p>
          <p className="mt-2 text-neutral-500">{progetto?.approfondimento}</p>
          <Image
            src={progetto?.immagine}
            alt="immagine"
            className="rounded-2xl"
          />
          <Button type="button">
            <Link href={progetto?.href} target="_blank">
              Link
            </Link>
          </Button>
        </div>
        <div className="flex h-fit w-full flex-col flex-wrap gap-2 rounded-2xl bg-emerald-500 p-2">
          <h1 className="w-full text-center font-semibold text-neutral-50">
            Tecnologie utilizzate
          </h1>
          <div className="flex flex-wrap gap-4">{tecnologie}</div>
        </div>
      </div>
    </Container>
  )
}
