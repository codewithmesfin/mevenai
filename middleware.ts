// middleware.js

import { NextRequest, NextResponse } from 'next/server';
import { isTokenExpired } from './app/lib/auth';

export function middleware(req:NextRequest) {
  const publicRoutes = ['/login', '/signup', '/'];
  const isPublicRoute = publicRoutes.some((path) => req.nextUrl.pathname.startsWith(path));

  if (isPublicRoute) return NextResponse.next();

  const token:string = `${req.cookies.get('token')}`;
  if (!token || isTokenExpired(token)) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/marketplace/:path*', '/setup/:path*', '/profile/:path*', '/settings/:path*'],
};
