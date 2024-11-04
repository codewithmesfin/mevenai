
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import Link from 'next/link'
import React from 'react'

export default function Brand({ isScrolled }: any) {

  return (
    <Link href={"/"} className='flex items-center space-x-2 text-white font-bold'>
      <Image
        className="h-10 w-10 w-auto rounded-full"
        src="/logo.png"
        alt=""
        height={50} width={50}
      />
      <span className={`md:text-xl bg-gradient-to-r from-gray-600 to-gray-900 inline-block text-transparent bg-clip-text font-extrabold`}>
        Mevinai</span
      >
    </Link>
  )
}