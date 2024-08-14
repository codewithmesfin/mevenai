import { helps } from '@/data/services'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export default function HomeHelps() {
    return (
        <div>
            <section className='md:py-24'>
                <div className="w-[90%] mx-auto">
                    <div className='pt-16 py-7 md:pb-10' data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="3000" >
                            <div className="mb-5 mx-auto w-24 border border-gray-800 p-2 rounded-xl">
                                <h1 className='text-gray-200 text-center'>Services</h1>
                            </div>
                        <h1
                            style={{ lineHeight: 1.3 }}
                            className="font-semibold text-center text-5xl md:text-7xl text-white"
                        >
                            How can we help you?
                        </h1>
                        <div className="pt-4 mx-auto md:max-w-[600px]">
                            <p className='text-gray-400 text-lg md:text-xl text-center'>
                                From Google ads, to Meta ads, to TikTok ads, and even content creation,
                                {"we've"} got you covered on everything front.
                            </p>
                        </div>
                    </div>
                    <div className="md:py-10">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10'>
                            {
                                helps.map((item, i) => <div key={item.title}
                                    data-aos="zoom-in"
                                    data-aos-easing="linear"
                                    data-aos-duration="2000"
                                >
                                    <div className='hover:p-12 rounded-[40px] p-10 bg-gradient-to-r from-gray-900 via-gray-500 to-gray-600 hover:from-blue-900 hover:to-green-900'>
                                        <h1 className='text-gray-100 text-center text-4xl md:text-5xl'>{item.title}</h1>
                                        <p className="text-gray-300 text-center py-3">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="3000">
                    <div className="pt-32 mx-auto w-[90%] md:max-w-5xl" >
                        <h1 style={{ lineHeight: 1.3 }} 
                        className='text-white text-center text-2xl md:text-4xl'>
                            Here at Conversion, we focus on returns. {"We're"} dedicated to
                            scaling your brand with paid advertising. Break free and take
                            your brand to next level.
                        </h1>
                    </div>
                    <div className="py-10 pb-16 flex justify-center">
                        <Link
                            href="/services"
                            className=" flex justify-evenly items-center space-x-1 md:space-x-3 border border-[#ff4533] rounded-xl bg-[#ff4533] hover:bg-green-500 hover:border-green-500 text-white px-3 md:px-6 py-3"
                        >
                            <span>Book a 30-min call</span>
                            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
