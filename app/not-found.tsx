"use client"


import { ArrowLongRightIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Mevinai - waiting list',
  description: 'Get a friendly tech mentors for you.',
};


export default function Home() {
  return (
    <>

      <section
        className="bg-[#0a0a0a] flex items-center">
        <div className="w-[95%] md:w-[80%] mx-auto py-32 md:py-48">
          <div className="">
            <div className="w-full">
              <div className="my-3 py-2 rounded-xl border border-gray-800 mx-auto w-[90%] md:max-w-[400px]">
                <div className="px-3 flex justify-center items-center space-x-3">
                  <span className="text-gray-300">
                    <CheckBadgeIcon className="w-5 h-5" />
                  </span>
                  <h1 className="text-gray-400 text-sm md:text-lg text-center">Amazing Resources Coming Your Way!</h1>
                </div>
              </div>
              <div className="py-4">
                <h1
                  style={{ lineHeight: 1.2 }}
                  className="text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-400 to-gray-200 text-center text-transparent bg-clip-text"
                >
                  Ready to Revolutionize Your business? Join the Mevinai Waitlist Today!
                </h1>
              </div>
              <div className="w-full md:w-[80%] mx-auto">
                <h2 className="py-6 text-gray-500 text-center text-lg md:text-2xl">
                  Discover an Array of Incredible Framer Templates and Be Prepared
                  for an Exciting Wave of New Resources on the Horizon. Sign up to
                  Our Waitlist to be notified when we launch so you {"don't"} miss out
                  on stunning Framer Resources.
                </h2>
              </div>
              <div className="py-y flex justify-center">

                <Link href="https://vuzksec0s2e.typeform.com/to/I8GPTb07"
                target="_blank"
                className="w-full">
                <div className="w-full flex justify-center items-center space-x-2 md:space-x-4">
                  <div className="w-full md:max-w-[350px] border border-gray-700 bg-gray-800 text-gray-200 font-semibold px-3 py-3 rounded-xl flex justify-center items-center space-x-2">
                    <span className="text-gray-500">Your email address</span>
                  </div>
                  <div className="w-full min-w-[100px] max-w-[170px] border border-gray-800 bg-gray-800 text-gray-200 font-semibold px-3 py-3 rounded-xl flex justify-center items-center space-x-2">
                    <span>Join Waitlist</span>
                    <ArrowLongRightIcon className="w-6 h-6 hidden md:block" />
                  </div>
                </div>
                </Link>
              </div>

              <div className="mt-5 flex justify-center items-center space-x-3">
                <img src="/images/img2.png" alt=""
                  className='h-16 w-40'
                />
                <div className="">
                  <h2 className='text-gray-500 py-1'>Join 2,000+ others who signed up</h2>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}