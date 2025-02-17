import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Me from '@/assets/aboutme.jpg'
import Pc from '@/assets/pc.jpg'

export default function About() {
  return (
    <>
      <h1 className="mb-4 font-bold text-emerald-500 phone:text-center phone:text-xl md:text-3xl">
        Chi sono <span>📖</span>
      </h1>
      <div className="flex w-full gap-10 phone:justify-center">
        <Image
          src={Me}
          height={300}
          width={300}
          alt="Riccardo Mannino"
          className="rounded-lg phone:flex phone:h-auto phone:w-auto"
        />
        <Image
          src={Pc}
          height={400}
          width={400}
          alt="Riccardo Mannino"
          className="rounded-lg phone:hidden"
        />
      </div>
      <p className="mt-5 text-sm text-neutral-500 md:text-base lg:text-lg">
        Mi chiamo Riccardo Mannino e sono un appassionato frontend developer con
        un forte interesse per la creazione di interfacce web eleganti e
        funzionali.
      </p>
      <p className="mt-5 text-sm text-neutral-500 md:text-base lg:text-lg">
        Durante la mia carriera ho sviluppato competenze in HTML, CSS,
        JavaScript e specialmente nell&apos;utilizzo di React.js. Ho esperienza
        nella creazione di componenti personalizzati con Material UI e Styled
        Components e nel gestire stati con Redux.
      </p>
      <p className="mt-5 text-sm text-neutral-500 md:text-base lg:text-lg">
        Inoltre, ho collaborato a progetti che richiedevano l&apos;integrazione
        con API e la gestione del routing delle pagine con Next.js.
      </p>

      <p className="mt-5 text-sm text-neutral-500 md:text-base lg:text-lg">
        Ho iniziato la mia carriera lavorando per la Forneria Messina, dove ho
        mantenuto il sito aziendale con WordPress ed Elementor.
      </p>
      <p className="mt-5 text-sm text-neutral-500 md:text-base lg:text-lg">
        Successivamente, ho lavorato come frontend developer per The Cove S.R.L,
        dove ho consolidato le mie competenze lavorando su progetti complessi.
      </p>
      <p className="mt-5 text-sm text-neutral-500 md:text-base lg:text-lg">
        Mi dedico a migliorare continuamente le mie abilità, rimanendo sempre
        aggiornato sulle ultime tecnologie e metodologie di sviluppo. Se vuoi
        saperne di più o discutere di possibili collaborazioni, sentiti libero
        di contattarmi!
      </p>
      <p className="mt-5 text-sm text-neutral-500 md:text-base lg:text-lg">
        Connettiamoci! Sono sempre aperto a nuove collaborazioni, idee
        interessanti o semplicemente a una chiacchierata sul mondo dello
        sviluppo web. Puoi trovarmi su{' '}
        <Link
          className="font-bold text-blue-600"
          target="_blank"
          href="https://www.linkedin.com/in/riccardo-mannino/"
        >
          LinkedIn
        </Link>{' '}
        per discutere di progetti o opportunità.
      </p>
    </>
  )
}
