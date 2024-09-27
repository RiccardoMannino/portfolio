'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import Avatar from './Avatar'

import {
  IconChevronRight,
  IconBriefcase,
  IconHome,
  IconMessage,
  IconBrandLinkedin,
  IconBrandGithub,
  IconLayoutSidebarRightCollapse,
  IconLayoutSidebarRightExpand,
} from '@tabler/icons-react'
import { useRouter, usePathname } from 'next/navigation'

type Pagine = {
  pagina: string
  href: string
  image?: JSX.Element
}

export default function Sidebar() {
  const [isVisible, setIsVisible] = useState(true)

  const router = useRouter()
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  useEffect(() => {
    pathname === '/'
      ? (document.title = 'Riccardo Mannino - Home')
      : (document.title = `Riccardo Mannino - ${pathname
          .slice(1)
          .charAt(0)
          .toUpperCase()}${pathname.slice(2)}`)
  }, [pathname])

  const listaPagine: Pagine[] = [
    {
      pagina: 'Home',
      href: '/',
      image: (
        <IconHome
          size={20}
          className={isActive(`/`) ? 'stroke-blue-300' : ''}
        />
      ),
    },
    {
      pagina: 'Chi sono',
      href: '/about',
      image: (
        <IconMessage
          size={20}
          className={isActive(`/about`) ? 'stroke-blue-300' : ''}
        />
      ),
    },
    {
      pagina: 'Progetti',
      href: '/projects',
      image: (
        <IconBriefcase
          size={20}
          className={isActive(`/projects`) ? 'stroke-blue-300' : ''}
        />
      ),
    },
    {
      pagina: 'Contatti',
      href: '/contact',
      image: (
        <IconMessage
          size={20}
          className={isActive(`/contact`) ? 'stroke-blue-300' : ''}
        />
      ),
    },
  ]

  const social: Pagine[] = [
    {
      pagina: 'Linkedin',
      href: 'https://www.linkedin.com/in/riccardo-mannino/',
      image: <IconBrandLinkedin size={20} />,
    },
    {
      pagina: 'Github',
      href: 'https://github.com/RiccardoMannino/',
      image: <IconBrandGithub size={20} />,
    },
  ]

  return (
    <>
      <motion.div
        animate={{ x: isVisible ? 0 : -215 }}
        transition={{ type: 'spring', duration: 1.5 }}
        className="fixed left-0 z-50 flex h-full w-fit flex-col justify-between bg-neutral-100 px-5 py-10"
      >
        <div className="flex flex-col gap-7">
          <Avatar />
          <div className="mt-4 flex flex-col gap-2">
            {listaPagine.map((li) => (
              <motion.div key={li.href}>
                <Link
                  onClick={() => {
                    router.push(li.href)
                  }}
                  className={
                    (isActive(`${li.href}`) &&
                      'flex w-full items-center gap-2 rounded-md bg-white p-[8px] text-sm shadow-lg') ||
                    'flex transform gap-2 stroke-neutral-500 p-[8px] text-sm text-neutral-400 duration-100 ease-in-out hover:stroke-neutral-700 hover:text-neutral-700'
                  }
                  href={li.href}
                >
                  {li.image}
                  {li.pagina}
                </Link>
              </motion.div>
            ))}
            <p className="mx-2 mt-8 text-sm font-bold">Socials</p>

            {social.map((so) => (
              <Link
                href={so.href}
                target="_blank"
                key={so.href}
                className="delay-2 flex transform flex-row items-center stroke-neutral-500 p-[6px] text-sm text-neutral-400 duration-100 ease-in hover:stroke-neutral-700 hover:text-neutral-700"
              >
                {so.image} <span className="ml-[0.8rem]">{so.pagina}</span>
              </Link>
            ))}
          </div>
        </div>

        <Link className="flex justify-center" href={'/resume'} passHref>
          <button
            onClick={(e) => {
              e.preventDefault(), router.push('/resume')
            }}
            type="button"
            className="bold flex items-center justify-between rounded-full bg-gray-900 px-4 py-3 text-xs font-semibold text-white"
          >
            Read Resume {<IconChevronRight size={15} color="white" />}
          </button>
        </Link>
      </motion.div>
      <motion.button
        animate={{ rotate: !isVisible ? 0 : 180 }}
        transition={{ duration: 1 }}
        className="fixed bottom-5 right-10 rounded-[50%] border p-2"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? (
          <IconLayoutSidebarRightCollapse />
        ) : (
          <IconLayoutSidebarRightExpand />
        )}
      </motion.button>
    </>
  )
}
