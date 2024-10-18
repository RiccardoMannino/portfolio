import Image from 'next/image'
import React from 'react'
import profilePic from '../assets/Me.jpg'

export default function Avatar({ hover }: { hover: boolean }) {
  return (
    <div className="mt-1 flex space-x-2">
      <div className="w-fit">
        <Image
          src={profilePic}
          alt="Riccardo Mannino"
          width={40}
          height={40}
          className="rounded-[50%]"
          priority={true}
        />
      </div>

      <div
        className={`transition-all duration-200 max-[500px]:hidden sm:flex ${
          hover ? 'w-auto opacity-100' : ''
        } flex flex-col text-sm max-[500px]:inline sm:inline`}
      >
        <p className="font-bold">Riccardo Mannino</p>
        <p className="font-thin">Jr Frontend Developer</p>
      </div>
    </div>
  )
}
