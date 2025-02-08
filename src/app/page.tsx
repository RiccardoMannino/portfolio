'use client'

import Image from 'next/image'
import HTMLIcon from '../icons/html.svg'
import CSSIcon from '../icons/css.svg'
import JavascriptIcon from '../icons/js.svg'
import ReactIcon from '../icons/react.svg'
import ReduxIcon from '../icons/redux.svg'
import NextIcon from '../icons/nextjs.svg'
import MaterialIcon from '../icons/material-ui.svg'
import TailwindIcon from '../icons/tailwind-css.svg'
import StyledIcon from '../icons/styled-components.svg'
import SupabaseIcon from '../icons/supabase.svg'
import GitIcon from '../icons/git.svg'
import GithubIcon from '../icons/github.svg'
import Button from '@/components/ButtonLink'
import { motion } from 'motion/react'
import { IconCircleCheckFilled } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

const icons = [
  {
    icon: HTMLIcon,
    alt: 'html-icon',
  },
  {
    icon: CSSIcon,
    alt: 'css-icon',
  },

  {
    icon: JavascriptIcon,
    alt: 'javascript-icon',
  },
  {
    icon: ReactIcon,
    alt: 'React-icon',
  },
  {
    icon: ReduxIcon,
    alt: 'Redux-icon',
  },
  {
    icon: NextIcon,
    alt: 'Next-icon',
  },
  {
    icon: MaterialIcon,
    alt: 'Material-icon',
  },
  {
    icon: TailwindIcon,
    alt: 'Tailwind-icon',
  },
  {
    icon: StyledIcon,
    alt: 'Styled-icon',
  },
  {
    icon: SupabaseIcon,
    alt: 'SupaBase-icon',
  },
  {
    icon: GitIcon,
    alt: 'Git-icon',
  },
  {
    icon: GithubIcon,
    alt: 'Github-icon',
  },
]

export default function Home() {
  const router = useRouter()
  return (
    <>
      <section className="mb-40">
        <h1 className="mb-4 text-wrap font-bold text-emerald-500 md:text-2xl lg:text-3xl">
          Realizzo siti web moderni e personalizzati per aziende e privati.
        </h1>
        <p className="mt-5 text-sm text-neutral-500 md:text-base lg:text-lg">
          Sono Riccardo Mannino, sviluppatore frontend junior. Trasformo idee in
          esperienze digitali di impatto, utilizzando tecnologie moderne e
          design funzionale per migliorare la tua presenza online.
        </p>
        <div className="mt-10 flex w-full gap-6">
          <Button
            onClick={(e) => {
              e.preventDefault(), router.push('/projects')
            }}
            type="button"
          >
            Progetti
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault(), router.push('/contact')
            }}
            type="button"
            className="bg-emerald-500"
          >
            Contattami Ora
          </Button>
        </div>
      </section>
      <section>
        <h1 className="mb-4 text-wrap font-bold text-emerald-500 md:text-2xl lg:text-3xl">
          Chi Sono
        </h1>
        <p className="mt-5 text-sm text-neutral-500 md:text-base lg:text-lg">
          Mi chiamo Riccardo Mannino, sono uno sviluppatore frontend junior con
          una passione per la tecnologia e il design. Lavoro per creare siti web
          che siano non solo belli da vedere, ma anche semplici da usare e
          adatti a ogni esigenza. Amo collaborare con aziende e privati,
          ascoltando le loro necessità per dare vita a soluzioni digitali su
          misura.
        </p>
        <Button
          onClick={(e) => {
            e.preventDefault(), router.push('/about')
          }}
          type="button"
          className="mt-10"
        >
          Scopri di più su di me
        </Button>
      </section>
      <section className="mt-40 flex flex-col gap-7">
        <h1 className="text-wrap font-bold text-emerald-500 md:text-2xl lg:text-3xl">
          Come posso aiutarti?
        </h1>
        <p className="text-sm text-neutral-500 md:text-base lg:text-lg">
          Lavoro con aziende e privati per trasformare le loro idee in siti web
          moderni e funzionali. Ecco cosa posso fare per te
        </p>
        <div className="mt-7 flex h-full w-full flex-col items-center justify-center">
          <h1 className="mb-5 text-wrap font-bold text-emerald-500 md:text-2xl lg:text-3xl">
            Servizi
          </h1>
          <div className="flex h-full w-full items-center justify-between gap-7 phone:mt-7 phone:flex-col">
            <motion.div className="rounded-md border-2 border-emerald-500 p-10">
              <h3 className="text-center font-semibold">Aziende</h3>
              <div className="my-2 flex items-center space-x-1">
                <IconCircleCheckFilled className="h-4 w-8 text-emerald-200 sm:w-4" />
                <p className="text-sm text-neutral-500 md:text-base lg:text-lg">
                  Restyling e ottimizzazione di siti esistenti.
                </p>
              </div>
              <div className="my-2 flex items-center space-x-1">
                <IconCircleCheckFilled className="h-4 w-8 text-emerald-200 sm:w-4" />
                <p className="text-sm text-neutral-500 md:text-base lg:text-lg">
                  Siti web aziendali e applicazioni personalizzate.
                </p>
              </div>
            </motion.div>
            <motion.div className="rounded-md border-2 border-emerald-500 p-10">
              <h3 className="text-center font-semibold">Privati</h3>
              <div className="my-2 flex items-center space-x-1">
                <IconCircleCheckFilled className="h-4 w-8 text-emerald-200 sm:w-4" />
                <p className="text-sm text-neutral-500 md:text-base lg:text-lg">
                  Portfolio online e siti personali.
                </p>
              </div>
              <div className="my-2 flex items-center space-x-1">
                <IconCircleCheckFilled className="h-4 w-8 text-emerald-200 sm:w-4" />
                <p className="text-sm text-neutral-500 md:text-base lg:text-lg">
                  Blog e siti per piccole attività.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault(), router.push('/service')
          }}
          className="mb-5 self-center"
        >
          Scopri i miei servizi
        </Button>
      </section>
      <section className="mt-40 flex flex-col gap-7">
        <h1 className="mb-4 text-wrap font-bold text-emerald-500 md:text-2xl lg:text-3xl">
          I Miei Lavori
        </h1>
      </section>
    </>
  )
}
