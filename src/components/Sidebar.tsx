'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useRouter, usePathname } from 'next/navigation'
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { motion } from 'motion/react'

import Avatar from './Avatar'
import {
  IconChevronRight,
  IconBriefcase,
  IconHome,
  IconUser,
  IconMessage,
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
  const medium = useMediaQuery('(max-width: 639px)')

  const isActive = useCallback(
    (path: string) => {
      return pathname === path
    },
    [pathname],
  )

  const listaPagine: Pagine[] = useMemo(
    () => [
      {
        pagina: 'Home',
        href: '/',
        image: (
          <IconHome
            size={20}
            className={isActive(`/`) ? 'stroke-emerald-500' : ''}
          />
        ),
      },
      {
        pagina: 'Chi sono',
        href: '/about',
        image: (
          <IconUser
            size={20}
            className={isActive(`/about`) ? 'stroke-emerald-500' : ''}
          />
        ),
      },
      {
        pagina: 'Progetti',
        href: '/projects',
        image: (
          <IconBriefcase
            size={20}
            className={isActive(`/projects`) ? 'stroke-emerald-500' : ''}
          />
        ),
      },
      {
        pagina: 'Contatti',
        href: '/contact',
        image: (
          <IconMessage
            size={20}
            className={isActive(`/contact`) ? 'stroke-emerald-500' : ''}
          />
        ),
      },
    ],
    [isActive],
  )

  useEffect(() => {
    listaPagine.filter((pag, index) => {
      if (pathname === '/') {
        document.title = 'Riccardo Mannino - Home'
      }

      if (isActive(pag.href)) {
        document.title = `Riccardo Mannino - ${pag.pagina
          .charAt(0)
          .toUpperCase()}${pag.pagina.slice(1)}`
      }
    })
  }, [pathname, listaPagine, isActive])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const item = {
    hidden: !medium ? { opacity: 0, x: -100 } : { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      transform: !medium ? 'translateX(0)' : 'translateY(0)',
    },
  }

  return (
    <>
      {/* Navbar responsiva */}
      <motion.div
        animate={
          medium ? { y: isVisible ? 0 : 220 } : { x: isVisible ? 0 : -220 }
        }
        transition={{ type: 'linear', duration: 0.3, damping: 10 }}
        className={`phone:bottom-0 phone:h-fit phone:w-full phone:flex-row phone:bg-linear-to-t phone:from-emerald-50 phone:to-emerald-100 phone:py-2 phone:px:4 fixed left-0 z-50 flex h-full flex-col justify-between bg-linear-to-r from-emerald-100 to-emerald-50 px-5 py-10 transition-all duration-200 ease-out`}
      >
        <div className="iphone:gap-0 phone:w-full phone:flex-row phone:items-center phone:gap-1 flex flex-col gap-7">
          <Avatar />
          {/* Lista pagine */}
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="phone:mt-0 phone:w-full phone:flex-row phone:justify-center mt-4 flex flex-col gap-2"
          >
            {listaPagine.map((li) => (
              <motion.li variants={item} key={li.href}>
                <Button
                  type="button"
                  onClick={() => {
                    router.push(li.href)
                  }}
                  className={
                    (isActive(`${li.href}`) &&
                      'phone:justify-center phone:p-2 phone:flex-col flex w-full items-center justify-start bg-gray-900 p-[8px] text-emerald-500 shadow-lg hover:cursor-pointer sm:text-sm') ||
                    'phone:justify-center phone:flex-col phone:p-2 flex w-full justify-start bg-emerald-500 stroke-neutral-50 p-[8px] text-neutral-50 shadow-lg transition-all duration-200 hover:cursor-pointer hover:text-gray-900 sm:text-sm'
                  }
                >
                  {li.image}
                  <span
                    className={
                      (isActive(`${li.href}`) &&
                        'phone:flex-col phone:ml-0 ml-3 gap-4 transition-all duration-200 sm:flex') ||
                      'phone:ml-0 ml-3 gap-4 transition-all duration-200 hover:text-gray-900 sm:flex sm:flex-col'
                    }
                  >
                    {li.pagina}
                  </span>
                </Button>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Bottone Pagina resume */}
        <Button
          onClick={(e) => {
            e.preventDefault(), router.push('/resume')
          }}
          type="button"
          className="phone:p-3"
          initial={{ opacity: 0, x: -100 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              opacity: { ease: 'easeIn' },
            },
          }}
        >
          <div className="flex gap-2">
            <span className="phone:inline hidden hover:cursor-pointer">CV</span>
            <span className="phone:hidden hover:cursor-pointer">
              Leggi curriculum
            </span>
            <IconChevronRight
              className="phone:hidden"
              size={15}
              color="white"
            />
          </div>
        </Button>
      </motion.div>

      {/* Bottone menù */}
      <motion.button
        animate={{ rotate: !isVisible ? 0 : 360 }}
        transition={{ duration: 0.3, type: 'spring' }}
        className="fixed top-4 right-4 z-100 flex flex-col items-center rounded-full border p-3"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? (
          <IconLayoutSidebarRightCollapse className="h-5 w-5" />
        ) : (
          <IconLayoutSidebarRightExpand className="h-5 w-5" />
        )}
        <span className="text-xs">menu</span>
      </motion.button>
    </>
  )
}
