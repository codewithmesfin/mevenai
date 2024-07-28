/* eslint-disable @next/next/no-img-element */
import { ChevronRightIcon, Cog8ToothIcon, FolderOpenIcon, StarIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TypewriterEffect from '../typeWriterEffect'

export default function HomeIntro() {
  return (
    <section
      className="bg-[#0a0a0a]">
      <div className="w-[95%] md:w-[95%] mx-auto pt-32 md:pt-24 pb-6">

        <div className="py-10 md:pt-24 md:max-w-4xl mx-auto">
          <div className="flex justify-center items-center space-x-3">
            <img src="/images/img2.png" alt=""
              className='h-16 w-40'
            />
            <div className="">
              <span className='text-white flex'>
                {[1, 2, 3, 4].map(x => <StarIcon key={x} className="h-4 w-4" fill='#DDDDDD' aria-hidden="true" />)}
              </span>
              <h2 className='text-gray-500 py-1'>20+ businesses succeeded</h2>
            </div>
          </div>
          <div className="pt-16 pb-8">
            <h1
              style={{ lineHeight: 1.3 }}
              className={`title1 text-center font-extrabold text-4xl md:text-7xl text-white`}>
             Get a friendly <span
                className='italic font-extrabold text-5xl md:text-8xl italic1 bg-gradient-to-r from-[#ff4533] to-green-500 inline-block text-transparent bg-clip-text font-extrabold'>
                {"tech mentors  "}
              </span> for you
            </h1>
            <div className="py-3 mx-auto md:max-w-3xl">
              <p className="py-3 text-gray-400 text-center text-lg md:text-xl">
                If you want to achieve ground-breaking growth with increased sales and profitability with paid ads, then {"you're"} in the right place.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center  space-x-3 md:space-x-10">
            <Link
              href="/register"
              className=" flex justify-evenly items-center space-x-1 md:space-x-3 border border-[#ff4533] rounded-xl bg-[#ff4533] hover:bg-green-500 hover:border-green-500 text-white px-3 md:px-6 py-3"
            >
              <Cog8ToothIcon path="right" className="h-5 w-5 hidden md:flex" strokeWidth={2} />
              <span>Join for free</span>
              <ChevronRightIcon path="right" className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link
              href="/about"
              className=" md:mt-0 flex justify-evenly items-center space-x-1 md:space-x-3 rounded-xl border border-gray-800 bg-gray-800 hover:bg-gray-700 text-white px-3 md:px-6 py-3"
            >
              <FolderOpenIcon path="right" className="h-5 w-5 hidden md:flex" strokeWidth={2} />
              <span>Meet the team</span>
              <ChevronRightIcon path="right" className="h-4 w-4" strokeWidth={2} />
            </Link>

          </div>
        </div>
        {/* <div className="hidden md:flex -mt-16 rounded-full h-64 md:bg-[url('/images/bg1.png')]  bg-cover">
         
        </div> */}
      </div>

    </section >
  )
}
