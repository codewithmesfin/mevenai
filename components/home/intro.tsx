/* eslint-disable @next/next/no-img-element */
import { AdjustmentsHorizontalIcon, ArrowPathIcon, ChevronRightIcon, FolderOpenIcon, PhoneIcon, RocketLaunchIcon, StarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export default function HomeIntro() {
  return (
    <section
      className="bg-white">
      <div className="w-[90%] md:w-[95%] mx-auto pt-32 md:pt-24 pb-6">

        <div className="py-10 md:pt-16 md:max-w-4xl mx-auto">
          <div className="flex justify-center items-center space-x-3">
            <div className='rounded-full bg-[#e9f4ff] text-blue-500 py-3 px-10'>
              <h1>All in one Software as a Service</h1>
            </div>
          </div>
          <div className="pt-10 pb-8">
            <h1
              style={{ lineHeight: 1.3 }}
              className={`title1 text-center font-extrabold text-4xl md:text-7xl text-[#161c52]`}>
              Configure your own <br /> <span
                className='text-5xl md:text-7xl italic1 bg-gradient-to-r from-blue-600 via-blue-600 to-green-600 inline-block text-transparent bg-clip-text font-extrabold'>
                {"ERPNext SaaS "}
              </span> in 3 minutes
            </h1>
            <div className="py-3 mx-auto md:max-w-3xl">
              <p className="py-3 text-gray-600 text-center text-lg md:text-xl">
              Discover the ultimate all-in-one solution {"you've"} been searching for! 
              <span
                className='px-1 italic1 bg-gradient-to-r from-blue-600 via-blue-600 to-green-600 inline-block text-transparent bg-clip-text font-extrabold'>
               Simple, powerful, and budget-friendly Solution
              </span> – <span className='text-blue-600 italic1 font-semibold'>ERPNext</span>. Go live today with the
              <span
                className='px-1 italic1 bg-gradient-to-r from-blue-600 via-blue-600 to-green-600 inline-block text-transparent bg-clip-text font-extrabold'>
               {"world’s"} #1 free and open-source 
              </span>enterprise software solution.
              </p>
            </div>
          </div>
          <div className="flex jusyfiy-evenly md:justify-center items-center  space-x-3 md:space-x-10">
            <Link
              href="https://calendly.com/mesfin-tsegaye/codewithmesfin"
              target='_blank'
              className="w-[90%] md:max-w-[230px] flex justify-evenly items-center space-x-1 md:space-x-3 border border-blue-500 rounded-full bg-blue-600 hover:bg-green-500 hover:border-green-500 text-white px-3 md:px-6 py-3 md:py-4"
            >
              <ArrowPathIcon path="right" className="h-5 w-5 hidden md:flex" strokeWidth={2} />
              <span>Get started for free</span>
            </Link>
            <Link
              href="https://vuzksec0s2e.typeform.com/to/I8GPTb07"
              target='_blank'
              className="w-[90%] md:max-w-[230px] md:mt-0 flex justify-evenly items-center space-x-1 md:space-x-3 rounded-full border border-gray-900 hover:border-green-500 hover:bg-green-500 text-gray-800 hover:text-white px-3 md:px-6 py-3 md:py-4"
            >
              <AdjustmentsHorizontalIcon path="right" className="h-5 w-5 hidden md:flex" strokeWidth={2} />
              <span>Explore marketplace</span>
            </Link>
          </div>
        </div>
      </div>
    </section >
  )
}
