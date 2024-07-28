
/* eslint-disable @next/next/no-img-element */

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Mevinai - waiting list',
  description: 'Get a friendly tech mentors for you.',
};


export default function Home() {
  return (
    <>
   
      <section
        className="bg-green-100 h-screen flex items-center">
        <div className="w-[90%] mx-auto pt-32">
          <div className="">
            <div className="w-full">
              <div className="mx-auto w-32 h-32 mb-5">
                <Image
                  className="h-32 w-32 w-auto rounded-full"
                  src="/logo.png"
                  alt=""
                  height={50} width={50}
                />
              </div>
              <h1
                style={{ lineHeight: 1.2 }}
                className="text-5xl md:text-8xl font-extrabold bg-gradient-to-r from-blue-600 to-green-600 text-center text-transparent bg-clip-text"
              >
                Coming soon
              </h1>
              <h2 className="py-6 text-gray-800 text-center text-lg md:text-2xl">
                Our engineers are working hard to make <br /> this page fully functional.
                Kindly, we requested you to wait a few days.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}