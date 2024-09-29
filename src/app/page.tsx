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
]

export default function Home() {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold sm:text-wrap">
        Ciao a tutti! Sono Riccardo 👋
      </h1>
      <p className="mt-5 text-lg text-neutral-500">
        Benvenuto nel mio portfolio! Sono Riccardo Mannino, uno sviluppatore web
        frontend junior con esperienza nell&apos;utilizzo di tecnologie moderne
        come React.js, Material UI, e Styled Components.
      </p>
      <p className="mt-5 text-lg text-neutral-500">
        Ho lavorato su progetti che integrano Redux per la gestione degli stati
        globali e ho competenze nello sviluppo e nella manutenzione di siti web,
        sia custom che su piattaforme come WordPress con Elementor. Dai
        un’occhiata ai miei progetti e contattami per collaborazioni o
        opportunità lavorative!
      </p>
      <h2 className="mb-5 mt-5 text-2xl font-medium">Tech Stack</h2>
      <div className="flex w-full space-x-7">
        {icons.map((i) => (
          <Image key={i.alt} src={i.icon} height={50} width={50} alt={i.alt} />
        ))}
      </div>
    </>
  )
}
