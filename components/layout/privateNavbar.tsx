"use client"
import { useEffect, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import navbarItems from '@/data/navbarItems'
import { usePathname, useRouter } from 'next/navigation'
import Brand from '../brand'
import { useAuth } from '@/app/context/AuthContext'


const navigation = navbarItems

export default function PrivateNavbar() {
  const { logout:removeToken } = useAuth();
  const router = useRouter();

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

  const logout = () => {
    removeToken()
    router.push('/auth/login');
  }

  return (
    <div>
      <header className={`fixed sm:w-[90%] lg:max-w-5xl mx-auto inset-x-0 rounded-full top-5 md:top-8 z-50 border border-gray-100 bg-white`}>
        <nav className='sm:w-[94%] mx-auto px-2 py-2 flex flex justify-between items-center'>
          <div className="flex items-center justify-start space-x-5">
            <div>
              <Brand isScrolled={isScrolled} />
            </div>

          </div>

          <div className="hidden lg:block">
            {navigation.map((item: any) => (
              <Link key={item.name} href={item.href}
                className={`px-3 py-3 text-md rounded-lg`}>

                <span className={`${pathname == item.href ? 'text-blue-600' : isScrolled ? 'text-gray-700' : 'text-gray-700'}  hover:text-green-500`}>{item.name}</span>
              </Link>
            ))}
          </div>


          <div className="flex items-center space-x-5 md:space-x-1">
            <div className='hidden md:flex'>
              <button
                onClick={logout}
                className="btn md:text-lg border border-blue-500 flex items-center justify-center space-x-3 bg-blue-600 hover:bg-green-500 hover:border-green-500 px-6 text-white py-2 rounded-full"
              ><span>Log out</span>
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <button
              type="button"
              className="-m-2.5 lg:hidden inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed w-full inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 left-0 z-50 w-full overflow-y-auto bg-gray-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                      className="-mx-3 block text-lg rounded-lg px-3 py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className={`${pathname == item.href ? 'text-gray-900' : 'text-gray-700'}`}>{item.name}</span>
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
