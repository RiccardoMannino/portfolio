import Image from 'next/image'
import Link from 'next/link'

import { progetti } from '@/data/progetti'
import Tag from '@/components/Tag'
import Container from '@/components/Container'
import ContactForm from '@/components/ContactForm'

import Me from '@/assets/ric.jpg'
import { IconCircleCheckFilled } from '@tabler/icons-react'
import ReactIcon from '../icons/react.svg'
import NextIcon from '../icons/nextjs.svg'
import TailwindIcon from '../icons/tailwind-css.svg'
import TypescriptIcon from '../icons/typescript.svg'
import SupabaseIcon from '../icons/supabase.svg'
import GitIcon from '../icons/git.svg'
import TypewriterEffect from '@/components/TypeWriterEffect'
import Button from '@/components/Button'

export const metadata = {
  title: 'Riccardo Mannino - Frontend Developer a Palermo',
  description:
    'Realizzo siti web moderni e personalizzati per aziende e privati. Trasformo idee in esperienze digitali di impatto, utilizzando tecnologie moderne e design funzionale.',
  keywords: [
    'Riccardo Mannino',
    'sviluppatore web frontend a palermo',
    'siti web personalizzati',
    'esperienze digitali',
  ],
  openGraph: {
    locale: 'it_IT',
    title: 'Riccardo Mannino - Frontend Developer a Palermo',
    description:
      'Realizzo siti web moderni e personalizzati per aziende e privati.',
    url: 'https://www.riccardomannino.it/',
    siteName: 'Riccardo Mannino Portfolio',
    type: 'website',
    images: [
      {
        url: '../assets/Me.jpg',
        width: 1200,
        height: 630,
        alt: 'Riccardo Mannino - Home',
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <Container
        transform="translateX(0)"
        translate="translateX(100px)"
        className="mb-40"
        type="section"
      >
        <TypewriterEffect />
        <h1 className="mb-4 text-3xl font-bold text-wrap text-primary md:text-4xl ombra">
          Realizzo siti web moderni e personalizzati per aziende e privati.
        </h1>
        <h2 className="mt-5 text-lg ">
          Trasformo idee in esperienze digitali di impatto, utilizzando
          tecnologie moderne e design funzionale per migliorare la tua presenza
          online.
        </h2>
        <div className="mt-10 flex w-full gap-6">
          <Button >

          <Link
            className="items-center justify-between  text-base font-semibold "
            href={'#progetti'}
            >
            Progetti
          </Link>
          </Button>

          <Button className='bg-foreground font-semibold text-background phone:self-center shadow-primary hover:bg-foreground'>

          <Link
            className="  flex w-fit  items-center justify-between  text-base "
            href="#contact"
            >
            Contattami Ora
          </Link>
            </Button>
        </div>
      </Container>
      <section className="mt-40 flex flex-col gap-7">
        <div className="phone:flex-col flex w-full items-center justify-center gap-10">
          <Container
            transform="translateX(0)"
            translate="translateX(-100px)"
            className="w-[50%]"
          >
            <Image
              fetchPriority="high"
              src={Me}
              alt="riccardo mannino"
              className="phone:self-center hover:translate-y-1  transition-all mr-10 w-full rounded-full shadow shadow-foreground"
              width={400}
              height={300}
            />
          </Container>
          <Container
            transform="translateX(0)"
            translate="translateX(100px)"
            className="phone:w-full flex w-[50%] flex-col"
          >
            <h1 className="mb-4 text-3xl text-wrap text-primary md:text-4xl">
              Chi Sono
            </h1>
            <h2 className="text-lg">
              Mi chiamo Riccardo Mannino, sono uno sviluppatore frontend junior
              con una passione per la tecnologia e il design. Lavoro per creare
              siti web che siano non solo belli da vedere, ma anche semplici da
              usare e adatti a ogni esigenza. Collaborare con aziende e privati
              è per me un’occasione per ascoltare le loro esigenze e
              trasformarle in soluzioni digitali su misura.
            </h2>
            <Button className='hover:bg-foreground text-background text-lg shadow-primary mt-10 bg-foreground'>
            <Link
              href={'/about'}
              className="phone:self-center w-fit cursor-pointer items-center justify-between "
              >
              Scopri di più su di me
            </Link>
              </Button>
          </Container>
        </div>
      </section>
      <Container type="section" className="mt-40 flex flex-col gap-7">
        <h1 className="phone:text-center text-3xl font-bold text-wrap text-emerald-500 md:text-4xl">
          Come posso aiutarti?
        </h1>
        <h2 className="phone:text-center text-lg ">
          Lavoro con aziende e privati per trasformare le loro idee in siti web
          moderni e funzionali. Ecco cosa posso fare per te
        </h2>
        <div className="mt-7 flex h-full w-full flex-col items-center justify-center">
          <h1 className="mb-5 text-3xl font-bold text-wrap text-emerald-500 md:text-4xl">
            Servizi
          </h1>
          <div className="phone:mt-7 phone:flex-col flex h-full w-full items-center justify-between gap-7">
            <Container
              transform="translateX(0)"
              translate="translateX(-100px)"
              className="h-60 rounded-2xl border-2 border-foreground shadow shadow-foreground p-8"
            >
              <h2 className="text-center text-xl font-semibold ">
                Aziende
              </h2>
              <div className="my-2 flex space-x-1">
                <IconCircleCheckFilled className="mt-2 h-4 w-8  sm:w-4" />
                <p className="text-base md:text-lg">
                  Restyling e ottimizzazione di siti esistenti.
                </p>
              </div>
              <div className="my-2 flex space-x-1">
                <IconCircleCheckFilled className="mt-2 h-4 w-8 sm:w-4" />
                <p className="text-base text-balance  md:text-lg">
                  Siti web aziendali e applicazioni personalizzate.
                </p>
              </div>
            </Container>

            <Container
              transform="translateX(0)"
              translate="translateX(100px)"
              className="h-60 rounded-2xl border-2 border-foreground shadow shadow-foreground p-8"
            >
              <h2 className="text-center text-xl font-semibold ">
                Privati
              </h2>
              <div className="my-2 flex space-x-1">
                <IconCircleCheckFilled className="mt-2 h-4 w-8 sm:w-4" />
                <p className="text-base md:text-lg">
                  Portfolio online e siti personali.
                </p>
              </div>
              <div className="my-2 flex space-x-1">
                <IconCircleCheckFilled className="mt-2 h-4 w-8 sm:w-4" />
                <p className="text-base md:text-lg">
                  Blog e siti per piccole attività.
                </p>
              </div>
            </Container>
          </div>
        </div>
      </Container>

      <Container
        type="section"
        className="mt-40 flex flex-col gap-7 text-center"
      >
        <h1 className="text-3xl font-bold text-wrap md:text-4xl">
          Competenze Tecniche
        </h1>
        <h2 className="phone:text-center text-lg ">
          Le tecnologie e gli strumenti che utilizzo
        </h2>
        <div className="phone:flex-col flex w-full justify-center gap-7">
          <Container
            transform="translateX(0)"
            translate="translateX(-100px)"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className="flex cursor-pointer flex-col rounded-2xl px-8 py-5 shadow shadow-foreground border-2 border-foreground"
          >
            <h2 className="p-3 text-xl font-semibold ">
              Frontend
            </h2>
            <div className="grid grid-cols-2 grid-rows-2 place-items-center gap-5">
              <div>
                <Image
                  src={ReactIcon}
                  width={70}
                  height={70}
                  alt="React"
                  className="rounded-2xl  p-2"
                />
                <p className="font-semibold ">React</p>
              </div>
              <div>
                <Image
                  src={NextIcon}
                  width={70}
                  height={70}
                  alt="Nextjs"
                  className="rounded-2xl"
                />
                <p className="font-semibold ">Next.js</p>
              </div>
              <div className="">
                <Image
                  src={TailwindIcon}
                  width={70}
                  height={70}
                  alt="Tailwind"
                  className="rounded-2xl bg-white p-2"
                />
                <p className="font-semibold ">Tailwind</p>
              </div>
              <div className="flex flex-col">
                <Image
                  src={TypescriptIcon}
                  width={70}
                  height={70}
                  alt="Typescript"
                  className="self-center rounded-2xl  bg-white"
                />
                <p className="font-semibold ">Typescript</p>
              </div>
            </div>
          </Container>
          <Container
            transform="translateX(0)"
            translate="translateX(100px)"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className="phone:h-fit phone:w-full grid h-auto w-fit cursor-pointer grid-cols-1 grid-rows-1 gap-7 rounded-2xl border-2 shadow border-foreground shadow-foreground px-8 py-5"
          >
            <div className="flex cursor-pointer flex-col">
              <h2 className="p-3 text-xl font-semibold ">
                Tool & Database
              </h2>
              <div className="flex flex-col">
                <Image
                  src={GitIcon}
                  width={70}
                  height={70}
                  alt="Git"
                  className="self-center rounded-2xl bg-white p-2"
                />
                <p className="font-semibold ">Git</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <Image
                  src={SupabaseIcon}
                  width={70}
                  height={70}
                  alt="supabase"
                  className="self-center rounded-2xl bg-white p-2"
                />
                <p className="font-semibold ">Supabase</p>
              </div>
            </div>
          </Container>
        </div>
      </Container>

      <Container
        type="section"
        className="mt-40 flex flex-col gap-7 py-24 text-center"
        id="progetti"
      >
        <h1 className="mb-6 text-3xl font-bold text-wrap md:text-4xl">
          I Miei Progetti
        </h1>
        <div className="relative  ">
          {progetti.map((el) => (
            <div className='border-2 shadow shadow-foreground mb-5 border-foreground  max-md:grid-cols-1 rounded grid grid-flow-row grid-cols-2' key={el.nome}>
            <Container
              transform="translateX(0)"
              translate="translateX(-100px)"
              className={` 
             p-3 rounded-2xl items-center justify-center w-full`}
              >
                <Image
                  src={el.immagine}
                  alt={el.nome}
                  className="rounded-2xl w-full"
                  
                />
             
            </Container>
            <Container className=' flex flex-col justify-center items-center' >
              <Link
                className="m-5 cursor-pointer rounded-2xl  font-semibold "
                href={`/projects/${el.nome.toLowerCase().split(' ').join('-')}`}
                >
                <p className="p-4 ombraxs font-bold text-primary text-2xl">{el.nome}</p>
                  </Link>
                <p className="p-4 ">{el.descrizione}</p>
                <div className="flex flex-wrap gap-4 p-4 max-sm:justify-center">
                  {el.tecnologie.map((ele) => (
                    <Tag key={ele.nome} title={ele.nome} />
                  ))}
                </div>
            </Container>
                  </div>
          ))}
        </div>
      </Container>
      <Container type="section" className="py-24" id="contact">
        <ContactForm />
      </Container>
    </>
  )
}
