import Portfolio from '@/assets/Portfolio.png'
import Scifo from '@/assets/Scifo.png'
import Lavanderia from '@/assets/Lavanderia.png'
import Smof from '@/assets/smof.png'
import Forneria from '@/assets/Forneria Messina - Home.png'
import { StaticImageData } from 'next/image'
import ReactIcon from '../icons/react.svg'
import Supabase from '../icons/supabase.svg'
import FramerIcon from '../icons/framermotion.svg'
import TailwindIcon from '../icons/tailwind-css.svg'
import NextIcon from '../icons/nextjs.svg'
import SanityIcon from '../icons/sanity.png'
import StripeIcon from '../icons/stripe.png'
import ViteIcon from '../icons/Vite.js.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type progetti = {
  nome: string
  descrizione: string
  obiettivo: string
  immagine: StaticImageData
  stato?: string
  tecnologie: {
    nome: string
    image: string | StaticImport
  }[]
  href: string
}

export const progetti: progetti[] = [
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
  {
    nome: 'Forneria Messina',
    descrizione:
      'Rivisitazione (e clone) del sito web da me creato (precedentemente in Wordpress) per Forneria Messina',

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
    nome: 'Scifo Assicurazioni',
    descrizione: 'Sito web realizzato per broker assicurativo ',
    obiettivo: '',
    immagine: Scifo,
    tecnologie: [
      { nome: 'React', image: ReactIcon },
      { nome: 'Vite', image: ViteIcon },
      { nome: 'Tailwind Css', image: TailwindIcon },
    ],
    href: 'https://www.scifoassicurazioni.it',
  },
  {
    nome: 'SMOF',
    descrizione: 'Sito web per festival outdoor',
    obiettivo: `Dare possibilità al cliente di modificare i contenuti tramite il pannello del CMS , gestendo utenti quantità dei ticket, ecc...                                                                                                                                Il Sito permette di acquistare biglietti per gli eventi`,
    immagine: Smof,
    tecnologie: [
      { nome: 'React', image: ReactIcon },
      { nome: 'Nextjs', image: NextIcon },
      { nome: 'Tailwind Css', image: TailwindIcon },
      { nome: 'Sanity.io', image: SanityIcon },
      { nome: 'Stripe', image: StripeIcon },
    ],
    href: 'https://www.smofest.it',
    stato: 'Progetto in fase di sviluppo',
  },
  {
    nome: 'Davi Lavanderie',
    descrizione:
      'Sito web per cliente che offre servizi e prodotti di lavanderia',
    obiettivo: `Dare possibilità al cliente di modificare i contenuti tramite il pannello del CMS Sanity , cambiando quindi i prodotti presenti aggiungendo categorie e pagine se necessario`,
    immagine: Lavanderia,
    tecnologie: [
      { nome: 'React', image: ReactIcon },
      { nome: 'Nextjs', image: NextIcon },
      { nome: 'Tailwind Css', image: TailwindIcon },
      { nome: 'Sanity.io', image: SanityIcon },
    ],
    href: 'https://www.davilavanderie.com',
    // stato: '',
  },
]
