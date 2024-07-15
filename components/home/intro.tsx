import { ChevronRightIcon, Cog8ToothIcon, FolderOpenIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TypewriterEffect from '../typeWriterEffect'

export default function HomeIntro() {
  return (
    <section
    className="bg-[#EEE3FF]">
    <div className="w-[95%] md:w-[95%] mx-auto pt-32 md:pt-24 pb-6">

      <div className="md:px-10 rounded-xl">
        <div className="md:pt-10 md:flex md:items-center md:justify-between md:space-x-10">
          <div className="w-full md:w-3/5">
            <div>

              <h1 style={{
                lineHeight: 1.2
              }} className="font-extrabold text-4xl md:text-7xl text-gray-900">
                Find friendly tech mentors for you</h1>
            </div>

            <div className="my-4 mt-6 md:max-w-[600px]">
              <h2 className="text-gray-700 text-lg md:text-2xl">
                <span className="bg-gradient-to-r from-[#f9904b] to-green-600 inline-block text-transparent bg-clip-text">
                  Mevinai
                </span>
                <span> can help you connect to opportunities and positively impact your business.</span>
              </h2>
            </div>


            <div className="my-6">
              <div className="text-xl md:text-4xl text-gray-900">
                <div className="flex space-x-2">
                  <span>In this era, every</span>
                  <div className="text-orange-600">
                    <TypewriterEffect items={[
                      'pharmacy', 'school',
                      'manufacturing', 'retailer',
                      'healthcare'

                    ]} /></div>
                </div>
                <span>requires a tech solution.</span>
              </div>
            </div>


            <div className="py-8 flex justify-between md:justify-start items-center  space-x-3 md:space-x-10">
              <Link
                href="/register"
                className=" flex justify-evenly items-center space-x-1 md:space-x-3 border border-[#0070f3] rounded-xl bg-[#0070f3] hover:bg-blue-500 hover:border-blue-500 text-white px-3 md:px-6 py-3"
              >
                <Cog8ToothIcon path="right" className="h-5 w-5 hidden md:flex" strokeWidth={2} />
                <span>Signup for free</span>
                <ChevronRightIcon path="right" className="h-4 w-4" strokeWidth={2} />
              </Link>
              <Link
                href="/about"
                className=" md:mt-0 flex justify-evenly items-center space-x-1 md:space-x-3 rounded-xl border border-gray-600 bg-gray-600 hover:bg-gray-800 text-white px-3 md:px-6 py-3"
              >
                <FolderOpenIcon path="right" className="h-5 w-5 hidden md:flex" strokeWidth={2} />
                <span>Meet the team</span>
                <ChevronRightIcon path="right" className="h-4 w-4" strokeWidth={2} />
              </Link>

            </div>
          </div>
          <div className="w-full md:w-2/5 py-10 md:py-1 mb-10">
            <Image
              src="/images/img1.png"
              alt=""
              height={400} width={400}
              className="w-full h-full rounded-xl" />
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>

  </section>
  )
}
