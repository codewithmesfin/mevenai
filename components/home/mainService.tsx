import { services } from '@/data/services'
import { AdjustmentsHorizontalIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export default function HomeMainService() {
    return (
        <section className="bg-gray-50">
            <div className="w-[95%] md:w-[90%] mx-auto py-16">
                <h1
                    style={{ lineHeight: 1.3 }}
                    className="font-semibold text-center text-5xl md:text-7xl"
                >
                    Let us make your <br />
                    business a
                    <span
                        className="border-b-4 text-[#007aff] border-gray-200 pb-2 font-extrabold"
                    > different!</span
                    >
                </h1>
                <div className="py-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                        {
                            services.map((item: any, i: number) => <div key={item.title} className="cursor-pointer">
                                <div className="border border-gray-100 bg-white hover:bg-green-100 rounded-xl h-full">
                                    <img src={item.img} alt=""
                                        className="w-full h-full object-cover rounded-t-xl max-h-[200px]"
                                    />
                                    <div className="p-5">
                                        <h1 className="text-lg md:text-2xl font-semibold  bg-gradient-to-r from-green-600 to-blue-600  inline-block text-transparent bg-clip-text font-extrabold">{item.title}</h1>
                                        <p className="pt-3 text-[#5f6368]">
                                            Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                                        </p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className="py-4 pb-16 flex justify-center">
                    <Link
                        href="/services"
                        className=" flex justify-evenly items-center space-x-1 md:space-x-3 border border-[#0070f3] rounded-xl bg-[#0070f3] hover:bg-blue-500 hover:border-blue-500 text-white px-3 md:px-6 py-3"
                    >
                        <AdjustmentsHorizontalIcon path="right" className="h-5 w-5 hidden md:flex" strokeWidth={2} />
                        <span>See all services</span>
                        <ChevronRightIcon path="right" className="h-4 w-4" strokeWidth={2} />
                    </Link>
                </div>
            </div>
        </section>
    )
}
