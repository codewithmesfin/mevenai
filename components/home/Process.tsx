/* eslint-disable @next/next/no-img-element */
import {  processes } from '@/data/services'
import React from 'react'

export default function HomeProcess() {
    return (
        <div>
            <section >
                <div className="w-[90%] mx-auto">
                    <div className='py-7 md:pb-10' 
                    data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="3000" >
                        <div className="mb-5 mx-auto w-24 border border-gray-800 p-2 rounded-xl">
                            <h1 className='text-gray-200 text-center'>Process</h1>
                        </div>
                        <div className='mx-auto md:max-w-4xl'>
                            <h1
                                style={{ lineHeight: 1.3 }}
                                className="font-semibold text-center text-4xl md:text-6xl text-white"
                            >
                                Our simple 3-step process to <span className='italic1 text-5xl md:text-7xl'>skyrocket</span> your business.
                            </h1>
                        </div>
                        <div className="pt-6 mx-auto md:max-w-[600px]">
                            <p className='text-gray-400 text-lg md:text-xl text-center'>
                                From Google ads, to Meta ads, to TikTok ads, and even content
                                creation, {"we've"} got you covered on everything front.
                            </p>
                        </div>
                    </div>
                    <div className="md:py-16 mx-auto md:max-w-5xl">
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-24'>
                            {
                                processes.map((item, i) => <div key={item.title} >
                                    <div className="pb-5 flex justify-center">
                                       <h1 className='text-6xl'>{item.icon} </h1>
                                    </div>
                                    <div className=''>
                                        <h1 className='text-white text-center text-xl md:text-3xl'>{item.title}</h1>
                                        <p className="text-gray-400 text-center py-3">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
