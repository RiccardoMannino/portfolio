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
        <h1 className="mb-4 text-wrap font-bold md:text-2xl lg:text-3xl">
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
          >
            Contattami Ora
          </Button>
        </div>
        {/* <h2 className="mb-5 mt-10 text-center text-lg font-medium md:text-left md:text-2xl">
        Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
        {icons.map((i) => (
          <Image
          key={i.alt}
          src={i.icon}
          alt={i.alt}
          className="m-1 h-[45px] w-[45px] transition duration-300 hover:-translate-y-2 hover:cursor-pointer md:h-[60px] md:w-[60px]"
          />
          ))}
          </div> */}
      </section>
      <section>
        <h1 className="mb-4 text-wrap font-bold md:text-2xl lg:text-3xl">
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
    </>
  )
}
