// app//page.js

import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { getMeta } from '../lib/seo';

export const metadata = getMeta({
    title: 'Welcome to Our Site',
    description: 'Explore our services and join today!',
});


export default function Configuration() {
    const options = [
        {
            heading: "SaaS setup",
            title: "Setup your own SaaS",
            subtitle: "Establish a dynamic, scalable Software as a Service platform tailored to meet your unique business needs. Dive into the setup process with ease, configure essential tools, and prepare to deliver a seamless experience to your users right from day one.",
            button: <button
                className="md:text-lg flex justify-evenly items-center space-x-1 md:space-x-3 border border-blue-600 rounded-xl bg-blue-600 hover:bg-green-500 hover:border-green-500 text-white px-3 md:px-6 py-2"
            >
                <ArrowPathIcon className="h-5 w-5" aria-hidden="true" />
                <span>Configure your SaaS</span>
            </button>
        },
        {
            heading: "Site Creation",
            title: "Create your Frappe Site",
            subtitle: "Kickstart your journey by building a powerful, scalable Software as a Service (SaaS) platform. Streamline processes, deliver value to users, and take advantage of cloud-based solutions tailored to your vision.",
            status: "active",
            button: <button
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">
                Get started
                <svg className="w-3 h-3 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10">
                    <path stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </button>
        },
        {
            heading: "Nginx setup",
            title: "Setup NGINX Configuration",
            subtitle: "Optimize your web server’s performance and security by configuring NGINX. Tailor settings to your needs, manage traffic efficiently, and set up robust load balancing to handle high demand effortlessly.",
            status: "active",
            button: <button
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                Configure
                <svg className="w-3 h-3 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10">
                    <path stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </button>
        },
        {
            heading: "Secure the system",
            title: "Install SSL Certificate",
            subtitle: "Enhance the security of your platform with SSL encryption, providing your users with a trusted, secure experience. Safeguard sensitive data and boost credibility by ensuring a fully encrypted connection.",
            status: "active",
            button: <button
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                Install
                <svg className="w-3 h-3 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10">
                    <path stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </button>
        },
        {
            heading: "Marketplace",
            title: "Install Frappe and ERPNext Apps",
            subtitle: "Unlock powerful tools for your business with Frappe and ERPNext. From accounting to CRM, these apps provide a comprehensive, customizable suite to streamline operations and drive growth.",
            status: "active",
            button: <button
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                Browse marketplace
                <svg className="w-3 h-3 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10">
                    <path stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </button>
        }
    ]

    return (
        <div className="bg-white w-full">
            <div className='bg-white h-full w-[90%] md:max-w-[50%] mx-auto md:py-24'>
                <ol className="relative border-s border-gray-200 ">
                    {
                        options.map((item: any, index: number) => <li key={item.title} className="mb-8 ms-4">
                            <div className="absolute w-4 h-4 bg-blue-600 rounded-full mt-1.5 -start-2 border border-white" />
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                {item.heading}
                            </time>
                            <h3 className="text-lg font-semibold text-gray-900">
                                {item.title}
                            </h3>
                            <p className="mb-4 text-base font-normal text-gray-600">
                                {item.subtitle}
                            </p>
                            {item.button}
                        </li>
                        )
                    }
                </ol>

            </div>
        </div>
    );
}
