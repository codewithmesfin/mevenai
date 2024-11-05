"use client"




import { useAuth } from '@/app/context/AuthContext';
import dynamic from 'next/dynamic'
 
const PrivateNavbar = dynamic(() => import('./privateNavbar'), { ssr: false })
const PublicNavbar = dynamic(() => import('./publicNavbar'), { ssr: false })


const Navbar = () => {
  const { isAuthenticated } = useAuth();

  
  return  isAuthenticated? <PrivateNavbar/> :<PublicNavbar/>
  
  
};

export default Navbar;
