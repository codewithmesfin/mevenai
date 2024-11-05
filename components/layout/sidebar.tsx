
import { useAuth } from '@/app/context/AuthContext';

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import NavigationList from './navigationList';
import Brand from '../brand';

export default function Sidebar() {




    return (
        <section className={`hidden md:flex bg-white flex-col flex-none overflow-auto w-[300px]  group lg:max-w-sm transition-all duration-300 ease-in-out`}>
            <div className="header p-4">
                <div
                    className="w-16 h-16 relative flex items-center flex-shrink-0"
                >
                   <Brand/>
                </div>
            </div>

            <div className="search-box p-4 flex-none">
                <form onSubmit={() => { }}>
                    <div className="relative">
                        <label>
                            <input
                                className={`rounded-full py-2 pr-6 pl-10 w-full border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none text-gray-600 focus:shadow-md transition duration-300 ease-in`}
                                type="text"
                                defaultValue=""
                                placeholder="Search from Mevinai"
                            />
                            <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                                <svg viewBox="0 0 24 24" className="w-6 h-6">
                                    <path
                                        fill="#bbb"
                                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                                    />
                                </svg>
                            </span>
                        </label>
                    </div>
                </form>
            </div>

            <NavigationList />


        </section>
    )
}