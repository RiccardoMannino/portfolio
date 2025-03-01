import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Me from '@/assets/aboutme.jpg'
import Pc from '@/assets/pc.jpg'

export default function About() {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-emerald-500 phone:text-center md:text-4xl">
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
      <p className="mt-5 text-lg text-neutral-500">
        Mi chiamo Riccardo Mannino e sono un appassionato frontend developer con
        un forte interesse per la creazione di interfacce web eleganti e
        funzionali.
      </p>
      <p className="mt-5 text-lg text-neutral-500">
        Durante la mia carriera ho sviluppato competenze in HTML, CSS,
        JavaScript e specialmente nell&apos;utilizzo di React.js. Ho esperienza
        nella creazione di componenti personalizzati con Material UI e Styled
        Components e nel gestire stati con Redux.
      </p>
      <p className="mt-5 text-lg text-neutral-500">
        Inoltre, ho collaborato a progetti che richiedevano l&apos;integrazione
        con API e la gestione del routing delle pagine con Next.js.
      </p>

      <p className="mt-5 text-lg text-neutral-500">
        Ho iniziato la mia carriera lavorando per la Forneria Messina, dove ho
        mantenuto il sito aziendale con WordPress ed Elementor.
      </p>
      <p className="mt-5 text-lg text-neutral-500">
        Successivamente, ho lavorato come frontend developer per The Cove S.R.L,
        dove ho consolidato le mie competenze lavorando su progetti complessi.
      </p>
      <p className="mt-5 text-lg text-neutral-500">
        Mi dedico a migliorare continuamente le mie abilità, rimanendo sempre
        aggiornato sulle ultime tecnologie e metodologie di sviluppo. Se vuoi
        saperne di più o discutere di possibili collaborazioni, sentiti libero
        di contattarmi!
      </p>
      <p className="mt-5 text-lg text-neutral-500">
        Connettiamoci! Sono sempre aperto a nuove collaborazioni, idee
        interessanti o semplicemente a una chiacchierata sul mondo dello
        sviluppo web. Puoi trovarmi su{' '}
        <Link
          className="font-bold text-emerald-500"
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
