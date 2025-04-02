import Image from 'next/image'
import React from 'react'
import profilePic from '../assets/Me.jpg'

export default function Avatar() {
  return (
    <div className="phone:hidden mt-1 flex space-x-2">
      <div className="w-fit">
        <Image
          src={profilePic}
          alt="Riccardo Mannino"
          width={50}
          height={50}
          className="rounded-full"
          priority={true}
        />
      </div>

      <div className="flex flex-col text-sm transition-all duration-200">
        <p className="font-bold">Riccardo Mannino</p>
        <p className="font-thin">Jr Frontend Developer</p>
      </div>
    </div>
  )
}
