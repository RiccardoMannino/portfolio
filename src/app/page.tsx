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
  return (
    <>
      <h1 className="mb-4 text-wrap font-bold md:text-2xl lg:text-3xl">
        Ciao a tutti! Sono Riccardo 👋
      </h1>
      <p className="mt-5 text-sm text-neutral-500 md:text-base lg:text-lg">
        Benvenuto nel mio portfolio! Sono Riccardo Mannino, uno sviluppatore web
        frontend junior con esperienza nell&apos;utilizzo di tecnologie moderne
        come React.js, Material UI, e Styled Components.
      </p>
      <p className="mb-5 mt-5 text-sm text-neutral-500 md:text-base lg:text-lg">
        Ho lavorato su progetti che integrano Redux per la gestione degli stati
        globali e ho competenze nello sviluppo e nella manutenzione di siti web,
        sia custom che su piattaforme come WordPress con Elementor. Dai
        un’occhiata ai miei progetti e contattami per collaborazioni o
        opportunità lavorative!
      </p>
      <h2 className="mb-5 mt-10 text-center text-lg font-medium md:text-left md:text-2xl">
        Tech Stack
      </h2>
      <div className="flex flex-wrap justify-center gap-4 md:justify-start">
        {icons.map((i) => (
          <Image
            key={i.alt}
            src={i.icon}
            alt={i.alt}
            className="m-1 h-[45px] w-[45px] md:h-[60px] md:w-[60px]"
          />
        ))}
      </div>
    </>
  )
}
