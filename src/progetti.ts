import Pc from '@/assets/pc.jpg'
import Forneria from '@/assets/Forneria Messina - Home.png'
import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

type progetti = {
  nome: string
  descrizione: string
  approfondimento: string
  immagine: StaticImageData
}

export const progetti: progetti[] = [
  {
    nome: 'Forneria Messina',
    descrizione:
      'Rivisitazione del sito web da me creato (precedentemente in Wordpress) per Forneria Messina',
    approfondimento: 'afdsl;msfdgv',
    immagine: Forneria,
  },
  {
    nome: 'Sito Portfolio',
    descrizione:
      'Portfolio personale realizzato con Next.js Tailwind Css e Framer Motion',
    approfondimento: 'ancora noi',
    immagine: Pc,
  },
]
