import Container from '@/components/Container'
import React from 'react'

// app/privacy-policy/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Riccardo Mannino',
  description:
    'Leggi la nostra informativa sulla privacy. Scopri come trattiamo i tuoi dati e proteggiamo la tua sicurezza sul sito riccardomannino.it.',
  keywords: [
    'privacy policy',
    'dati personali',
    'riccardo mannino',
    'informativa privacy',
  ],
  openGraph: {
    title: 'Privacy Policy - Riccardo Mannino',
    description:
      'Informazioni dettagliate su come Riccardo Mannino gestisce i dati personali degli utenti.',
    url: 'https://www.riccardomannino.it/privacy',
    siteName: 'Riccardo Mannino',
    type: 'article',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Privacy() {
  return (
    <Container type="section" className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-emerald-500">Privacy Policy</h1>
      <p className="font-semibold text-neutral-500">
        Ultimo aggiornamento: 15/03/2025
      </p>
      <div>
        <h2 className="text-2xl font-semibold text-emerald-500">
          1. Titolare del Trattamento dei Dati
        </h2>
        <p className="text-neutral-500">
          Riccardo Mannino , Email: manninoriccardo3@gmail.com
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-emerald-500">
          2. Tipologia di dati raccolti
        </h2>
        <p className="text-neutral-500">
          Attraverso il form di contatto sul sito, vengono raccolti i seguenti
          dati: Nome e Cognome Email Messaggio inserito dall’utente.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-emerald-500">
          3. Finalità del trattamento
        </h2>
        <p className="text-neutral-500">
          I dati raccolti tramite il form vengono utilizzati esclusivamente per
          rispondere alle richieste inviate dagli utenti e non vengono
          memorizzati in database o utilizzati per fini di marketing. L’unico
          dato conservato è l’email ricevuta, necessaria per gestire la
          comunicazione con l’utente.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-emerald-500">
          4. Base giuridica del trattamento
        </h2>
        <p className="text-neutral-500">
          Il trattamento dei dati si basa sul consenso dell’utente, che fornisce
          volontariamente le informazioni compilando il form di contatto.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-emerald-500">
          5. Modalità del trattamento
        </h2>
        <p className="text-neutral-500">
          I dati inviati vengono trasmessi tramite il servizio EmailJS
          direttamente alla casella email del titolare. Nessun dato viene
          salvato su server o database del sito web.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-emerald-500">
          6. Conservazione dei dati
        </h2>
        <p className="text-neutral-500">
          Le email ricevute vengono conservate esclusivamente per il tempo
          necessario a gestire la comunicazione. Le email non pertinenti o
          considerate spam vengono eliminate immediatamente.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-emerald-500">
          7. Condivisione dei dati
        </h2>
        <p className="text-neutral-500">
          I dati inviati tramite il form non vengono ceduti a terzi né
          utilizzati per finalità diverse dalla comunicazione con l’utente.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-emerald-500">
          8. Diritti dell’utente
        </h2>
        <p className="text-neutral-500">
          L’utente ha il diritto di: Accedere ai propri dati personali Chiedere
          la rettifica o la cancellazione dei dati Opporsi al trattamento
          Revocare il consenso in qualsiasi momento Per esercitare tali diritti,
          è possibile contattare il titolare del trattamento all’email:
          manninoriccardo3@gmail.com .
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-emerald-500">
          9. Cookie e tracciamento
        </h2>
        <p className="text-neutral-500">
          Questo sito non utilizza cookie di profilazione o strumenti di
          tracciamento relativi ai dati raccolti tramite il form di contatto.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-emerald-500">
          10. Modifiche alla presente Privacy Policy
        </h2>
        <p className="text-neutral-500">
          Il titolare si riserva il diritto di modificare questa informativa,
          pertanto si consiglia di consultarla periodicamente.
        </p>
      </div>
    </Container>
  )
}
