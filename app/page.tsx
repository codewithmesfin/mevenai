/* eslint-disable @next/next/no-img-element */

import OnboardingSection from "@/components/onboardSection";
import TypewriterEffect from "@/components/typeWriterEffect";
import { ArrowUpRightIcon, ChevronRightIcon, Cog8ToothIcon, FolderOpenIcon, StarIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Link from "next/link";



export default function Home() {
  return (
    <div>
      <Head>
        <title>Mevinai</title>
        <meta
          name="description"
          content="Mevinai is a small team of Experienced Software Engineers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section style={{ backgroundRepeat: "round" }}
        className="md:bg-[url('/bg.png')] -mt-2 w-full bg-cover">
        <div className="w-[95%] mx-auto py-40">
          <div className="md:flex justify-between md:space-x-5">
            <div className="w-full md:w-1/2 h-full">
              <h1
                style={{ lineHeight: 1.2 }}
                className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-gray-900 to-green-600 inline-block text-transparent bg-clip-text"
              >
                Let us transform your dream into
                <span className="text-blue-600 border-b px-4">
                  realities</span>
              </h1>
              <h2 className="py-6 text-[#333333] text-lg md:text-3xl">
                Mevinai helps the world connect to opportunity and positively impact business.
              </h2>


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
                  className="mt-10 md:mt-0 flex justify-evenly items-center space-x-3 rounded-xl border border-green-600 bg-green-600 hover:bg-green-800 text-white px-6 py-3"
                >
                  <FolderOpenIcon path="right" className="h-5 w-5" strokeWidth={2} />
                  <span>Learn more</span>
                  <ChevronRightIcon path="right" className="h-4 w-4" strokeWidth={2} />
                </Link>

              </div>
            </div>
            <div className="w-full md:w-1/2  py-10 md:py-1 mb-10">
              <img
                src="/images/img1.png"
                alt=""
                className="w-full h-full rounded-xl" />
            </div>
            <div>
            </div>
          </div>
        </div>

      </section>


      <section>
        <div className="w-[90%] md:w-[80%] mx-auto py-32">
          <h1 className="text-4xl text-center">Contents ....</h1>
        </div>
      </section>



      <section>
        <div className="h-1 w-[70px] bg-gray-700 mx-auto rounded-xl" />
        <OnboardingSection />
      </section>


    </div>
  );
}
