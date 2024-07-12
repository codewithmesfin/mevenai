import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import GotopButton from '@/components/gotoTop';


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
      <body className='bg-white'>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
        <GotopButton />
      </body>
    </html>
  );
}
