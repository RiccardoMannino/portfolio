'use client'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useRouter, usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import Avatar from './Avatar'
import {
  IconChevronRight,
  IconBriefcase,
  IconHome,
  IconUser,
  IconMessage,
  IconBrandLinkedin,
  IconBrandGithub,
  IconLayoutSidebarRightCollapse,
  IconLayoutSidebarRightExpand,
} from '@tabler/icons-react'
import Button from './ButtonLink'

type Pagine = {
  pagina: string
  href: string
  image?: ReactNode
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
        <IconUser
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

  const medium = useMediaQuery('(max-width: 639px)')

  return (
    <>
      <motion.div
        animate={
          medium ? { y: isVisible ? 0 : 220 } : { x: isVisible ? 0 : -220 }
        }
        transition={{ type: 'linear', duration: 0.2 }}
        className={`fixed left-0 z-50 flex h-full flex-col justify-between bg-neutral-100 px-5 py-10 transition-all duration-200 ease-out phone:bottom-0 phone:h-14 phone:w-full phone:flex-row phone:py-0`}
      >
        <div className="flex flex-col gap-7 phone:w-full phone:flex-row phone:items-center phone:gap-1">
          <Avatar />
          <div className="mt-4 flex flex-col gap-2 phone:mt-0 phone:w-full phone:flex-row phone:justify-center">
            {listaPagine.map((li) => (
              <motion.div key={li.href}>
                <Link
                  onClick={() => {
                    router.push(li.href)
                  }}
                  className={
                    (isActive(`${li.href}`) &&
                      'flex w-full items-center gap-2 rounded-md bg-white p-[8px] text-sm shadow-lg phone:justify-center') ||
                    'flex transform gap-2 stroke-neutral-500 p-[8px] text-sm text-neutral-400 duration-100 ease-in-out hover:stroke-neutral-700 hover:text-neutral-700 phone:justify-center'
                  }
                  href={li.href}
                >
                  {li.image}
                  <span className="ml-3 gap-4 transition-all duration-200 phone:hidden sm:flex">
                    {li.pagina}
                  </span>
                </Link>
              </motion.div>
            ))}
            {
              <p className="mx-2 mt-8 gap-4 text-sm font-bold phone:hidden sm:flex">
                Socials
              </p>
            }
            {social.map((so) => (
              <Link
                href={so.href}
                target="_blank"
                key={so.href}
                className="flex transform flex-row items-center stroke-neutral-500 p-[6px] text-sm text-neutral-400 delay-75 duration-100 ease-in hover:stroke-neutral-700 hover:text-neutral-700 phone:justify-center"
              >
                {so.image}
                <span
                  className={`ml-3 gap-4 transition-all duration-200 phone:hidden sm:flex`}
                >
                  {so.pagina}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <Link className="flex justify-center" href={'/resume'} passHref>
          <Button
            onClick={(e) => {
              e.preventDefault(), router.push('/resume')
            }}
            type="button"
          >
            <div className="flex gap-2">
              <span className="hidden phone:inline">Cv</span>
              <span className="phone:hidden">Leggi curriculum</span>
              <IconChevronRight
                className="phone:hidden"
                size={15}
                color="white"
              />
            </div>
          </Button>
        </Link>
      </motion.div>

      <motion.button
        animate={{ rotate: !isVisible ? 0 : 180 }}
        transition={{ duration: 0.3 }}
        className="fixed right-4 z-[100] rounded-[50%] border p-3 phone:top-4 sm:bottom-4"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? (
          <IconLayoutSidebarRightCollapse className="h-4 w-4" />
        ) : (
          <IconLayoutSidebarRightExpand className="h-4 w-4" />
        )}
      </motion.button>
    </>
  )
}
