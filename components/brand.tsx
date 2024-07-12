
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Brand() {

    return (
        <Link href="/"
            className='flex items-center space-x-2 text-white'
        >
            <span className={`bg-gradient-to-r from-[#007aff] to-green-600 inline-block rounded-xl p-1`}>
                <CodeBracketIcon className="h-8 w-8" aria-hidden="true" />
            </span>
            <span className={`text-xl leading-6 bg-gradient-to-r from-[#007aff] to-green-600 inline-block text-transparent bg-clip-text font-extrabold`}>
                Code with Mesfin
            </span>

        </Link>
    )
}