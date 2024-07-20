/* eslint-disable @next/next/no-img-element */
import { cards } from '@/data/services'

import React from 'react'

export default function HomeHighlight() {
  return (
    <section className="bg-[#0a0a0a]">
      <div className="w-[90%] mx-auto" data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="3000">
        <div>
          <h1 className='py-10 md:pt-2 text-center text-gray-400'>{"You're"} in good hands:</h1>
        </div>
        <div className="py-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
          {
            cards.map((item, i) => <div key={item.title}  
            >
              <div className="py-4 flex justify-center">
                <img src={item.img} alt=""
                  className='rounded-xl h-10 w-10'
                />
              </div>
              <div>
                <h1 className='text-gray-200 text-lg md:text-lg text-center'>{item.title} </h1>
                <p className="text-gray-400 py-1 text-center">
                  {item.subtitle}
                </p>
              </div>
            </div>)
          }
        </div>
      </div>
    </section>
  )
}
