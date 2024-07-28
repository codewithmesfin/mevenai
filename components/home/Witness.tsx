/* eslint-disable @next/next/no-img-element */

import { teams, witnesses } from '@/data/services'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export default function HomeWitness() {
    return (
        <div data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="2000">
            <section className='py-10'>
                <div className="w-[90%] md:w-[90%] mx-auto">
                    <div className='py-7 md:pb-10' data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="3000" >
                        <div className="mb-5 mx-auto w-24 border border-gray-800 p-2 rounded-xl">
                            <h1 className='text-gray-200 text-center'>Results</h1>
                        </div>
                        <div className='mx-auto md:max-w-4xl'>
                            <h1
                                style={{ lineHeight: 1.3 }}
                                className="font-semibold text-center text-4xl md:text-6xl text-white"
                            >
                                Results speak for
                                <span className='italic1 text-5xl md:text-7xl'> themselves</span>.
                            </h1>
                        </div>
                        <div className="pt-4 mx-auto md:max-w-[600px]">
                            <p className='text-gray-400 text-lg md:text-xl text-center'>
                                {"We've"} worked across a number of industries and have achieved
                                some incredible results with some incredible people and brands.
                            </p>
                        </div>
                    </div>


                    <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10'>
                        {
                            witnesses.map((item, i) => <div key={item.title}>
                                <div className='h-full md:max-h-[450px] border border-gray-900 cursor-pointer rounded-[30px] bg-gradient-to-r from-gray-900 via-gray-500 to-gray-600 hover:from-blue-900 hover:to-green-900'>

                                    <div className="relative max-w-xl mx-auto h-full">
                                        <img
                                            className="h-full brightness-100 w-full object-cover rounded-[30px]"
                                            src={item.img}
                                            alt="Random image"
                                        />
                                        <div className="absolute inset-0 flex items-end bottom-5 justify-center">
                                            <div>
                                                <h1 className='text-gray-100 text-center text-xl md:text-2xl'>{item.title} </h1>
                                                <p className="text-gray-400 text-center py-1">{item.subtitle} </p>
                                                <div className="py-3 flex items-center space-x-3">
                                                    {item.results.map((result) => <div key={result}
                                                        className='border border-gray-500 rounded-xl'
                                                    >
                                                        <p className='px-2 md:px-0 text-gray-100 px-3 py-2 text-sm'>{result}</p>
                                                    </div>)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
