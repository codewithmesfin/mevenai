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
                <h1
                    style={{ lineHeight: 1.3 }}
                    className="font-semibold text-center text-4xl md:text-7xl text-white"
                >
                    Our <span className='italic1 text-5xl md:text-7xl'> experts</span> can
                    <br />
                    <span className='italic1 text-5xl md:text-7xl'> proudly</span> help you with:
                </h1>
                <div className="py-10 md:py-24 md:pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                        {
                            services.map((item: any, i: number) => <div
                                data-aos={i % 2 == 0 ? 'fade-up' : 'fade-down'}
                                data-aos-easing="linear"
                                data-aos-duration="3000"
                                key={item.title} className="cursor-pointer">
                                <div className="border border-gray-800 bg-gray-900 hover:bg-gray-700 rounded-xl h-full">
                                    <img src={item.img} alt=""
                                        className="w-full h-full object-cover rounded-t-xl max-h-[200px]"
                                    />
                                    <div className="p-5">
                                        <h1 className="text-lg md:text-2xl font-semibold  bg-gradient-to-r from-green-600 to-blue-600  inline-block text-transparent bg-clip-text font-extrabold">{item.title}</h1>
                                        <p className="pt-3 text-gray-300">
                                            Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
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
