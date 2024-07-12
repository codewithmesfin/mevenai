"use client"

import { ChevronUpIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react'

export default function GotopButton() {
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
  

    return isVisible &&(
        <div
            onClick={scrollToTop}
            className="rounded-full p-3 fixed bottom-5 right-5 shadow-xl text-white cursor-pointer bg-blue-600"
         
            >
           <ChevronUpIcon className='w-6 h-6' />
        </div>
    )
}
