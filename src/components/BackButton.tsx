'use client'
import React, { useState } from 'react'
import { IconArrowNarrowLeft } from '@tabler/icons-react'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const [hover, setHover] = useState(false)
  const router = useRouter()
  return (
    <div
      onClick={(e) => {
        e.preventDefault(), router.back()
      }}
      className="flex items-center gap-2 hover:cursor-pointer"
    >
      <Button
        type="button"
        className="phone:p-0 p-0 hover:cursor-pointer"
     
      >
        <IconArrowNarrowLeft size={30} color="white" />
      </Button>
      <span
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(!hover)}
        className="text-lg font-semibold "
      >
        Torna indietro
      </span>
    </div>
  )
}
