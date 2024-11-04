import { helps } from '@/data/services'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export default function HomeHelps() {
    return (
        <div>
            <section className='bg-white'>
                <div className="w-[90%] mx-auto">
                    <div className='pt-16 py-7 md:pb-10' data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1000" >
                        <div className="mb-5 mx-auto w-24 border border-gray-200 bg-gray-100 p-2 rounded-xl">
                            <h1 className='text-gray-900 text-center'>Feature</h1>
                        </div>
                        <h1
                            style={{ lineHeight: 1.3 }}
                            className="font-semibold text-center text-5xl md:text-7xl text-gray-900"
                        >
                            How can we help you?
                        </h1>
                        <div className="pt-4 mx-auto md:max-w-[600px]">
                            <p className='text-gray-600 text-lg md:text-xl text-center'>
                                From Google ads, to Meta ads, to TikTok ads, and even content creation,
                                {"we've"} got you covered on everything front.
                            </p>
                        </div>
                    </div>
                    <div className="md:py-10">
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10'>
                            {
                                helps.map((item, i) => <div key={item.title}

                                    className=" h-full"
                                >
                                    <div className="h-full rounded-[40px] p-10 bg-gradient-to-r from-green-100 via-white to-blue-100 ">
                                        <h1 className="text-2xl md:text-3xl italic1 bg-gradient-to-r from-blue-600 via-blue-600 to-green-600 text-center text-transparent bg-clip-text font-extrabold">
                                            {item.title}
                                        </h1>
                                        <p className="text-gray-800 text-center text-lg py-3">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div className="pt-32 mx-auto w-[90%] md:max-w-5xl" >
                        <h1 style={{ lineHeight: 1.3 }}
                            className='text-gray-600 text-center text-2xl md:text-4xl'>
                            Here at Conversion, we focus on returns. {"We're"} dedicated to
                            scaling your brand with paid advertising. Break free and take
                            your brand to next level.
                        </h1>
                    </div>
                    <div className="py-10 pb-16 flex justify-center">
                        <Link
                            href="/services"
                            className="md:text-lg flex justify-evenly items-center space-x-1 md:space-x-3 border border-blue-600 rounded-full bg-blue-600 hover:bg-green-500 hover:border-green-500 text-white px-3 md:px-6 py-3"
                        >
                            <span>Get started for free</span>
                            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
