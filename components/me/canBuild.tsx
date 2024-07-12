/* eslint-disable @next/next/no-img-element */

import { ArrowRightIcon, ArrowTopRightOnSquareIcon, CheckCircleIcon, CheckIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export default function CanBuild() {
    const items = [
        {
            img: "https://cdn-icons-png.freepik.com/512/5339/5339184.png",
            title: "Web based apps",
            subtitle: "I can develop a beautifully designed, simple to use, and trending web app every end users will love.",
            href: "/frontend"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/256/1910/1910640.png",
            title: "Mobile apps",
            subtitle: "I can develop a beautifully designed, simple to use, and trending web app every end users will love.",
            href: "/frontend"
        },
        {
            img: "https://cdn-icons-png.freepik.com/512/1878/1878350.png",
            title: "Backend and APIs",
            subtitle: "I specialize in building backend systems scalable, efficient and secure",
            href: "/backend"
        },

        {
            img: "https://cdn-icons-png.freepik.com/512/6385/6385037.png",
            title: "Artificial Intelligence",
            subtitle: "I can help you develop innovative solutions with Generative AI. My machine learning background ensures efficient and adaptable systems. I can also help you building more.",
            href: "/ai"
        },
        {
            img: "https://cdn3d.iconscout.com/3d/premium/thumb/web-3-5796855-4863023.png?f=webp",
            title: "Web3.0",
            subtitle: "Are you looking to innovate with Web3.0? I'm an expert in Solidity, Ethereum, and Polygon, and I can help you develop secure and scalable blockchain systems.",
            href: "/blockchain"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/512/5129/5129557.png",
            title: "Enterprise Software",
            subtitle: "If you belive in automating your business processes, allow me to build a new ERP solution or Customize existing one.",
            href: "/erp"
        }
    ]

    const sales = [
        "Over 5 years of industry experience",
        "Best practices in place",
        'Test driven approach',
        "Mobile first design",
        "DRY principle - Don't repeat your self",
        "SOLID principles in place",
        "Security consideration",
        "Affordable price"
    ]
    return (
        <div className="md:flex items-center md:space-x-10">
            <div className="py-3 mb-24 w-full md:w-2/5">
                <h1
                    style={{ lineHeight: 1.3 }}
                    className="font-extrabold text-gray-200 text-3xl md:text-5xl bg-gradient-to-r from-blue-600 via-green-400 to-blue-600 text-transparent bg-clip-text"
                >
                    {"Let's"} build your <br /> dream project.
                </h1>
                <div className='md:ml-3 mt-5'>
                    {
                        sales.map((x, i) => <div key={i}>
                            <div className="flex items-center space-x-2 py-1">
                                <span className='text-green-600'>
                                    <CheckCircleIcon className="h-4 w-4" aria-hidden="true" />
                                </span>
                                <p className='text-gray-400'>{x}</p>
                            </div>
                        </div>)
                    }
                </div>

                <div className="flex  pt-10">

                    <Link
                        href="/login#login"
                        className="flex justify-evenly items-center space-x-3 md:w-[250px] rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 hover:from-blue-500 hover:to-green-400 md:text-lg text-white px-4 py-3"
                    >
                        <span>Hire me</span>
                        <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>
            <div className="w-full md:w-3/5">
                <div
                    className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-center"
                >
                    {
                        items.map((item) => <div v-for="item in cards" key={item.title}>
                            <Link href={item.href} data-aos='zoom-in'
                                data-aos-duration='2000'>
                                <div
                                    className="rounded-[20px] p-5 bg-gray-800 hover:bg-gray-800 hover:border hover:border-4 hover:border-gray-700"

                                >
                                    <div className='flex justify-center'>
                                        <img src={item.img} alt={item.title}
                                            className='w-24 h-24 rounded'
                                        />
                                    </div>
                                    <h1 className="py-3 text-center font-semibold text-gray-300 ">
                                        {item.title}
                                    </h1>
                                    <p className="text-gray-400 text-center text-sm">
                                        {item.subtitle}
                                    </p>
                                </div>

                            </Link>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}
