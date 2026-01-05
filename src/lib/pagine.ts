import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconMessage,
} from '@tabler/icons-react'
import { ComponentType } from 'react'

type Pagine = {
  pagina: string
  href: string
  image: ComponentType<{ size?: number; className?: string }>
}[]

export const listaPagine: Pagine = [
  {
    pagina: 'Home',
    href: '/',
    image: IconHome,
  },
  {
    pagina: 'Chi sono',
    href: '/about',
    image: IconUser,
  },
  {
    pagina: 'Progetti',
    href: '/projects',
    image: IconBriefcase,
  },
  {
    pagina: 'Contatti',
    href: '/contact',
    image: IconMessage,
  },
]
