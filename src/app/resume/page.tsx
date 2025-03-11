import React from 'react'
import { IconCircleCheckFilled } from '@tabler/icons-react'

export default function page() {
  return (
    <>
      <h1 className="phone:text-center mb-4 text-3xl font-bold text-emerald-500 md:text-4xl">
        Esperienza lavorativa <span>💼</span>
      </h1>
      <p className="mb-2 text-lg text-neutral-500">
        Sono un frontend developer con esperienza nell&apos;utilizzo di
        tecnologie moderne come React.js, Material UI, e Styled Components.
      </p>
      <div>
        {/* <div className="relative my-20 flex flex-col space-x-10 space-y-10 md:flex-row md:space-y-0">
          <p className="w-30 text-sm text-neutral-500">07/2023 ad oggi</p>
          <div>
            <h5 className="text-lg font-bold text-emerald-500">Freelance</h5>
            <p className="text-base font-semibold">
              Sviluppatore Web Junior (Front-End).
            </p>
            <div className="my-2 flex items-start space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-emerald-200 sm:w-4" />
              <p className="text-sm text-neutral-500"></p>
            </div>
            <div className="my-2 flex items-start space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-emerald-200 sm:w-4" />
              <p className="text-sm text-neutral-500"></p>
            </div>
            <div className="my-2 flex items-start space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-emerald-200 sm:w-4" />
              <p className="text-sm text-neutral-500"></p>
            </div>
          </div>
        </div>*/}
        <div className="relative my-20 flex flex-col space-y-10 space-x-10 md:flex-row md:space-y-0">
          <p className="w-30 text-lg text-neutral-500">11/2022 - 07/2023</p>
          <div>
            <h5 className="text-lg font-bold text-emerald-500">
              The Cove S.R.L Bergamo, Italia
            </h5>
            <p className="text-lg font-semibold">
              Sviluppatore Web Junior (Front-End).
            </p>
            <div className="my-2 flex items-start space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-emerald-200 sm:w-4" />
              <p className="text-lg text-neutral-500">
                Creato componenti personalizzati con Material UI e Styled
                Components in React.js per progetti privati.
              </p>
            </div>
            <div className="my-2 flex items-start space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-emerald-200 sm:w-4" />
              <p className="text-lg text-neutral-500">
                Redux Toolkit per la gestione degli stati integrando anche la
                comunicazione con API.
              </p>
            </div>
            <div className="my-2 flex items-start space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-emerald-200 sm:w-4" />
              <p className="text-sm text-neutral-500">
                Implementato il routing delle pagine con Next.js e lavorato
                anche con react router.
              </p>
            </div>
          </div>
        </div>
        <div className="relative my-20 flex flex-col space-y-10 space-x-10 md:flex-row md:space-y-0">
          <p className="w-30 text-lg text-neutral-500">04/2022 - 10/2022</p>
          <div>
            <h5 className="text-lg font-bold text-emerald-500">
              DevelHope S.R.L Palermo, Italia
            </h5>
            <p className="text-lg font-semibold">
              Corso intensivo Web Developer
            </p>
            <div className="my-2 flex items-start space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-emerald-200 sm:w-4" />
              <p className="text-lg text-neutral-500">
                Prima parte: sviluppo con Html/CSS/Javascript, ad utilizzare Git
                e a lavorare in team.
              </p>
            </div>
            <div className="my-2 flex items-start space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-emerald-200 sm:w-4" />
              <p className="text-lg text-neutral-500">
                Seconda parte: ho approfondito tutti gli elementi essenziali per
                sviluppare software in React.
              </p>
            </div>
            <div className="my-2 flex items-start space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-emerald-200 sm:w-4" />
              <p className="text-lg text-neutral-500">
                Progetto finale con le seguenti tecnologie/librerie: Chartjs,
                FullCalendar , CMS Headless Strapi.
              </p>
            </div>
          </div>
        </div>
        <div className="relative my-20 flex flex-col space-y-10 space-x-10 md:flex-row md:space-y-0">
          <p className="w-30 text-sm text-neutral-500">10/2020 - 03/2022</p>
          <div>
            <h5 className="text-lg font-bold text-emerald-500">
              Forneria Messina di Messina G.& C. SNC, Monreale, Italia
            </h5>
            <p className="text-lg font-semibold">
              Assistente Sito Web (Freelance)
            </p>
            <div className="my-2 flex items-start space-x-1">
              <IconCircleCheckFilled className="h-4 w-8 text-emerald-200 sm:w-4" />
              <p className="text-lg text-neutral-500">
                Uso base di Wordpress e del plugin Elementor per ripristinare e
                mantenere il sito web aziendale.
              </p>
            </div>
            <div className="my-2 flex items-start space-x-1">
              <IconCircleCheckFilled className="h-4 w-4 text-emerald-200" />
              <p className="text-lg text-neutral-500">
                Gestito e pubblicato eventi sul sito web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
