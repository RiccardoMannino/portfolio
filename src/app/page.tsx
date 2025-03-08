'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'next/navigation'

import { progetti } from '@/progetti'
import Tag from '@/components/Tag'
import Container from '@/components/Container'
import ContactForm from '@/components/ContactForm'
import TypewriterEffect from '@/components/TypeWriterEffect'
import Button from '@/components/ButtonLink'
import Me from '@/assets/ric.jpg'
import { IconCircleCheckFilled } from '@tabler/icons-react'
import ReactIcon from '../icons/react.svg'
import NextIcon from '../icons/nextjs.svg'
import TailwindIcon from '../icons/tailwind-css.svg'
import TypescriptIcon from '../icons/typescript.svg'
import SupabaseIcon from '../icons/supabase.svg'
import GitIcon from '../icons/git.svg'

export default function Home() {
  const router = useRouter()

  const handleClick = (slug: string) => {
    router.push(`/projects/${slug.toLowerCase().split(' ').join('-')}`)
  }

  return (
    <>
      <Container
        transform="translateX(0)"
        translate="translateX(100px)"
        className="mb-40"
        type="section"
      >
        <TypewriterEffect />
        <h1 className="mb-4 text-3xl font-bold text-wrap text-emerald-500 md:text-4xl">
          Realizzo siti web moderni e personalizzati per aziende e privati.
        </h1>
        <p className="mt-5 text-lg text-neutral-500">
          Trasformo idee in esperienze digitali di impatto, utilizzando
          tecnologie moderne e design funzionale per migliorare la tua presenza
          online.
        </p>
        <div className="mt-10 flex w-full gap-6">
          <Button
            onClick={(e) => {
              e.preventDefault(), router.push('#progetti')
            }}
            type="button"
            className="text-base"
          >
            Progetti
          </Button>
          <Button type="button" className="bg-emerald-500 text-base">
            <Link href="#contact">Contattami Ora</Link>
          </Button>
        </div>
      </Container>
      <section className="mt-40 flex flex-col gap-7">
        <div className="phone:flex-col flex w-full items-center justify-center gap-10">
          <Container
            transform="translateX(0)"
            translate="translateX(-100px)"
            type="div"
            className="w-[50%]"
          >
            <Image
              src={Me}
              alt="riccardo mannino"
              className="phone:self-center mr-10 w-full rounded-full"
              width={400}
              height={300}
            />
          </Container>
          <Container
            type="div"
            transform="translateX(0)"
            translate="translateX(100px)"
            className="phone:w-full flex w-[50%] flex-col"
          >
            <h1 className="mb-4 text-3xl font-bold text-wrap text-emerald-500 md:text-4xl">
              Chi Sono
            </h1>
            <p className="text-lg text-neutral-500">
              Mi chiamo Riccardo Mannino, sono uno sviluppatore frontend junior
              con una passione per la tecnologia e il design. Lavoro per creare
              siti web che siano non solo belli da vedere, ma anche semplici da
              usare e adatti a ogni esigenza. Collaborare con aziende e privati
              è per me un’occasione per ascoltare le loro esigenze e
              trasformarle in soluzioni digitali su misura.
            </p>
            <Button
              onClick={(e) => {
                e.preventDefault(), router.push('/about')
              }}
              type="button"
              className="mt-10 text-base"
            >
              Scopri di più su di me
            </Button>
          </Container>
        </div>
      </section>
      <Container type="section" className="mt-40 flex flex-col gap-7">
        <h1 className="phone:text-center text-3xl font-bold text-wrap text-emerald-500 md:text-4xl">
          Come posso aiutarti?
        </h1>
        <p className="phone:text-center text-lg text-neutral-500">
          Lavoro con aziende e privati per trasformare le loro idee in siti web
          moderni e funzionali. Ecco cosa posso fare per te
        </p>
        <div className="mt-7 flex h-full w-full flex-col items-center justify-center">
          <h1 className="mb-5 text-3xl font-bold text-wrap text-emerald-500 md:text-4xl">
            Servizi
          </h1>
          <div className="phone:mt-7 phone:flex-col flex h-full w-full items-center justify-between gap-7">
            <Container
              type="div"
              transform="translateX(0)"
              translate="translateX(-100px)"
              className="h-60 rounded-2xl bg-emerald-500 p-8"
            >
              <h3 className="text-center text-xl font-semibold text-neutral-50">
                Aziende
              </h3>
              <div className="my-2 flex space-x-1">
                <IconCircleCheckFilled className="mt-2 h-4 w-8 text-neutral-50 sm:w-4" />
                <p className="text-base text-neutral-50 md:text-lg">
                  Restyling e ottimizzazione di siti esistenti.
                </p>
              </div>
              <div className="my-2 flex space-x-1">
                <IconCircleCheckFilled className="mt-2 h-4 w-8 text-neutral-50 sm:w-4" />
                <p className="text-base text-balance text-neutral-50 md:text-lg">
                  Siti web aziendali e applicazioni personalizzate.
                </p>
              </div>
            </Container>

            <Container
              type="div"
              transform="translateX(0)"
              translate="translateX(100px)"
              className="h-60 rounded-2xl bg-emerald-500 p-8"
            >
              <h3 className="text-center text-xl font-semibold text-neutral-50">
                Privati
              </h3>
              <div className="my-2 flex space-x-1">
                <IconCircleCheckFilled className="mt-2 h-4 w-8 text-neutral-50 sm:w-4" />
                <p className="text-base text-neutral-50 md:text-lg">
                  Portfolio online e siti personali.
                </p>
              </div>
              <div className="my-2 flex space-x-1">
                <IconCircleCheckFilled className="mt-2 h-4 w-8 text-neutral-50 sm:w-4" />
                <p className="text-base text-neutral-50 md:text-lg">
                  Blog e siti per piccole attività.
                </p>
              </div>
            </Container>
          </div>
        </div>
      </Container>
      <Container
        type="section"
        className="mt-40 flex flex-col gap-7 text-center"
      >
        <h1 className="text-3xl font-bold text-wrap text-emerald-500 md:text-4xl">
          Competenze Tecniche
        </h1>
        <p className="phone:text-center text-lg text-neutral-500">
          Le tecnologie e gli strumenti che utilizzo
        </p>
        <div className="phone:flex-col flex w-full justify-center gap-7">
          <Container
            type="div"
            transform="translateX(0)"
            translate="translateX(-100px)"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className="flex cursor-pointer flex-col rounded-2xl bg-emerald-500 px-8 py-5"
          >
            <h1 className="p-3 text-xl font-semibold text-neutral-50">
              Frontend
            </h1>
            <div className="grid grid-cols-2 grid-rows-2 place-items-center gap-5">
              <div>
                <Image
                  src={ReactIcon}
                  width={70}
                  height={70}
                  alt="React"
                  className="rounded-2xl bg-white p-2"
                />
                <p className="font-semibold text-neutral-50">React</p>
              </div>
              <div>
                <Image
                  src={NextIcon}
                  width={70}
                  height={70}
                  alt="Nextjs"
                  className="rounded-2xl"
                />
                <p className="font-semibold text-neutral-50">Next.js</p>
              </div>
              <div className="">
                <Image
                  src={TailwindIcon}
                  width={70}
                  height={70}
                  alt="Tailwind"
                  className="rounded-2xl bg-white p-2"
                />
                <p className="font-semibold text-neutral-50">Tailwind</p>
              </div>
              <div className="flex flex-col">
                <Image
                  src={TypescriptIcon}
                  width={70}
                  height={70}
                  alt="Typescript"
                  className="self-center rounded-2xl border border-white bg-white"
                />
                <p className="font-semibold text-neutral-50">Typescript</p>
              </div>
            </div>
          </Container>
          <Container
            type="div"
            transform="translateX(0)"
            translate="translateX(100px)"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className="phone:h-fit phone:w-full grid h-auto w-fit cursor-pointer grid-cols-1 grid-rows-1 gap-7 rounded-2xl bg-emerald-500 px-8 py-5"
          >
            <div className="flex cursor-pointer flex-col">
              <h2 className="p-3 text-xl font-semibold text-neutral-50">
                Tool & Database
              </h2>
              <div className="flex flex-col">
                <Image
                  src={GitIcon}
                  width={70}
                  height={70}
                  alt="Git"
                  className="self-center rounded-2xl bg-white p-2"
                />
                <p className="font-semibold text-neutral-50">Git</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <Image
                  src={SupabaseIcon}
                  width={70}
                  height={70}
                  alt="supabase"
                  className="self-center rounded-2xl bg-white p-2"
                />
                <p className="font-semibold text-neutral-50">Supabase</p>
              </div>
            </div>
          </Container>
        </div>
      </Container>
      <Container
        type="section"
        className="mt-40 flex flex-col gap-7 py-24 text-center"
        id="progetti"
      >
        <h1 className="mb-6 text-3xl font-bold text-wrap text-emerald-500 md:text-4xl">
          I Miei Progetti
        </h1>
        <div className="phone:grid-rows-2 relative grid grid-flow-col gap-7">
          {progetti.map((el) => (
            <Container
              key={el.nome}
              type="div"
              transform="translateX(0)"
              translate="translateX(-100px)"
              className="flex flex-col gap-5 rounded-2xl bg-emerald-500 px-8 py-5 text-left text-neutral-50"
            >
              <h2
                className="cursor-pointer text-xl font-semibold"
                onClick={() => handleClick(el.nome)}
              >
                {el.nome}
              </h2>
              <p>{el.descrizione}</p>
              <div className="flex flex-wrap gap-4">
                {el.tecnologie.map((ele) => (
                  <Tag key={ele} title={ele} />
                ))}
              </div>
            </Container>
          ))}
        </div>
      </Container>
      <Container type="section" className="py-24" id="contact">
        <ContactForm call={false} />
      </Container>
    </>
  )
}
