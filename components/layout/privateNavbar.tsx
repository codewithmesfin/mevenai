import Link from 'next/link';
import createSupabaseServerClient from '@/lib/supabase/server';



const PrivateNavbar =  ({data}:any) => {
 

  const logoutAction = async () => {
    'use server';
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  };

  return  (
    <header className='bg-white h-20'>
      <nav className='h-full flex justify-between container items-center'>
        <div>
          <Link href='/' className='text-ct-dark-600 text-2xl font-semibold'>
            Meavini -private
          </Link>
        </div>
        <ul className='flex items-center space-x-4'>
          <li>
            <Link href='/' className='text-ct-dark-600'>
              Home
            </Link>
          </li>
          
          {data.session && (
            <form action={logoutAction} className='flex'>
              <li>
                <Link href='/profile' className='text-ct-dark-600'>
                  Profile
                </Link>
              </li>
              <li>
                <button className='ml-4'>Logout</button>
              </li>
            </form>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default PrivateNavbar;
