import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Me from '@/assets/aboutme.jpg'
import Pc from '@/assets/pc.jpg'
import Container from '@/components/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chi sono - Riccardo Mannino',
  description:
    'Mi chiamo Riccardo Mannino e sono un appassionato frontend developer con un forte interesse per la creazione di interfacce web eleganti e funzionali.',
  keywords: ['Chi sono', 'Riccardo Mannino', 'frontend developer', 'Palermo'],
  openGraph: {
    title: 'Chi sono - Riccardo Mannino',
    description:
      'Frontend developer con forte attenzione all’usabilità e al design moderno.',
    url: 'https://www.riccardomannino.it/about',
    siteName: 'Riccardo Mannino Portfolio',
    type: 'profile',
    images: [
      {
        url: '../../assets/Me.jpg',
        width: 1200,
        height: 630,
        alt: 'Chi sono - Riccardo Mannino',
      },
    ],
  },
}

export default function About() {
  return (
    <>
      <h1 className="phone:text-center mb-4 text-3xl font-bold ombra text-primary">
        Chi sono <span className="text-2xl">📖</span>
      </h1>
      <Container type="div" className="phone:justify-center flex w-full gap-10">
        <Image
          src={Me}
          height={300}
          width={300}
          alt="Riccardo Mannino"
          className="phone:flex phone:h-auto phone:w-auto rounded-lg"
        />
        <Image
          src={Pc}
          height={400}
          width={400}
          alt="Riccardo Mannino"
          className="phone:hidden rounded-lg"
        />
      </Container>
      <Container type="div" className="flex flex-col">
        <p className="mt-5 text-lg ">
          Mi chiamo Riccardo Mannino e sono un appassionato frontend developer
          con un forte interesse per la creazione di interfacce web eleganti e
          funzionali.
        </p>
        <p className="mt-5 text-lg ">
          Durante la mia carriera ho sviluppato competenze in HTML, CSS,
          JavaScript e specialmente nell&apos;utilizzo di React.js. Ho
          esperienza nella creazione di componenti personalizzati con Tailwind
          CSS e Styled Components e nel gestire stati con Redux.
        </p>
        <p className="mt-5 text-lg ">
          Inoltre, ho collaborato a progetti che richiedevano
          l&apos;integrazione con API e la gestione del routing delle pagine con
          Next.js.
        </p>

        <p className="mt-5 text-lg ">
          Ho iniziato la mia carriera lavorando per la Forneria Messina, dove ho
          mantenuto il sito aziendale con WordPress ed Elementor.
        </p>
        <p className="mt-5 text-lg ">
          Successivamente, ho lavorato come frontend developer per The Cove
          S.R.L, dove ho consolidato le mie competenze lavorando su progetti
          complessi.
        </p>
        <p className="mt-5 text-lg ">
          Mi dedico a migliorare continuamente le mie abilità, rimanendo sempre
          aggiornato sulle ultime tecnologie e metodologie di sviluppo. Se vuoi
          saperne di più o discutere di possibili collaborazioni, sentiti libero
          di contattarmi!
        </p>
        <p className="mt-5 text-lg ">
          Connettiamoci! Sono sempre aperto a nuove collaborazioni, idee
          interessanti o semplicemente a una chiacchierata sul mondo dello
          sviluppo web. Puoi trovarmi su{' '}
          <Link
            className="font-bold text-primary ombraxs"
            target="_blank"
            href="https://www.linkedin.com/in/riccardo-mannino/"
          >
            LinkedIn
          </Link>{' '}
          per discutere di progetti o opportunità.
        </p>
      </Container>
    </>
  )
}
