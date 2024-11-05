"use client"




import { useAuth } from '@/app/context/AuthContext';
import dynamic from 'next/dynamic'


const PrivateLayout = dynamic(() => import('./privateLayout'), { ssr: false })
const PublicNavbar = dynamic(() => import('./publicNavbar'), { ssr: false })


interface PROPS {
  children: any;
}


const CustomLayout = ({ children }: PROPS) => {
  const { isAuthenticated } = useAuth();


  return isAuthenticated ?
    <PrivateLayout>
      {children}
    </PrivateLayout> :
    <>
      <PublicNavbar />
      {children}
    </>


};

export default CustomLayout;
