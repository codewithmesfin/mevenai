

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { isAuthenticated, removeToken } from '../../app/lib/auth';

export default function PrivateRoute({ children }:any) {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      removeToken();
      router.push('/login');
    }
  }, [router]);

  return isAuthenticated() ? children : null;
}
