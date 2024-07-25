/* eslint-disable @next/next/no-img-element */

import { teams } from '@/data/services'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export default function OnboardSection() {
  return (
    <div>
      <section className='py-10'>
        <div className="w-[90%] md:w-[80%] mx-auto">
          <div className='py-7 md:pb-10' data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="3000" >
            <div className="mb-5 mx-auto w-24 border border-gray-800 p-2 rounded-xl">
              <h1 className='text-gray-200 text-center'>Team</h1>
            </div>
            <div className='mx-auto md:max-w-4xl'>
              <h1
                style={{ lineHeight: 1.3 }}
                className="font-semibold text-center text-4xl md:text-6xl text-white"
              >
                Meet the <span className='italic1 text-5xl md:text-7xl'>incredible</span> team.
              </h1>
            </div>
            <div className="pt-4 mx-auto md:max-w-[600px]">
              <p className='text-gray-400 text-lg md:text-xl text-center'>
                We pride ourselves of being the best of the best and our
                team encapsulates that.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              href="/services"
              className=" flex justify-evenly items-center space-x-1 md:space-x-3 border border-[#ff4533] rounded-xl bg-[#ff4533] hover:bg-green-500 hover:border-green-500 text-white px-3 md:px-6 py-3"
            >
              <span>Book a 30-min call</span>
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10'>
            {
              teams.map((item, i) => <div key={item.title}>
                <div className='h-full md:max-h-[450px] border border-gray-800 cursor-pointer rounded-[30px] bg-gradient-to-r from-gray-900 via-gray-500 to-gray-600 hover:from-blue-900 hover:to-green-900'>

                  <div className="relative max-w-xl mx-auto h-full">
                    <img
                      className="h-full  brightness-50 w-full object-cover rounded-[30px]"
                      src={item.img}
                      alt="Random image"
                    />
                    <div className="absolute inset-0 flex items-end bottom-5 justify-center">
                      <div>
                        <h1 className='text-gray-100 text-center text-xl md:text-2xl'>{item.title} </h1>
                        <p className="text-gray-300 text-center py-1">{item.position} </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>)
            }
          </div>
        </div>
      </section>
    </div>
  )
}
