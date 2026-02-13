import Link from 'next/link'
import Image from 'next/image'
import { progetti } from '@/data/progetti'
import Container from '@/components/Container'
import Button from '@/components/Button'
import BackButton from '@/components/BackButton'
import NextIconTheme from '@/components/NextIconThemes'

export default async function Progetto({
  params,
}: {
  params: Promise<{ progettos: string }>
}) {
  const { progettos } = await params

  const progetto = progetti.find(
    (p) => p.nome.toLowerCase().split(' ').join('-') === progettos,
  )
  const tecnologie = progetti
    .filter((p) => p.nome.toLowerCase().split(' ').join('-') === progettos)
    .map((el) =>
      el.tecnologie.map((ele) => (
        <div className="grid place-items-center" key={ele.nome}>
          {ele.nome === 'Nextjs' ? (
            <>
              <NextIconTheme />{' '}
              <p className="text-foreground text-center font-semibold">
                {ele.nome}
              </p>
            </>
          ) : (
            <>
              <Image
                src={ele.image}
                width={70}
                height={70}
                alt="tecnologie"
                className="phone:w-fit phone:h-15 cursor-pointer transition-all duration-200 hover:-translate-y-2"
              />
              <p className="text-foreground text-center font-semibold">
                {ele.nome}
              </p>
            </>
          )}
        </div>
      )),
    )

  if (!progetto) {
    return <p className="font-semibold text-red-500">Progetto non trovato!</p>
  }

  return (
    <Container type="section" className="mx-auto flex flex-col gap-7 p-6">
      <BackButton />
      <div className="phone:grid-rows-1 phone:grid-cols-1 grid gap-7">
        <div className="flex flex-col gap-3">
          <div className="flex w-full items-center justify-center gap-7 max-sm:flex-col">
            <h1 className="text-[clamp(1rem,calc(5vw+1rem),3.5rem)] leading-11 font-bold max-sm:text-center">
              {progetto?.nome}
            </h1>
            <Button type="button" className="shadow-foreground text-black">
              <Link href={progetto?.href} target="_blank">
                Guarda il sito
              </Link>
            </Button>
          </div>

          <p className="text-foreground mt-4 text-center font-semibold">
            {progetto?.descrizione}
          </p>
          <Image
            src={progetto?.immagine}
            alt="immagine"
            className="self-center rounded-2xl"
            width={500}
          />
          <p className="text-foreground mt-2 text-center font-semibold whitespace-pre-line">
            {progetto?.stato ? ` ${progetto.stato}` : ''}
          </p>
          <p className="text-foreground mt-2 text-center font-semibold whitespace-pre-line">
            {progetto?.obiettivo ? `Obiettivo: ${progetto.obiettivo}` : ''}
          </p>
        </div>
        <div className="flex w-full flex-col flex-wrap gap-2">
          <div className="flex h-fit flex-col gap-5 rounded-2xl p-4">
            <h1 className="text-center font-semibold">Tecnologie utilizzate</h1>
            <div className="phone:grid-flow-row phone:grid-cols-2 grid grid-flow-col grid-rows-1 place-content-center gap-5">
              {tecnologie}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
