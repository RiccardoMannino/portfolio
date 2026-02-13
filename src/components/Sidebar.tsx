'use client'

import Avatar from './Avatar'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { ThemeContext } from '@/app/context/theme/ThemeContext'
import { useRouter, usePathname } from 'next/navigation'
import { useCallback, useContext, useState } from 'react'
import { motion } from 'motion/react'
import ThemeToggle from '@/components/ThemeToggle'
import { listaPagine } from '@/lib/pagine'
import {
  IconFileInvoice,
  IconLayoutSidebarRightCollapse,
  IconLayoutSidebarRightExpand,
} from '@tabler/icons-react'
import Button from './Button'

export default function Sidebar() {
  const [isVisible, setIsVisible] = useState(true)
  const { theme } = useContext(ThemeContext)

  const router = useRouter()
  const pathname = usePathname()
  const medium = useMediaQuery('(max-width: 639px)')

  const isActive = useCallback(
    (path: string) => {
      return pathname === path
    },
    [pathname],
  )

  // costanti per l'animazione della sidebar
  // si applica alla ul
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  //si applica alla li
  const item = {
    hidden: !medium ? { opacity: 0, x: -100 } : { opacity: 0, y: -280 },
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
          medium
            ? { y: isVisible ? 0 : 280, opacity: 1 }
            : { x: isVisible ? 0 : -220, opacity: 1 }
        }
        transition={{ type: 'spring', duration: 0.3, damping: 10 }}
        className={`phone:bottom-0 phone:h-fit phone:w-full phone:gap-2 phone:bg-linear-to-t phone:from-primary/5 phone:to-primary phone:py-2 phone:px:4 from-primary to-primary/5 fixed left-0 z-50 flex h-full flex-col justify-between bg-linear-to-r px-5 py-10 transition-all duration-200 ease-out`}
      >
        <div className="iphone:gap-0 phone:w-full phone:items-center phone:gap-1 flex flex-col gap-7">
          <Avatar />
          {/* Lista pagine */}
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="phone:mt-0 phone:w-full phone:justify-center mt-4 flex flex-col gap-2"
          >
            {listaPagine.map((li) => {
              const Icon = li.image
              return (
                <motion.li variants={item} key={li.href}>
                  <Button
                    type="button"
                    onClick={() => {
                      ;(router.push(li.href), setIsVisible(false))
                    }}
                    className={
                      (isActive(`${li.href}`) &&
                        'phone:justify-center hover:bg-foreground shadow-background bg-foreground text-primary-foreground w-full justify-start gap-2.5 p-2 text-base') ||
                      `phone:justify-center bg-primary shadow-foreground ${theme === 'dark' ? 'text-background' : 'text-foreground'} w-full justify-start gap-2.5 p-2 text-base shadow-md transition-all duration-200`
                    }
                  >
                    <Icon
                      size={20}
                      className={isActive(li.href) ? 'stroke-background' : ''}
                    />
                    <span
                      className={
                        (isActive(`${li.href}`) &&
                          'phone:flex-col phone:ml-0 text-background ml-3 gap-4 transition-all duration-200 sm:flex') ||
                        `phone:ml-0 ml-3 gap-4 ${theme === 'dark' ? 'text-background' : 'text-foreground'}transition-all duration-200 sm:flex sm:flex-col`
                      }
                    >
                      {li.pagina}
                    </span>
                  </Button>
                </motion.li>
              )
            })}
          </motion.ul>
        </div>

        {/* Bottone Pagina resume */}
        <Button
          onClick={(e) => {
            ;(e.preventDefault(), router.push('/resume'), setIsVisible(false))
          }}
          type="button"
          className={
            (isActive(`/resume`) &&
              'phone:justify-center hover:bg-foreground shadow-background bg-foreground text-primary-foreground w-full justify-start gap-2.5 p-2 text-base') ||
            `phone:justify-center bg-primary shadow-foreground ${theme === 'dark' ? 'text-background' : 'text-foreground'} w-full justify-start gap-2.5 p-2 text-base shadow-md transition-all duration-200`
          }
          initial={{ opacity: 0, y: 100 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              opacity: { ease: 'linear' },
            },
          }}
        >
          <div className="flex items-center gap-2">
            <IconFileInvoice
              size={20}
              className={`${isActive('/resume') && 'stroke-background'} ${theme === 'dark' ? 'stroke-background' : 'stroke-foreground'}`}
            />
            <span
              className={
                (isActive(`/resume`) &&
                  'phone:flex-col phone:ml-0 text-background ml-3 gap-4 transition-all duration-200 sm:flex') ||
                `phone:ml-0 ml-3 gap-4 ${theme === 'dark' ? 'text-background' : 'text-foreground'}transition-all duration-200 sm:flex sm:flex-col`
              }
            >
              Leggi curriculum
            </span>
          </div>
        </Button>
      </motion.div>

      <ThemeToggle />

      {/* Bottone menù */}
      <Button
        className={`bg-primary ${theme === 'dark' ? 'text-background border-background' : ''} shadow-foreground fixed top-4 right-4 z-100 flex flex-col items-center rounded-full border-2 p-3`}
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? (
          <IconLayoutSidebarRightCollapse className="h-3.5 w-3.5" />
        ) : (
          <IconLayoutSidebarRightExpand className="h-3.5 w-3.5" />
        )}
        <span className="text-xs">Menu</span>
      </Button>
    </>
  )
}
