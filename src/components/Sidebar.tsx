'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useRouter, usePathname } from 'next/navigation'
import { useCallback, useState } from 'react'
import { motion } from 'motion/react'
import { listaPagine } from '@/lib/pagine'

import Avatar from './Avatar'
import {
  IconFileInvoice,
  IconLayoutSidebarRightCollapse,
  IconLayoutSidebarRightExpand,
} from '@tabler/icons-react'
import Button from './Button'

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const item = {
    hidden: !medium ? { opacity: 0, x: -100 } : { opacity: 0, y: -270 },
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
            ? { y: isVisible ? 0 : 270, opacity: 1 }
            : { x: isVisible ? 0 : -220, opacity: 1 }
        }
        transition={{ type: 'spring', duration: 0.3, damping: 10 }}
        className={`phone:bottom-0 phone:h-fit phone:w-full phone:gap-2 phone:bg-linear-to-t phone:from-primary/5 phone:to-primary phone:py-2 phone:px:4 fixed left-0 z-50 flex h-full flex-col justify-between bg-linear-to-r from-primary to-primary/5 px-5 py-10 transition-all duration-200 ease-out`}
      >
        <div className="iphone:gap-0 phone:w-full phone:items-center phone:gap-1 flex flex-col gap-7">
          <Avatar />
          {/* Lista pagine */}
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="phone:mt-0 phone:w-full  phone:justify-center mt-4 flex flex-col gap-2"
          >
            {listaPagine.map((li) => {
              const Icon = li.image
              return (
                <motion.li variants={item} key={li.href}>
                  <Button
                    type="button"
                    onClick={() => {
                      router.push(li.href)
                    }}
                    className={
                      (isActive(`${li.href}`) &&
                        'phone:justify-center hover:bg-foreground gap-2.5 w-full justify-start shadow-primary p-2 text-base bg-foreground text-primary-foreground  ') ||
                      'phone:justify-center gap-2.5 w-full justify-start bg-primary p-2 text-foreground shadow-md shadow-foreground transition-all duration-200 text-base'
                    }
                  >
                    <Icon
                      size={20}
                      className={isActive(li.href) ? 'stroke-background' : ''}
                    />
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
              )
            })}
          </motion.ul>
        </div>

        {/* Bottone Pagina resume */}
        <Button
          onClick={(e) => {
            e.preventDefault(), router.push('/resume')
          }}
          type="button"
          className="phone:p-3 phone:w-full justify-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              opacity: { ease: "linear" },
            },
          }}
        >
          <div className="flex gap-2 items-center ">
            <IconFileInvoice        
              size={20}
              color="black"/>
            <span className="phone:text-center hover:cursor-pointer text-base">
              Leggi curriculum
            </span>
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
