
import { useAuth } from '@/app/context/AuthContext';
import { AdjustmentsHorizontalIcon, ArrowLeftEndOnRectangleIcon, DocumentIcon, HomeIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Sidebar() {
    const { logout: removeToken } = useAuth();
    const router = useRouter();

    const navigations = [
        {
            title: "Get started",
            items: [
                {
                    title: "Home",
                    icon: <HomeIcon className="h-4 w-4" />,
                    href: "/home",
                },
                {
                    title: "Configuration",
                    icon: <WrenchScrewdriverIcon className="h-4 w-4" />,
                    href: "/configuration",
                },
                {
                    title: "Marketplace",
                    icon: <AdjustmentsHorizontalIcon className="h-4 w-4" />,
                    href: "/products",
                },
                {
                    title: "Documentations",
                    icon: <DocumentIcon className="h-4 w-4" />,
                    href: "/docs",
                },
            ]
        },
        {
            title: "Settings",
            items: [
                {
                    title: "My Profile",
                    icon: <DocumentIcon className="h-4 w-4" />,
                    href: "/profile",
                },
                {
                    title: "Log out",
                    icon: <ArrowLeftEndOnRectangleIcon className="h-4 w-4" />,
                },
            ]
        }
    ]



    const toggleDarkMode = () => { }

    const logout = () => {
        removeToken()
        router.push('/auth/login');
    }

    return (
        <section className={`hidden md:flex bg-white flex-col flex-none overflow-auto w-[300px]  group lg:max-w-sm transition-all duration-300 ease-in-out`}>
            <div className="header p-4">
                <div
                    className="w-16 h-16 relative flex items-center flex-shrink-0"
                >
                    <Link href="/" className='flex items-center'>
                        <Image
                            className="rounded-full w-10 h-10 object-contain"
                            alt="ravisankarchinnam"
                            src="/logo.png"
                            width={50} height={50}
                        />
                        <p className="text-4xl pl-3 font-extrabold">
                            Mevinai
                        </p>
                    </Link>
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


            <div>
                {
                    navigations.map((nav: any, index) => <div key={nav.title}>
                        <div className={`active-users bg-white flex justify-between flex-row p-2 overflow-auto w-0 min-w-full`}>
                            <ul className="flex flex-col py-4 space-y-1">
                                {nav.items.map((x, i) => x.href ? (
                                    <li key={i}>
                                        <Link
                                            href={x.href}
                                            className="relative hover:text-green-600 w-full flex flex-row items-center py-2 border-l-4 border-transparent"
                                        >
                                            <span className="inline-flex justify-center items-center ml-4">
                                                {x.icon}
                                            </span>
                                            <span className="pl-4 text-sm tracking-wide truncate">
                                                {x.title}
                                            </span>
                                        </Link>
                                    </li>
                                ) : <li key={i}>
                                    <button className='relative hover:text-green-600 w-full flex flex-row items-center py-2 border-l-4 border-transparent' onClick={logout}>
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <ArrowLeftEndOnRectangleIcon className="h-4 w-4" />
                                        </span>
                                        <span className="pl-4 text-sm tracking-wide truncate">Log out</span>
                                    </button>
                                </li>)}

                            </ul>
                        </div>
                        {index == 0 && <hr />}
                    </div>)
                }
            </div>

        </section>
    )
}