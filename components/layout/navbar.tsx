
import getUserSession from '@/lib/getUserSession';
import createSupabaseServerClient from '@/lib/supabase/server';
import PrivateNavbar from './privateNavbar';
import PublicNavbar from './publicNavbar';

const Navbar = async () => {
  const { data } = await getUserSession();

  const logoutAction = async () => {
    'use server';
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  };

  return data.session?<PrivateNavbar data={data} />:<PublicNavbar/>
  
  
};

export default Navbar;
