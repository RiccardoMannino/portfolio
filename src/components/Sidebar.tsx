'use client'
import Link from 'next/link'
import {useMediaQuery} from '@/hooks/useMediaQuery'
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


type Pagine = {
  pagina: string
  href: string
  image?: ReactNode
}

export default function Sidebar() {
  const [isVisible, setIsVisible] = useState(true)
  const [isResponsive, setIsResponsive] = useState(true)


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
  // const variants =  medium
  //   ? {
  //     animate: {
  //       y: isVisible ? 0 : 220,
  //     },
  //   }
  //   :  {
  //     animate: {
  //       x: isVisible ? 0 : -220,
  //     },
  //   };



  return (
    <>
      <motion.div
        animate={
          medium
          ? { y: isVisible ? 0 : 220 }
          : { x: isVisible ? 0 : -220 }
        }
        transition={{ type: 'linear', duration: 0.2 }}
        className={`fixed left-0 phone:bottom-0 phone:h-14 phone:flex-row phone:w-full z-50 flex h-full flex-col justify-between bg-neutral-100 px-5 phone:py-0 py-10 transition-all duration-200 ease-out`}
      >
        <div className="flex phone:flex-row phone:w-full phone:items-center flex-col phone:gap-1 gap-7">
          <Avatar />
          <div className="mt-4 phone:mt-0 phone:w-full flex phone:justify-center phone:flex-row flex-col gap-2">
            {listaPagine.map((li) => (
              <motion.div key={li.href}>
                <Link
                  onClick={() => {
                    router.push(li.href)
                  }}
                  className={
                    (isActive(`${li.href}`) &&
                      'phone:justify-center flex w-full items-center gap-2 rounded-md bg-white p-[8px] text-sm shadow-lg') ||
                    'phone:justify-center flex transform gap-2 stroke-neutral-500 p-[8px] text-sm text-neutral-400 duration-100 ease-in-out hover:stroke-neutral-700 hover:text-neutral-700'
                  }
                  href={li.href}
                >
                  {li.image}
                  <span className="phone:hidden ml-3 gap-4 transition-all duration-200 sm:flex">
                    {li.pagina}
                  </span>
                </Link>
              </motion.div>
            ))}
            {
              <p className="phone:hidden mx-2 mt-8 gap-4 text-sm font-bold sm:flex">
                Socials
              </p>
            }
            {social.map((so) => (
              <Link
                href={so.href}
                target="_blank"
                key={so.href}
                className="phone:justify-center flex transform flex-row items-center stroke-neutral-500 p-[6px] text-sm text-neutral-400 delay-75 duration-100 ease-in hover:stroke-neutral-700 hover:text-neutral-700"
              >
                {so.image}
                <span
                  className={`phone:hidden ml-3 gap-4 transition-all duration-200 sm:flex`}
                >
                  {so.pagina}
                </span>
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
            className="bold phone:px-2 phone:py-2 phone:self-center flex w-fit items-center justify-between rounded-full bg-gray-900 px-4 py-3 text-xs font-semibold text-white"
          >
            <div className="flex gap-2">
              <>
                <span className="phone:inline hidden">Cv</span>
                <span className="phone:hidden">Leggi curriculum</span>
                <IconChevronRight
                  className="phone:hidden"
                  size={15}
                  color="white"
                />
              </>
            </div>
          </button>
        </Link>
      </motion.div>

      <motion.button
        animate={{ rotate: !isVisible ? 0 : 180 }}
        transition={{ duration: 0.3 }}
        className="fixed phone:top-4 sm:bottom-0 right-4 z-[100] rounded-[50%] border p-3"
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
