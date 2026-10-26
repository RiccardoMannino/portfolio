'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { motion, useInView } from 'motion/react'
import { useEffect, useRef } from 'react'

// inserire user anche in questo type
type InfiniteMovingCardsProps = {
  items: {
    id: string
    created_at: string
    rating: number
    comment: string
    user_id: string
    // Aggiungiamo nome ed e-mail se in futuro vorrai recuperarli da Google Auth
    persona?: string
    user_email?: string
    user_avatar?: string
  }[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
  transition?: string | undefined
  transform?: string
  translate?: string
  opacity?: number
}

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
  transform = 'translateY(0)',
  translate = 'translateY(50px)',
  opacity = 1,
  transition = 'opacity 0.5s ease, transform 0.5s ease',
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.style.setProperty(
      '--animation-direction',
      direction === 'left' ? 'forwards' : 'reverse',
    )
    container.style.setProperty(
      '--animation-duration',
      speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '80s',
    )
  }, [direction, speed])

  const duplicatedItems = items.length > 1 ? [...items, ...items] : items
  const isInView = useInView(containerRef)

  const style = {
    transform: isInView ? transform : translate,
    opacity: isInView ? opacity : 0,
    transition,
  }

  return (
    <motion.div
      ref={containerRef}
      style={style}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden',
        className,
      )}
    >
      <ul
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          items.length > 1 && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {duplicatedItems.map((item, index) => (
          <li
            className={`border-foreground shadow-foreground relative w-87.5 max-w-full shrink-0 rounded-2xl border-2 px-8 py-6 shadow md:w-112.5`}
            key={`${item.id}-${index >= items.length ? 'duplicate' : 'original'}`}
            aria-hidden={index >= items.length}
          >
            <blockquote className="flex h-full flex-col justify-between">
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%+4px)] w-[calc(100%+4px)]"
              ></div>
              <span
                className={`text-foreground relative z-20 leading-[1.6] font-normal`}
              >
                {item.comment}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-foreground leading-[1.6] font-normal">
                    {item.persona}
                  </span>
                  {item.user_avatar && (
                    <Image
                      width={40}
                      height={40}
                      src={item.user_avatar}
                      alt={item.persona || 'Avatar'}
                      className="border-foreground/20 h-10 w-10 rounded-full border object-cover"
                      referrerPolicy="no-referrer" // ⚠️ Fondamentale per evitare che Google blocchi l'immagine
                    />
                  )}
                  <span className="text-foreground leading-[1.6] font-normal">
                    {item.rating}/5⭐
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
