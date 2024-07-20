
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import Link from 'next/link'
import React from 'react'

export default function Brand({ isScrolled }: any) {

  return (
    <Link href={"/"} className='text-lg flex items-center space-x-2 text-white font-bold'>
      <Image
        className="h-10 w-10 w-auto rounded-full"
        src="/logo.png"
        alt=""
        height={50} width={50}
      />
      <span className={`bg-gradient-to-r from-[#f9904b] to-white inline-block text-transparent bg-clip-text font-extrabold`}>
        Mevinai</span
      >
    </Link>
  )
}