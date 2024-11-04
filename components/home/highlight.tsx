/* eslint-disable @next/next/no-img-element */
import { cards } from '@/data/services'

import React from 'react'

export default function HomeHighlight() {
  return (
    <section className="bg-green-50">
      <div className="w-[90%] mx-auto md:py-16" 
      >
        <div>
          <h1 className='py-10 md:py-3 text-center md:text-xl text-gray-900'>{"You're"} in good hands:</h1>
        </div>
        <div className="w-full md:w-[90%] mx-auto">
        <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
          {
            cards.map((item, i) => <div key={item.title} 
            className='flex md:inline space-x-3 md:space-x-0' 
            >
              <div className="mx-auto my-2 flex justify-center">
                <h1 className='text-5xl md:text-7xl font-extrabold'>{item.icon} </h1>
              </div>
              <div className='w-full'>
                <h1 className='text-gray-900 text-lg md:text-xl font-semibold md:text-center'>{item.title} </h1>
                <p className="text-gray-700 py-1 md:text-center">
                  {item.subtitle}
                </p>
              </div>
            </div>)
          }
        </div>
        </div>
      </div>
    </section>
  )
}
