import { useAuth } from '@/app/context/AuthContext';
import {
    AdjustmentsHorizontalIcon,
    AdjustmentsVerticalIcon,
    ArrowLeftEndOnRectangleIcon, ChartBarIcon,
    DocumentIcon, FolderIcon, HomeIcon, SparklesIcon, WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function NavigationList(){

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
                    icon: <FolderIcon className="h-4 w-4" />,
                    href: "/docs",
                },
                {
                    title: "Statistics",
                    icon: <ChartBarIcon className="h-4 w-4" />,
                    href: "/statistics",
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
                    title: "My Company",
                    icon: <AdjustmentsVerticalIcon className="h-4 w-4" />,
                    href: "/business",
                },
                {
                    title: "My SaaS",
                    icon: <SparklesIcon className="h-4 w-4" />,
                    href: "/saas",
                    openOnOtherTab:true
                },
                {
                    title: "Log Out",
                    icon: <ArrowLeftEndOnRectangleIcon className="h-4 w-4" />,
                },
            ]
        }
    ]

    const { logout: removeToken } = useAuth();
    const router = useRouter();

    const logout = () => {
        removeToken()
        router.push('/auth/login');
    }

    return  <div>
    {
        navigations.map((nav: any, index: number) => <div key={nav.title}>
            <div className={`active-users bg-white flex justify-between flex-row p-2 overflow-auto w-0 min-w-full`}>
                <ul className="flex flex-col py-4 space-y-1">
                    {nav.items.map((x: any, i: number) => x.href ? (
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
                        <button className='relative hover:text-green-600 w-full flex flex-row items-center py-2 border-l-4 border-transparent'
                            onClick={logout}>
                            <span className="inline-flex justify-center items-center ml-4">
                                <ArrowLeftEndOnRectangleIcon className="h-4 w-4" />
                            </span>
                            <span className="pl-4 text-sm tracking-wide truncate">{x.title} </span>
                        </button>
                    </li>)}

                </ul>
            </div>
            {index == 0 && <hr />}
        </div>)
    }
</div>
}