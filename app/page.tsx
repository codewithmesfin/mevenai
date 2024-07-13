/* eslint-disable @next/next/no-img-element */

import OnboardingSection from "@/components/onboardSection";
import TypewriterEffect from "@/components/typeWriterEffect";
import { ChevronRightIcon, Cog8ToothIcon, FolderOpenIcon } from "@heroicons/react/24/outline";
import Link from "next/link";



export default function Home() {
  return (
    <div>
      <section
        className="bg-green-600">
        <div className="w-[95%] md:w-[95%] mx-auto pt-32 md:pt-24 pb-6">

          <div className="md:px-10 rounded-xl">
            <div className="md:pt-10 md:flex md:items-center md:justify-between md:space-x-10">
              <div className="w-full md:w-3/5">
                <div>
                  <h1 style={{
                    lineHeight: 1.2
                  }} className="font-extrabold text-4xl md:text-7xl text-white">
                    Find friendly tech mentors for you</h1>
                </div>

                <div className="my-4 mt-6 md:max-w-[600px]">
                  <h2 className="text-gray-100 text-lg md:text-2xl">
                    <span className="bg-gradient-to-r from-[#f9904b] to-gray-100 inline-block text-transparent bg-clip-text">
                      Mevinai
                    </span>
                    <span> can help you connect to opportunities and positively impact your business.</span>
                  </h2>
                </div>


                <div className="my-6">
                  <div className="text-xl md:text-4xl text-gray-200">
                    <div className="flex space-x-2">
                      <span>Now a day every</span>
                      <div className="text-gray-800">
                        <TypewriterEffect items={[
                          'pharmacy', 'school',
                          'manufacturing', 'retail',
                          'healthcare'

                        ]} /></div>
                    </div>
                    <span>requires tech solutions</span>
                  </div>
                </div>


                <div className="py-8 md:flex md:items-center md:space-x-5 md:space-x-10">
                  <Link
                    href="/register"
                    className=" flex justify-evenly items-center space-x-3 border border-blue-600 rounded-xl bg-blue-600 hover:bg-blue-800 text-white px-6 py-3"
                  >
                    <Cog8ToothIcon path="right" className="h-5 w-5" strokeWidth={2} />
                    <span>Signup for free</span>
                    <ChevronRightIcon path="right" className="h-4 w-4" strokeWidth={2} />
                  </Link>
                  <Link
                    href="/about"
                    className="mt-10 md:mt-0 flex justify-evenly items-center space-x-3 rounded-xl border border-gray-600 bg-gray-600 hover:bg-gray-800 text-white px-6 py-3"
                  >
                    <FolderOpenIcon path="right" className="h-5 w-5" strokeWidth={2} />
                    <span>Meet the team</span>
                    <ChevronRightIcon path="right" className="h-4 w-4" strokeWidth={2} />
                  </Link>

                </div>
              </div>
              <div className="w-full md:w-2/5 py-10 md:py-1 mb-10">
                <img
                  src="/images/img1.png"
                  alt=""
                  className="w-full h-full rounded-xl" />
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>

      </section>


      <section>
        <div className="w-[90%] md:w-[80%] mx-auto py-16">
          <h1 style={{
            lineHeight: 1.3
          }} className="text-4xl md:text-7xl font-bold text-center">
            Helping businesses and individuals to
            find the best fitting software.
          </h1>
          <div className="py-10">
            {/* asdfgh */}
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
