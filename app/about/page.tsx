

import { features, values } from "@/data/aboutus";
import { ArrowRightIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";


export default function About() {
    return (
        <>

            <section
                className="bg-[#0a0a0a] flex items-center">
                <div className="w-[95%] md:w-[95%] mx-auto pt-32 md:pt-48 pb-10">
                    <div className="md:flex md:space-x-10 justify-evenly items-center">
                        <div className="w-full md:w-2/5">
                            <h1 className="py-2 text-white flex space-x-2 items-center">
                                <span className="text-[#ff4533]"><UserGroupIcon className="w-6 h-6 " /></span>
                                <span>We are your family</span>
                            </h1>
                            <div className="py-4">
                                <h1
                                    style={{ lineHeight: 1.2 }}
                                    className="text-white text-3xl md:text-5xl font-bold">
                                    Mevinai can transform ideas in to realiy.
                                </h1>
                            </div>
                            <div className="py-4">
                                <Link
                                    href="https://calendly.com/mesfin-tsegaye/codewithmesfin"
                                    target='_blank'
                                    className="border border-[#ff4533] rounded-xl bg-[#ff4533] hover:bg-green-500 hover:border-green-500 text-white px-3 md:px-6 py-3"
                                >
                                    <span>Meet the team</span>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-2/5 pt-10 md:pt-1">
                            <Image src="/images/about/1.png" alt="abou1"
                                className="w-full h-full"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="w-[90%] mx-auto ">
                    <div className="py-3">
                        <h1
                            style={{ lineHeight: 1.2 }}
                            className="text-6xl text-center md:text-8xl font-extrabold bg-gradient-to-r from-green-600 to-gray-300 text-transparent bg-clip-text">
                            Who We Are
                        </h1>
                        <div className="w-full md:max-w-4xl mx-auto py-4">
                            <h1
                                style={{ lineHeight: 1.2 }}
                                className="text-white text-3xl text-center md:text-5xl font-bold">
                                We are a small team of professional engineers. We are growing.
                            </h1>
                        </div>
                    </div>
                    <div className="w-full py-16">
                        <div className="md:flex items-center md:space-x-20">
                            <div className="w-full md:w-2/5">
                                <div>
                                    <p className="text-gray-300 py-1">
                                        After a years of working in some of the highest
                                        tech industries in the world, we come to realize
                                        that our technical know-how, experience, and our
                                        African value can be put together to create technologies
                                        that will transform lives in Africa.
                                    </p>
                                    <p className="text-gray-300 py-1">
                                        As our first step in this grand journey, we are engineering the
                                        rails on which technology innovation moves because we believe a
                                        reliable, secure, and decentralized system will act as a catalyst
                                        to unlock business opportunities everywhere.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-3/5">
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10'>
                                    {
                                        features.map((item, i) => <div key={item.title}
                                            data-aos="zoom-in"
                                            data-aos-easing="linear"
                                            data-aos-duration="2000"
                                        >
                                            <div className='hover:border border-gray-400 rounded-[20px] p-8 bg-gradient-to-r from-blue-900 via-gray-600 to-gray-600 hover:from-blue-900 hover:to-green-900'>
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
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="w-[90%] md:w-[85%] mx-auto ">
                    <div className="py-3">
                        <h1 className="text-blue-600 text-center font-bold text-2xl md:text-3xl">
                            CORE VALUES
                        </h1>
                        <h1
                            style={{ lineHeight: 1.2 }}
                            className="py-4 text-4xl text-center md:text-8xl font-extrabold text-white">
                            What We Stand For
                        </h1>
                    </div>
                    <div className="w-full py-6 md:py-16">
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10'>
                            {
                                values.map((item, i) => <div key={item.title}
                                    data-aos="zoom-in"
                                    data-aos-easing="linear"
                                    data-aos-duration="2000"
                                >
                                    <div className='rounded-[20px] p-10 bg-gradient-to-r from-gray-900 via-gray-500 to-gray-600 hover:from-blue-900 hover:to-green-900'>

                                        <div className="py-2 text-center text-4xl">
                                            {item.icon}
                                        </div>
                                        <h1 className='text-gray-100 text-center text-3xl md:text-4xl'>{item.title}</h1>
                                        <p className="text-gray-300 text-center py-3">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>)
                            }
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-gray-800 py-24">
                <div className="w-[90%] md:max-w-4xl mx-auto">
                    <h1 style={{ lineHeight: 1.3 }} className='text-white text-center text-2xl md:text-4xl'>
                        Here at Conversion, we focus on returns. {"We're"} dedicated to
                        scaling your brand with paid advertising. Break free and take
                        your brand to next level.
                    </h1>
                <div className="flex justify-center py-10">
                    <Link
                        href="/services"
                        className=" flex justify-evenly items-center space-x-1 md:space-x-3 border border-blue-600 rounded-xl bg-blue-600 hover:bg-green-500 hover:border-green-500 text-white px-3 md:px-6 py-3"
                    >
                        <span>Book a 30-min call</span>
                        <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section >


        </>
    );
}