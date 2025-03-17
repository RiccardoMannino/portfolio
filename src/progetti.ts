import Portfolio from '@/assets/Portfolio.png'
import Forneria from '@/assets/Forneria Messina - Home.png'
import { StaticImageData } from 'next/image'
import { ReactElement, ReactNode } from 'react'
import ReactIcon from '../src/icons/react.svg'
import Supabase from '../src/icons/supabase.svg'
import FramerIcon from '../src/icons/framermotion.svg'
import TailwindIcon from '../src/icons/tailwind-css.svg'
import NextIcon from '../src/icons/nextjs.svg'
import ReactQueryIcon from '../src/icons/reactquery.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type progetti = {
  nome: string
  descrizione: string
  approfondimento: string
  immagine: StaticImageData
  tecnologie: {
    nome: string
    image: string | StaticImport
  }[]
  href: string
}

export const progetti: progetti[] = [
  {
    nome: 'Forneria Messina',
    descrizione:
      'Rivisitazione del sito web da me creato (precedentemente in Wordpress) per Forneria Messina',
    approfondimento: 'Questa è una demo che non viene usata dal web',
    immagine: Forneria,
    tecnologie: [
      { nome: 'React', image: ReactIcon },
      { nome: 'Nextjs', image: NextIcon },
      { nome: 'Tailwind Css', image: TailwindIcon },
      { nome: 'Framer Motion', image: FramerIcon },
      { nome: 'Supabase', image: Supabase },
      { nome: 'React Query', image: ReactQueryIcon },
    ],
    href: 'https://forneria-messina.vercel.app',
  },
  {
    nome: 'Sito Portfolio',
    descrizione:
      'Portfolio personale realizzato con Next.js Tailwind Css e Framer Motion',
    approfondimento: '',
    immagine: Portfolio,
    tecnologie: [
      { nome: 'React', image: ReactIcon },
      { nome: 'Nextjs', image: NextIcon },
      { nome: 'Tailwind Css', image: TailwindIcon },
      { nome: 'Framer Motion', image: FramerIcon },
    ],
    href: '/',
  },
]
