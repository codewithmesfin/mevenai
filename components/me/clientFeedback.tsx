/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function ClientFeedback() {
  return (
    <section className="bg-gray-800 rounded-xl">
    <div className="w-[90%] mx-auto py-16">
      <div
        className="py-4 md:flex md:justify-center md:items-center md:space-x-20"
      >
        <div className="w-full md:w-1/2" data-aos="fade-up"
          data-aos-duration="2000">
          <div className="flex items-center space-x-3 md:space-x-5">
            <img
              src="https://tesfacoffee.com/img/t1.5f985145.jpg"
              alt=""
              className="rounded-full w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-gray-300 text-lg">Tesfa Mergia</h2>
              <p className="text-gray-400 text-sm">
                CEO - Tesfa Coffee Trade plc
              </p>
            </div>
          </div>
          <h1
            className="py-6 font-extrabold text-white text-3xl md:text-4xl"
          >
            {'"I’ve'} never seen anything like this in my 10 years in this
            industry”
          </h1>
          <p className="text-gray-400 text-md">
            My journey is about absolute efficiency, so that you can
            represent the best version of you and your business. This is the
            glue that allows you to interface with the hotel, seating,
            guestlist, all in one place without having to hire someone just
            to do that. I was so impressed I personally invested in Meninai!
          </p>
        </div>
        <div
          className="w-full md:w-1/2 max-h-[400px] max-w-[350px] py-10 md:py-1"
        >
          <img
            data-aos="fade-up"
            data-aos-duration="600"
            src="https://tesfacoffee.com/img/t1.5f985145.jpg"
            alt="calendly"
            className="h-full w-full rounded-xl shadow"
          />
        </div>
      </div>
    </div>
  </section>
  )
}
