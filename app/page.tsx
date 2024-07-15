/* eslint-disable @next/next/no-img-element */

import OnboardingSection from "@/components/onboardSection";
import TypewriterEffect from "@/components/typeWriterEffect";
import { cards, services } from "@/data/services";
import { ArrowTopRightOnSquareIcon, ChevronRightIcon, Cog8ToothIcon, FolderOpenIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <div>
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


                <div className="py-8 flex justify-between md:justify-start items-center  space-x-5 md:space-x-10">
                  <Link
                    href="/register"
                    className=" flex justify-evenly items-center space-x-3 border border-[#0070f3] rounded-xl bg-[#0070f3] hover:bg-blue-500 hover:border-blue-500 text-white px-3 md:px-6 py-3"
                  >
                    <Cog8ToothIcon path="right" className="h-5 w-5 hidden md:flex" strokeWidth={2} />
                    <span>Signup for free</span>
                    <ChevronRightIcon path="right" className="h-4 w-4 hidden sm:flex" strokeWidth={2} />
                  </Link>
                  <Link
                    href="/about"
                    className=" md:mt-0 flex justify-evenly items-center space-x-3 rounded-xl border border-gray-600 bg-gray-600 hover:bg-gray-800 text-white px-3 md:px-6 py-3"
                  >
                    <FolderOpenIcon path="right" className="h-5 w-5 hidden md:flex" strokeWidth={2} />
                    <span>Meet the team</span>
                    <ChevronRightIcon path="right" className="h-4 w-4 hidden sm:flex" strokeWidth={2} />
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


      <section>
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
                    className="rounded-[20px] p-5 border hover:border-4 hover:border-green-50 cursor-pointer bg-gradient-to-r hover:from-green-200 hover:to-green-100"
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


      <section className="bg-white">
        <div className="w-[95%] md:w-[90%] mx-auto py-16">
        <h1
                style={{lineHeight:1.3}}
                className="font-semibold text-center text-5xl md:text-7xl"
              >
                We make your <br />
                business a
                <span
                  className="border-b-4 text-[#007aff] border-gray-200 pb-2 font-extrabold"
                  > different!</span
                >
              </h1>
          <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              {
                services.map((item: any, i: number) => <div key={item.title}>
                  <div className="border border-gray-100 p-5">
                   Service {i+1}
                  </div>
                </div>)
              }
            </div>
          </div>
        </div>
      </section>



      <section>
        <div className="h-1 w-[70px] bg-gray-700 mx-auto rounded-xl" />
        <OnboardingSection />
      </section>


    </div>
  );
}
