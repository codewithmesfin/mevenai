"use client"

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import navbarItems from '@/data/navbarItems'
import { usePathname } from 'next/navigation'


const navigation = navbarItems

export default function PublicNavbar() {

  const pathname = usePathname()


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header className={`fixed inset-x-0 top-0 z-50  ${isScrolled ? 'bg-white border-b border-gray-200' : ''}`}>
        <nav className='w-[95%] mx-auto px-2 py-4 flex flex justify-between items-center'>
          <div className="flex items-center justify-between space-x-5">
            <div className="w-[250px]">
              <Link href={"/"} className='text-3xl md:text-4xl flex items-center space-x-2 text-white font-bold'>
                <Image
                  className="h-12 w-12 w-auto rounded-full"
                  src="/logo.png"
                  alt=""
                  height={50} width={50}
                />
                <span className="bg-gradient-to-r from-[#8261e9] to-green-600 inline-block text-transparent bg-clip-text font-extrabold">
                  Mevinai</span
                >
              </Link>
            </div>
          </div>
          <div className="hidden md:block ">
            {navigation.map((item: any) => (
              <Link key={item.name} href={item.href}
                className="leading-6  px-3 py-3 rounded-lg">

                <span className={`${pathname == item.href ? 'text-blue-600' : 'text-gray-600'}  hover:text-blue-500`}>{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-5 md:space-x-1">
            <div className='hidden md:block'>
              <Link
                href="/register"
                className="flex items-center justify-center space-x-3 bg-blue-600 px-6 text-white py-3  rounded-lg shadow"
              ><span>Signup for free</span>
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <button
              type="button"
              className="-m-2.5 md:hidden inline-flex items-center justify-center rounded-md p-2.5 text-gray-600"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href={"/"} className='text-3xl md:text-4xl flex items-center space-x-2 text-white font-bold'>
                <Image
                  className="h-12 w-12 w-auto"
                  src="/logo.png"
                  alt=""
                  height={50} width={50}
                />
                <span className="bg-gradient-to-r from-[#8261e9] to-green-600 inline-block text-transparent bg-clip-text font-extrabold">
                  Mevinai</span
                >
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item: any) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className={`${pathname == item.href ? 'text-blue-600' : 'text-gray-600'}  hover:text-blue-500`}>{item.name}</span>
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>


    </div>
  )
}
