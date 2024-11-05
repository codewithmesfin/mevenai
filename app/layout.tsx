

import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/layout/footer';
import GotopButton from '@/components/gotoTop';
import { GoogleAnalytics } from '@next/third-parties/google'
import { AOSInit } from '@/components/aos';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/AuthContext';
import CustomLayout from '@/components/layout/layout';



export const metadata: Metadata = {
  title: 'Mevinai',
  description: 'Mevinai is a small team of Experienced Software Engineers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang='en'>
        <AuthProvider>
      <AOSInit />
      <body className='bg-[#0a0a0a] h-screen'>
          <CustomLayout children={children} />
          <Footer />
        <GotopButton />
        <ToastContainer />
      </body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`} />
      <meta name="facebook-domain-verification" content={`${process.env.NEXT_PUBLIC_FACEBOOK_DOAMIN_NAME}`} />
      </AuthProvider>
    </html>
  );
}
