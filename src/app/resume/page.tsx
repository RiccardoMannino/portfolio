import { IconCircleCheckFilled } from '@tabler/icons-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Curriculum - Riccardo Mannino',
  description:
    'Consulta il curriculum vitae di Riccardo Mannino, frontend developer con esperienza in React, Next.js, e interfacce moderne.',
  keywords: ['Curriculum', 'CV', 'Riccardo Mannino', 'esperienza', 'frontend'],
  openGraph: {
    title: 'Curriculum - Riccardo Mannino',
    description:
      'Frontend developer specializzato in tecnologie moderne per il web.',
    url: 'https://www.riccardomannino.it/resume',
    siteName: 'Riccardo Mannino Portfolio',
    type: 'website',
    images: [
      {
        url: '../../assets/Me.jpg',
        width: 1200,
        height: 630,
        alt: 'Curriculum - Riccardo Mannino',
      },
    ],
  },
}

export default function page() {
  return (
    <>
      <h1 className="phone:text-start mb-4 flex items-center text-3xl font-bold text-primary ombraxs md:text-4xl gap-2">
        Esperienza lavorativa <span className="text-2xl">💼</span>
      </h1>
      <p className="mb-2 text-lg ">
        Sono un frontend developer con esperienza nell&apos;utilizzo di
        tecnologie moderne come React.js, Material UI, e Styled Components.
      </p>
      <div>
        <div className="relative my-20 flex flex-col space-y-10 space-x-10 md:flex-row md:space-y-0">
          <p className="w-30 max-sm:w-full text-lg font-semibold ">Ottobre 2023 a oggi</p>
          <div>
            <h5 className="text-lg font-bold text-primary ombraxs">
              Freelance da Remoto
            </h5>
            <p className="text-lg font-semibold">
              Sviluppatore Web (junior).
            </p>
            <div className="my-2 flex items-center space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-primary sm:w-4" />
              <p className="text-lg ">
                Realizzazione di progetti client-side con React, Next.js e
                Tailwind
              </p>
            </div>
            <div className="my-2 flex items-center space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-primary sm:w-4" />
              <p className="text-lg font-semibold ">
                Sviluppo di un sito per cliente reale con Sanity.io come CMS
                headless (in corso)
              </p>
            </div>
            <div className="my-2 flex items-center space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-primary sm:w-4" />
              <p className="text-lg font-semibold ">
                Gestione portfolio personale su riccardomannino.it
              </p>
            </div>
          </div>
        </div>
        <div className="relative my-20 flex flex-col space-y-10 space-x-10 md:flex-row md:space-y-0">
          <p className="phone:w-full w-fit text-lg font-semibold ">
            11/2022 - 07/2023
          </p>
          <div>
            <h5 className="text-lg font-bold text-primary ombraxs">
              The Cove S.R.L Bergamo, Italia
            </h5>
            <p className="text-lg font-semibold">
              Sviluppatore Web Junior (Front-End).
            </p>
            <div className="my-2 flex items-center space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-primary sm:w-4" />
              <span className="text-lg font-semibold ">
                Sviluppo componenti in React con Material UI e Styled Components
              </span>
            </div>
            <div className="my-2 flex items-center space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-primary sm:w-4" />
              <span className="text-lg font-semibold ">
                Utilizzo di Redux Toolkit per gestione stato e comunicazione con
                API REST.
              </span>
            </div>
            <div className="my-2 flex items-center space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-primary sm:w-4" />
              <p className="text-lg font-semibold ">
                Routing client-side con Next.js e anche con react router.
              </p>
            </div>
          </div>
        </div>
        <div className="relative my-20 flex flex-col space-y-10 space-x-10 md:flex-row md:space-y-0">
          <p className="phone:w-full w-fit text-lg font-semibold ">
            04/2022 - 10/2022
          </p>
          <div>
            <h5 className="text-lg font-bold text-primary ombraxs">
              DevelHope S.R.L Palermo, Italia
            </h5>
            <p className="text-lg  font-semibold">
              Corso intensivo Web Developer
            </p>
            <div className="my-2 flex items-center space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-primary sm:w-4" />
              <span className="text-lg font-semibold ">
                Prima parte: sviluppo con Html/CSS/Javascript, ad utilizzare Git
                e a lavorare in team.
              </span>
            </div>
            <div className="my-2 flex items-center space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-primary sm:w-4" />
              <span className="text-lg font-semibold ">
                Seconda parte: ho approfondito tutti gli elementi essenziali per
                sviluppare software in React.
              </span>
            </div>
            <div className="my-2 flex items-center space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-primary sm:w-4" />
              <span className="text-lg font-semibold ">
                Progetto finale con le seguenti tecnologie/librerie: Chartjs,
                FullCalendar , CMS Headless Strapi.
              </span>
            </div>
          </div>
        </div>
        <div className="relative my-20 flex flex-col space-y-10 space-x-10 md:flex-row md:space-y-0">
          <p className="phone:w-full w-fit text-lg font-semibold ">
            10/2020 - 03/2022
          </p>
          <div className="w-full">
            <h5 className="text-lg font-bold text-primary ombraxs">
              Forneria Messina di Messina G.& C. SNC, Monreale, Italia
            </h5>
            <p className="text-lg font-semibold">
              Assistente Sito Web (Freelance)
            </p>
            <div className="my-2 flex items-center space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-primary sm:w-4" />
              <span className="text-lg font-semibold ">
                Manutenzione sito WordPress con Elementor.
              </span>
            </div>
            <div className="my-2 flex space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-primary sm:w-4" />
              <span className="text-lg font-semibold ">
                Pubblicazione eventi e aggiornamenti contenuti.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
