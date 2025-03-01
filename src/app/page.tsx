'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'motion/react'
import TypewriterEffect from '@/components/TypeWriterEffect'
import Button from '@/components/ButtonLink'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconCircleCheckFilled,
  IconMapPin,
} from '@tabler/icons-react'
import Me from '@/assets/ric.jpg'
import ReactIcon from '../icons/react.svg'
import NextIcon from '../icons/nextjs.svg'
import TailwindIcon from '../icons/tailwind-css.svg'
import StyledIcon from '../icons/styled-components.png'
import SupabaseIcon from '../icons/supabase.svg'
import GitIcon from '../icons/git.svg'
import Tag from '@/components/Tag'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'
import Container from '@/components/Container'
import { useRef } from 'react'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Container
        transform="translateX(0)"
        translate="translateX(100px)"
        className="mb-40"
        type="section"
      >
        <TypewriterEffect />
        <h1 className="mb-4 text-wrap text-3xl font-bold text-emerald-500 md:text-4xl">
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
      <section className="mt-40 flex flex-col gap-7 p-10">
        <div className="flex w-full items-center justify-center gap-10 phone:flex-col">
          <Container
            transform="translateX(0)"
            translate="translateX(-100px)"
            type="div"
            className="w-[50%]"
          >
            <Image
              src={Me}
              alt="riccardo mannino"
              className="mr-10 w-full rounded-full phone:self-center"
              width={400}
              height={300}
            />
          </Container>
          <Container
            type="div"
            transform="translateX(0)"
            translate="translateX(100px)"
            className="flex w-[50%] flex-col phone:w-full"
          >
            <h1 className="mb-4 text-wrap text-3xl font-bold text-emerald-500 md:text-4xl">
              Chi Sono
            </h1>
            <p className="text-lg text-neutral-500">
              Mi chiamo Riccardo Mannino, sono uno sviluppatore frontend junior
              con una passione per la tecnologia e il design. Lavoro per creare
              siti web che siano non solo belli da vedere, ma anche semplici da
              usare e adatti a ogni esigenza. Amo collaborare con aziende e
              privati, ascoltando le loro necessità per dare vita a soluzioni
              digitali su misura.
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
        <h1 className="text-wrap text-3xl font-bold text-emerald-500 phone:text-center md:text-4xl">
          Come posso aiutarti?
        </h1>
        <p className="text-lg text-neutral-500 phone:text-center">
          Lavoro con aziende e privati per trasformare le loro idee in siti web
          moderni e funzionali. Ecco cosa posso fare per te
        </p>
        <div className="mt-7 flex h-full w-full flex-col items-center justify-center">
          <h1 className="mb-5 text-wrap text-3xl font-bold text-emerald-500 md:text-4xl">
            Servizi
          </h1>
          <div className="flex h-full w-full items-center justify-between gap-7 phone:mt-7 phone:flex-col">
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
                <p className="text-balance text-base text-neutral-50 md:text-lg">
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
        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault(), router.push('/service')
          }}
          className="mb-5 self-center text-base"
        >
          Scopri i miei servizi
        </Button>
      </Container>
      <Container
        type="section"
        className="mt-40 flex flex-col gap-7 text-center"
      >
        <h1 className="text-wrap text-3xl font-bold text-emerald-500 md:text-4xl">
          Competenze Tecniche
        </h1>
        <p className="text-lg text-neutral-500 phone:text-center">
          Le tecnologie e gli strumenti che utilizzo
        </p>
        <div className="flex w-full justify-center gap-7 phone:flex-col">
          <Container
            type="div"
            transform="translateX(0)"
            translate="translateX(-100px)"
            className="flex cursor-pointer flex-col rounded-2xl bg-emerald-500 px-8 py-5 transition-all duration-700 hover:scale-105"
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
                  src={StyledIcon}
                  width={70}
                  height={70}
                  alt="Styled"
                  className="self-center rounded-2xl border border-white bg-white"
                />
                <p className="font-semibold text-neutral-50">
                  Styled Component
                </p>
              </div>
            </div>
          </Container>
          <Container
            type="div"
            transform="translateX(0)"
            translate="translateX(100px)"
            className="grid h-auto w-fit cursor-pointer grid-cols-1 grid-rows-1 gap-7 rounded-2xl bg-emerald-500 px-8 py-5 transition-all duration-700 hover:scale-105 phone:h-fit phone:w-full"
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
      <section
        className="mt-40 flex flex-col gap-7 py-24 text-center"
        id="progetti"
      >
        <h1 className="mb-6 text-wrap text-3xl font-bold text-emerald-500 md:text-4xl">
          I Miei Progetti
        </h1>
        <div className="relative grid grid-flow-col gap-7 phone:grid-rows-2">
          <Container
            type="div"
            transform="translateX(0)"
            translate="translateX(-100px)"
            className="flex flex-col gap-5 rounded-2xl bg-emerald-500 px-8 py-5 text-left text-neutral-50"
          >
            <h2 className="text-xl font-semibold">Sito Portfolio</h2>
            <p>
              Portfolio personale realizzato con Next.js Tailwind Css e Framer
              Motion
            </p>
            <div className="flex flex-wrap gap-4">
              <Tag title="React" />
              <Tag title="Nextjs" />
              <Tag title="Tailwind Css" />
              <Tag title="Framer Motion" />
            </div>
          </Container>
          <Container
            type="div"
            transform="translateX(0)"
            translate="translateX(100px)"
            className="flex flex-col gap-5 rounded-2xl bg-emerald-500 px-8 py-5 text-left text-neutral-50"
          >
            <h2 className="text-xl font-semibold">Forneria Messina</h2>
            <p className="truncate text-ellipsis text-wrap break-words text-base">
              Rivisitazione del sito web da me creato per Forneria Messina
            </p>
            <div className="flex flex-wrap gap-4">
              <Tag title="React" />
              <Tag title="Nextjs" />
              <Tag title="Tailwind Css" />
              <Tag title="Framer Motion" />
              <Tag title="Supabase" />
              <Tag title="React Query" />
            </div>
          </Container>
        </div>
      </section>
      <Container type="section" className="py-24" id="contact">
        <ContactForm call={false} />
      </Container>
    </>
  )
}
