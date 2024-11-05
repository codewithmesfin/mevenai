/* eslint-disable @next/next/no-img-element */
"use client"

import { ArrowRightIcon, ChevronRightIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ProductCard({ item, index }: any) {
  const navigator = useRouter()
  return (
    <div
      // data-aos={index % 2 == 0 ? 'fade-down' : 'fade-up'}
      // data-aos-duration={2000 + index * 10}
      style={{ backgroundColor: item.bg }}
      className="border relative border-gray-100 cursor-pointer h-full rounded-xl hover:border-4"
    >
      <div>
        <div>
          <div className={`${item.free ? 'bg-gradient-to-r from-blue-400  to-green-400' : 'bg-gradient-to-r from-blue-400 to-red-400'} text-sm text-white rounded-tr-xl rounded-bl-lg absolute flex justify-center items-center w-16 h-10 right-0 p-4`}>
            {item.free ? 'FREE' : "PRO"}
          </div>
          <div className="h-full md:h-[300px] w-full">
            <img src={item.image} alt="" className="object-cover rounded-t-xl w-full h-full" />
          </div>
        </div>
        <div className="p-5">
          <h1 className="text-lg md:text-xl py-2 text-gray-900 font-bold">
            {item.title}
          </h1>
          <p className="line-clamp-3 text-[#333333]">
            {item.subtitle}
          </p>
          <div className="py-3">
            <Link href={`${item.href}`}
              target='_blank'
              className="text-blue-600 flex items-center space-x-4"
            >
              <span>Learn more</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-5">
            <div className="w-full">
              <button
                className="rounded-full text-sm md:text-lg text-white flex items-center justify-evenly space-x-2 bg-gray-900 py-3 px-3"
              >
                <span>Install module</span>
                <ChevronRightIcon className="w-4 h-4 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}