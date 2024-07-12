"use client"

import { services } from '@/data/services'
/* eslint-disable @next/next/no-img-element */
import { ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ShowMe() {
    const navigator = useRouter()
   const items=services
    return (
        <div className=" py-10">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">

                {
                    items.map((item: any, index: number) => <div v-for="item in cards" key={item.title}>
                        <div
                            data-aos={index % 2 == 0 ? 'fade-down' : 'fade-up'}
                            data-aos-duration={2000 + index * 10}
                            style={{ backgroundColor: item.bg }}
                            className="rounded-[20px] border hover:border-2 border-gray-800 hover:border-gray-600 cursor-pointer bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-500"
                            onClick={() => navigator.push(`${item.href}`)}
                        >
                            <div>
                                <div className="h-full w-full">
                                    <img src={item.banner} alt="" className="object-cover rounded-t-[20px] w-full h-full max-h-[150px]" />
                                </div>
                                <div className="p-5">
                                    <div
                                        className="flex items-center justify-between space-x-3 md:space-x-10"
                                    >
                                        <h1 className="md:text-lg py-3 font-semibold text-gray-300 ">
                                            {item.title}
                                        </h1>
                                        <span className="text-gray-300">
                                            <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                                        </span>
                                    </div>
                                    <p className="line-clamp-3 text-gray-400">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>

    )
}
