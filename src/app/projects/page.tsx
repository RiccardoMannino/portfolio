import Container from '@/components/Container'
import { progetti } from '@/data/progetti'
import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
  return (
    <>
      <h1 className="mb-10 text-3xl font-bold text-emerald-500">Progetti 💼</h1>
      <section>
        {progetti.map((el) => (
          <div
            key={el.nome}
            className="phone:flex-col-reverse mb-10 flex w-full gap-10"
          >
            <Container
              type="div"
              transform="translateX(0)"
              translate="translateX(-100px)"
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
              <h1 className="text-lg font-semibold text-emerald-500">
                {el.nome}
              </h1>
              <p className="text-base font-semibold text-neutral-500">
                {el.descrizione}
              </p>
            </Container>
          </div>
        ))}
      </section>
    </>
  )
}
