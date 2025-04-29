'use client'

import Container from '@/components/Container'
import { progetti } from '@/data/progetti'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Projects() {
  const router = useRouter()

  const handleClick = (slug: string) => {
    router.push(`/projects/${slug.toLowerCase().split(' ').join('-')}`)
  }

  return (
    <>
      <h1 className="mb-10 text-3xl font-bold text-emerald-500">Progetti 💼</h1>
      <section>
        {progetti.map((el) => (
          <div
            key={el.nome}
            className="phone:flex-col mb-10 flex w-full gap-10"
          >
            <Container
              type="div"
              transform="translateX(0)"
              translate="translateX(-100px)"
            >
              <Image
                src={el.immagine}
                alt="immagine"
                width={300}
                height={200}
                className="cursor-pointer rounded-2xl"
                onClick={() => handleClick(el.nome)}
              />
            </Container>
            <Container
              type="div"
              transform="translateX(0)"
              translate="translateX(100px)"
            >
              <h1 className="text-lg font-semibold text-emerald-500">
                {el.nome}
              </h1>
              <p className="text-base font-semibold text-neutral-500">
                {el.descrizione}
              </p>
            </Container>
          </div>
        ))}
      </section>
    </>
  )
}
