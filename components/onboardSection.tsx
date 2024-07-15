/* eslint-disable @next/next/no-img-element */
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export default function OnboardingSection() {
  return (
    <div className="w-[90%] mx-auto py-16">
      <div className="py-4 md:flex md:justify-center md:items-center md:space-x-10">
        <div 
        data-aos="fade-up"
                data-aos-duration="2000"
                 className="w-full md:w-1/3 h-full py-10 md:py-1">
          <img
            src="https://img.freepik.com/free-vector/racism-illustration-concept_52683-41365.jpg?t=st=1717566507~exp=1717570107~hmac=68521175ea6d72d0447c342333f5814202f5fb8ded127bfbca2013508a05c875&w=1800"
            alt="calendly"
            className="h-full w-full rounded-xl border"
          />
        </div>
        <div data-aos="fade-down"
                data-aos-duration="1000" className="w-full md:w-1/3 h-full">
          <h1 className="text-5xl md:text-6xl text-white font-bold text-center">
            Don’t be late
          </h1>
          <p className="py-4 text-center text-gray-500 text-sm md:text-md">
            Ready to meet with Mevinai team? Click the button below to access
            {" Mevinai's"} Calendly and choose a time that works best for you. Once
            {"you've"} selected a date and time, {"you'll"} be all set for your meeting.
          </p>
          <div className="md:flex md:justify-center">
            <Link
              href="https://calendly.com/mesfin-tsegaye/bizenforce"
              rel="noopener noreferrer"
              target="_blank"
              className="py-3 px-3 bg-[#007aff] text-white rounded-md hover:bg-blue-600 flex justify-center items-center space-x-2"
            >
              <span>Get started today</span>
              <ChevronRightIcon className='w-4 h-4'  />
            </Link>
          </div>
        </div>
        <div data-aos="fade-up"
                data-aos-duration="2000" className="w-full md:w-1/3 h-full py-10 md:py-1">
          <img
            src="https://img.freepik.com/free-vector/pitch-meeting-concept-illustration_114360-6000.jpg?t=st=1717566687~exp=1717570287~hmac=0f8408f0ed3d46d6714992333dc81fe4616775cc6877f8a42678c26737b21a28&w=1800"
            alt="calendly"
            className="h-full w-full rounded-xl border"
          />
        </div>
      </div>
    </div>
  
  )
}
