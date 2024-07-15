"use client"

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import navbarItems from '@/data/navbarItems'
import { usePathname } from 'next/navigation'
import Brand from '../brand'


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
      <header className={`fixed inset-x-0 top-0 z-50  ${isScrolled ? 'bg-white border-b border-gray-200' : 'bg-white'}`}>
        <nav className='w-[95%] mx-auto px-2 py-3 flex flex justify-between items-center'>
          <div className="flex items-center justify-start space-x-5">
            <div>
              <Brand isScrolled={isScrolled} />
            </div>
            <div className="hidden md:block md:pl-5">
              {navigation.map((item: any) => (
                <Link key={item.name} href={item.href}
                  className={`px-3 py-3 rounded-lg`}>

                  <span className={`${pathname == item.href ? 'text-blue-600' : isScrolled ? 'text-[#5f6368]' : 'text-[#5f6368]'}  hover:text-blue-500`}>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>


          <div className="flex items-center space-x-5 md:space-x-1">
            <div className='hidden md:flex items-center space-x-5'>
              <Link
                href="/contents"
                className="border border-gray-300 hover:border-gray-600 flex items-center justify-center space-x-3 bg-white px-6 text-[#5f6368] py-2 rounded-lg"
              ><span>Contact experts</span>
              </Link>
              <Link
                href="/login"
                className="border border-gray-300 hover:border-gray-600 flex items-center justify-center space-x-3 bg-white px-7 text-[#5f6368] py-2 rounded-lg"
              ><span>Sign in</span>
              </Link>
              <Link
                href="/register"
                className="border border-[#0070f3] flex items-center justify-center space-x-3 bg-[#0070f3] hover:bg-blue-500 hover:border-blue-500 px-6 text-white py-2 rounded-lg"
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
              <Brand isScrolled={isScrolled} />
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
                      className="-mx-3 block rounded-lg px-3 py-2 text-base  hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className={`${pathname == item.href ? 'text-blue-600' : 'text-[#5f6368]'}  hover:text-blue-500`}>{item.name}</span>
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
