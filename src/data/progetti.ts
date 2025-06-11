import Portfolio from '@/assets/Portfolio.png'
import Forneria from '@/assets/Forneria Messina - Home.png'
import { StaticImageData } from 'next/image'
import ReactIcon from '../icons/react.svg'
import Supabase from '../icons/supabase.svg'
import FramerIcon from '../icons/framermotion.svg'
import TailwindIcon from '../icons/tailwind-css.svg'
import NextIcon from '../icons/nextjs.svg'
import ReactQueryIcon from '../icons/reactquery.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type progetti = {
  nome: string
  descrizione: string
  obiettivo: string
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

    immagine: Forneria,
    tecnologie: [
      { nome: 'React', image: ReactIcon },
      { nome: 'Nextjs', image: NextIcon },
      { nome: 'Tailwind Css', image: TailwindIcon },
      { nome: 'Framer Motion', image: FramerIcon },
      { nome: 'Supabase', image: Supabase },
      // { nome: 'React Query', image: ReactQueryIcon },
    ],
    href: 'https://forneria-messina.vercel.app',
    obiettivo:
      'Modernizzare un sito esistente mantenendone l’identità ma migliorando performance, aggiornabilità e UX su mobile.',
  },
  {
    nome: 'Sito Portfolio',
    descrizione:
      'Portfolio personale realizzato con Next.js Tailwind Css e Framer Motion',
    obiettivo: '',
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
