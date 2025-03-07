import Portfolio from '@/assets/Portfolio.png'
import Forneria from '@/assets/Forneria Messina - Home.png'
import { StaticImageData } from 'next/image'

type progetti = {
  nome: string
  descrizione: string
  approfondimento: string
  immagine: StaticImageData
  tecnologie: string[]
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
      'React',
      'Nextjs',
      'Tailwind Css',
      'Framer Motion',
      'Supabase',
      'React Query',
    ],
    href: 'https://forneria-messina.vercel.app',
  },
  {
    nome: 'Sito Portfolio',
    descrizione:
      'Portfolio personale realizzato con Next.js Tailwind Css e Framer Motion',
    approfondimento: '',
    immagine: Portfolio,
    tecnologie: ['React', 'Nextjs', 'Tailwind Css', 'Framer Motion'],
    href: '/',
  },
]
