"use client"




import { useAuth } from '@/app/context/AuthContext';
import dynamic from 'next/dynamic'
import { usePathname} from 'next/navigation';

const PrivateLayout = dynamic(() => import('./privateLayout'), { ssr: false })
const PublicNavbar = dynamic(() => import('./publicNavbar'), { ssr: false })


interface PROPS {
  children: any;
}


const CustomLayout = ({ children }: PROPS) => {
  const { isAuthenticated } = useAuth();
  const pathname = usePathname()

  const isLandingPage= pathname==="/"

  return isAuthenticated ? <PrivateLayout children={children} /> : <>
    <PublicNavbar />
    {children}
  </>


};

export default CustomLayout;
