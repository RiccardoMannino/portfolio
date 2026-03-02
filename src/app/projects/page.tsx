import Container from '@/components/Container'
import { progetti } from '@/data/progetti'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Progetti - Riccardo Mannino',
  description:
    'Esplora i progetti realizzati da Riccardo Mannino, sviluppatore frontend. Scopri le soluzioni innovative e le tecnologie utilizzate nei suoi lavori.',
  keywords: [
    'progetti riccardo mannino',
    'progetti frontend developer',
    'progetti web development',
    'portfolio progetti riccardo mannino',
  ],
  openGraph: {
    title: 'Progetti - Riccardo Mannino',
    description:
      'Esplora i progetti realizzati da Riccardo Mannino, sviluppatore frontend. Scopri le soluzioni innovative e le tecnologie utilizzate nei suoi lavori.',
    url: 'https://www.riccardomannino.it/projects',
    siteName: 'Riccardo Mannino',
    type: 'website',
  },
}

export default function Projects() {
  return (
    <>
      <h1 className="text-primary ombra mb-10 text-3xl font-bold max-sm:text-center">
        Progetti 💼
      </h1>
      <section className="max-sm:text-center">
        {progetti.map((el) => (
          <div
            key={el.nome}
            className="phone:flex-col-reverse mb-10 flex w-full gap-10"
          >
            <Container
              type="div"
              transform="translateX(0)"
              translate="translateX(-100px)"
              className="max-sm:flex max-sm:flex-col max-sm:items-center"
            >
              <Link
                href={`/projects/${el.nome.toLowerCase().split(' ').join('-')}`}
              >
                <Image
                  src={el.immagine}
                  alt="immagine"
                  width={300}
                  height={200}
                  className="cursor-pointer rounded-2xl"
                />
              </Link>
            </Container>
            <Container
              type="div"
              transform="translateX(0)"
              translate="translateX(100px)"
            >
              <h1 className="text-primary ombra text-lg font-semibold">
                {el.nome}
              </h1>
              <p className="text-foreground text-base font-semibold">
                {el.descrizione}
              </p>
            </Container>
          </div>
        ))}
      </section>
    </>
  )
}
