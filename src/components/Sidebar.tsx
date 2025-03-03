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
      <motion.div
        animate={
          medium ? { y: isVisible ? 0 : 220 } : { x: isVisible ? 0 : -220 }
        }
        transition={{ type: 'linear', duration: 0.3, damping: 10 }}
        className={`fixed left-0 z-50 flex h-full flex-col justify-between bg-gradient-to-r from-emerald-100 to-emerald-50 px-5 py-10 transition-all duration-200 ease-out phone:bottom-0 phone:h-14 phone:w-full phone:flex-row phone:bg-gradient-to-t phone:from-emerald-50 phone:to-emerald-100 phone:py-0`}
      >
        <div className="iphone:gap-0 flex flex-col gap-7 phone:w-full phone:flex-row phone:items-center phone:gap-1">
          <Avatar />
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-4 flex flex-col gap-2 phone:mt-0 phone:w-full phone:flex-row phone:justify-center"
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
                      'flex w-full items-center justify-start bg-gray-900 p-[8px] text-sm text-emerald-500 shadow-lg phone:justify-center phone:p-2') ||
                    'flex w-full justify-start bg-emerald-500 stroke-neutral-50 p-[8px] text-sm text-neutral-50 shadow-lg transition-all duration-200 hover:text-gray-900 phone:justify-center phone:p-2'
                  }
                >
                  {li.image}
                  <span
                    className={
                      (isActive(`${li.href}`) &&
                        'ml-3 gap-4 transition-all duration-200 phone:hidden sm:flex') ||
                      'ml-3 gap-4 transition-all duration-200 hover:text-gray-900 phone:hidden sm:flex'
                    }
                  >
                    {li.pagina}
                  </span>
                </Button>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <Button
          onClick={(e) => {
            e.preventDefault(), router.push('/resume')
          }}
          type="button"
          className="phone:p-2"
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
            <span className="hidden phone:inline">Cv</span>
            <span className="phone:hidden">Leggi curriculum</span>
            <IconChevronRight
              className="phone:hidden"
              size={15}
              color="white"
            />
          </div>
        </Button>
      </motion.div>

      <motion.button
        animate={{ rotate: !isVisible ? 0 : 180 }}
        transition={{ duration: 0.3, type: 'spring' }}
        className="fixed right-4 top-4 z-[100] rounded-[50%] border p-3"
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
