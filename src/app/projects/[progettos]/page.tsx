'use client'
import React, { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import { IconArrowNarrowLeft } from '@tabler/icons-react'
import { progetti } from '@/data/progetti'
import Container from '@/components/Container'
import Button from '@/components/Button'

export default function Progetto() {
  const [hover, setHover] = useState(false)
  const { progettos } = useParams()
  const router = useRouter()

  const progetto = progetti.find(
    (p) => p.nome.toLowerCase().split(' ').join('-') === progettos,
  )
  const tecnologie = progetti
    .filter((p) => p.nome.toLowerCase().split(' ').join('-') === progettos)
    .map((el) =>
      el.tecnologie.map((ele) => (
        <div className="grid place-items-center" key={ele.nome}>
          <Image
            src={ele.image}
            width={70}
            height={70}
            alt="tecnologie"
            className="phone:w-15 phone:h-15 cursor-pointer transition-all duration-200 hover:-translate-y-2"
          />
          <p className="text-center font-semibold text-emerald-500">
            {ele.nome}
          </p>
        </div>
      )),
    )

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
      <div className="phone:grid-rows-1 phone:grid-cols-1 grid gap-7">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center gap-7">
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

          <p className="mt-4 text-center text-neutral-500">
            {progetto?.descrizione}
          </p>
          <p className="mt-2 text-center text-neutral-500">
            {progetto?.approfondimento}
          </p>
          <Image
            src={progetto?.immagine}
            alt="immagine"
            className="self-center rounded-2xl"
            width={500}
          />
        </div>
        <div className="flex w-full flex-col flex-wrap gap-2">
          <div className="flex h-fit flex-col gap-5 rounded-2xl p-4">
            <h1 className="text-center font-semibold text-emerald-500">
              Tecnologie utilizzate
            </h1>
            <div className="phone:grid-flow-row grid grid-flow-col grid-rows-1 place-content-center gap-5">
              {tecnologie}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
