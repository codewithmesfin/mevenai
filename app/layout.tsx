

import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import GotopButton from '@/components/gotoTop';
import { GoogleAnalytics } from '@next/third-parties/google'
import { AOSInit } from '@/components/aos';





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
       <AOSInit />
      <body className='bg-[#0a0a0a] h-screen'>
        <Navbar />
        {children}
        <Footer />
        <GotopButton />
      </body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`} />
      <meta name="facebook-domain-verification" content={`${process.env.NEXT_PUBLIC_FACEBOOK_DOAMIN_NAME}`} />
    </html>
  );
}
