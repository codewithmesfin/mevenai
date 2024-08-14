/* eslint-disable @next/next/no-img-element */
import { services } from '@/data/services'
import React from 'react'

export default function HomeMainService() {
    return (
        <section className="bg-[#0a0a0a]">
            <div className="w-[95%] md:w-[90%] mx-auto pb-16">
                <div className="mb-5 mx-auto w-32 border border-gray-800 p-2 rounded-xl">
                    <h1 className='text-gray-200 text-center'>Technologies</h1>
                </div>
                <h1 className="font-semibold text-center text-4xl md:text-7xl text-white py-1">
                    Our <span className='italic1 text-4xl md:text-8xl'> experts</span> can
                    <br />
                    <span className='italic1 text-4xl md:text-8xl py-1'> proudly</span> help you with:
                </h1>
                <div className="py-10 md:py-24 md:pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                        {
                            services.map((item: any, i: number) => <div
                                data-aos="zoom-in"
                                data-aos-easing="linear"
                                data-aos-duration="2000"
                                key={item.title} className="cursor-pointer">
                                <div
                                    className='rounded-[20px] bg-gradient-to-r from-gray-900 to-gray-800 hover:from-blue-900 hover:to-green-900'
                                >
                                    <div className="p-8">
                                    <h1 className='text-4xl'>{item.icon} </h1>
                                        <h1 className="py-2 text-lg md:text-2xl font-semibold bg-gradient-to-r from-[#f9904b] to-white inline-block text-transparent bg-clip-text font-extrabold">
                                            {item.title}
                                        </h1>
                                        <p className="text-gray-200">
                                           {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}
