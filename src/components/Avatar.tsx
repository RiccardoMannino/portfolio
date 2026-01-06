import Image from 'next/image'
import profilePic from '../assets/logo.png'

export default function Avatar() {
  return (
    <div className="phone:hidden mt-1 flex space-x-2">
      <Image
        src={profilePic}
        width={150}
        height={150}
        className="w-full rounded-full"
        alt="Riccardo Mannino Logo"
        priority={true}
      />
    </div>
  )
}
