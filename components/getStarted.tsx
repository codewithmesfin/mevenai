"use client"
import { ArrowRightIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function GetStartedButton() {
 

  const isBrowser = () => typeof window !== 'undefined';
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (isBrowser()) {
        const toggleVisibility = () => {
          if (window.pageYOffset > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
  
        window.addEventListener('scroll', toggleVisibility);
  
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }
    }, []);
  
    const scrollToTop = () => {
      if (isBrowser()) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };
  


  return isVisible && (
     <div
      className="w-[250px] mx-auto fixed bottom-5 right-10 left-10"

    >
     <div className='rounded-full px-5 py-3 shadow-xl text-white cursor-pointer bg-[#ff4533]'>
          <Link href={'/reachus'}
            className='flex justify-center items-center space-x-1 md:space-x-3'
          >
            <Cog6ToothIcon path="right" className="h-5 w-5 hidden md:flex" strokeWidth={2} />
            <span>Get started today</span>
            <ArrowRightIcon className='w-5 h-5' />
          </Link>
        </div>
    </div>
  )
}
