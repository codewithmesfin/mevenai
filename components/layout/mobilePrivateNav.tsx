
import Link from "next/link";
import {  ArrowUpRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Brand from "../brand";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import NavigationList from "./navigationList";



export default function MobilePrivateNavbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return <div className="fixed z-50 w-full border-b bg-white md:hidden">
        <nav className='sm:w-[94%] mx-auto px-2 py-4 flex flex justify-start items-center space-x-10'>
            <div className="flex items-center space-x-5 md:space-x-1">
                <div></div>
                <button
                    type="button"
                    className="-m-2.5 lg:hidden inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>

            </div>

            <div className="flex items-center justify-start space-x-5">
                <Brand />
            </div>

            <div className=''>
                <Link
                    href="/auth/signup"
                    className="btn border border-blue-500 flex items-center justify-center space-x-3 bg-blue-600 hover:bg-green-500 hover:border-green-500 px-6 text-white py-2 rounded-full"
                ><span>My SaaS</span>
                    <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                </Link>
            </div>


        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed w-full inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 left-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <Brand />
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-red-600"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-6 bg-white">
                    <div className="-my-6 divide-y divide-gray-500/10"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <NavigationList
                        />
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </div>
}