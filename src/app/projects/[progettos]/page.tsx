'use client'
import { useParams, useRouter } from 'next/navigation'
import { progetti } from '@/progetti'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

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
    return <p className="font-semibold text-red-500">Progetto non trovato!</p>
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
          className="phone:p-0 bg-emerald-500 p-0 hover:cursor-pointer"
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
      <div className="phone:grid-rows-2 phone:grid-cols-1 grid grid-cols-2 gap-7">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center gap-5">
            <h1 className="text-3xl font-bold text-emerald-500">
              {progetto?.nome}
            </h1>
            <Button
              type="button"
              whileHover={{ scale: 1.1 }}
              className="bg-emerald-500"
            >
              <Link href={progetto?.href} target="_blank">
                Link
              </Link>
            </Button>
          </div>

          <p className="phone:text-center mt-4 text-neutral-500">
            {progetto?.descrizione}
          </p>
          <p className="phone:text-center mt-2 text-neutral-500">
            {progetto?.approfondimento}
          </p>
          <Image
            src={progetto?.immagine}
            alt="immagine"
            className="rounded-2xl"
          />
        </div>
        <div className="flex w-full flex-col flex-wrap gap-2">
          <div className="flex h-fit flex-col gap-5 rounded-2xl bg-emerald-500 p-4">
            <h1 className="text-center font-semibold text-neutral-50">
              Tecnologie utilizzate
            </h1>
            <div className="flex flex-wrap gap-5">{tecnologie}</div>
          </div>
        </div>
      </div>
    </Container>
  )
}
