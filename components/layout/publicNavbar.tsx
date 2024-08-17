"use client"
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
      <header className={`fixed w-[90%] md:max-w-3xl mx-auto inset-x-0 rounded-full top-5 md:top-8 z-50 border border-gray-900 bg-[#0a0a0a]`}>
        <nav className='w-[90%] mx-auto px-2 py-2 flex flex justify-between items-center'>
          <div className="flex items-center justify-start space-x-5">
            <div>
              <Brand isScrolled={isScrolled} />
            </div>

          </div>

          <div className="hidden md:block">
            {navigation.map((item: any) => (
              <Link key={item.name} href={item.href}
                className={`px-3 py-3 text-sm rounded-lg`}>

                <span className={`${pathname == item.href ? 'text-white' : isScrolled ? 'text-gray-400' : 'text-gray-400'}  hover:text-green-500`}>{item.name}</span>
              </Link>
            ))}
          </div>


          <div className="flex items-center space-x-5 md:space-x-1">
            <div className='hidden md:flex'>
              <Link
                href="https://calendly.com/mesfin-tsegaye/codewithmesfin"
                target='_blank'
                className="btn border border-[#ff4533] flex items-center justify-center space-x-3 bg-[#ff4533] hover:bg-green-500 hover:border-green-500 px-6 text-white py-2 rounded-full"
              ><span>{"Let's"} talk</span>
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <button
              type="button"
              className="-m-2.5 md:hidden inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0a0a0a] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Brand isScrolled={isScrolled} />
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-red-600"
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
                      className="-mx-3 block rounded-lg px-3 py-2 text-base"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className={`${pathname == item.href ? 'text-white' : 'text-gray-400'}`}>{item.name}</span>
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
