import { cards } from '@/data/services'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export default function HomeHighlight() {
  return (
    <section className="bg-gray-50">
    <div className="w-[90%] mx-auto py-16">
      <div className="md:flex items-center md:space-x-10">
        <div className="w-full md:w-2/5 pb-10 md:pb-1">
          <h1
            style={{ lineHeight: 1.3 }}
            className="font-extrabold text-4xl md:text-5xl"
          >
            {"We're"} helping <br />
            <span
              className="bg-gradient-to-r from-[#007aff] to-green-600 inline-block text-transparent bg-clip-text"
            >
              Individuals
            </span> and
            <br />
            <span
              className="bg-gradient-to-r from-green-600 to-[#007aff] inline-block text-transparent bg-clip-text"
            >
              Businesses
            </span>
          </h1>
        </div>
        <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
          {cards.map((item: any) => (
            <Link key={item.title} href={"item.href"}>
              <div
                className="rounded-[20px] bg-white p-5 border hover:border-4 hover:border-green-50 cursor-pointer bg-gradient-to-r hover:from-green-200 hover:to-green-100"
              >
                <div className="flex items-center justify-between space-x-3 md:space-x-10">
                  <h1 className="text-xl py-3 font-semibold text-gray-900">
                    {item.title}
                  </h1>
                  <span>
                    <ArrowTopRightOnSquareIcon path="right" className="h-4 w-4" strokeWidth={2} />
                  </span>
                </div>
                <p className="text-[#333333]">
                  {item.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}
