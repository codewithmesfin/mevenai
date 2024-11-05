// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Retrieve the access token from cookies
  const token = request.cookies.get('accessToken')?.value;

  const pathname=request.nextUrl.pathname
  // Debugging: Log token and current path
  console.log("Access Token:", token); // Debugging
  console.log("Pathname:", request.nextUrl.pathname); // Debugging

  // List of public paths that don't require authentication
  const publicPaths = ['/auth/login', '/auth/signup', '/', '/about', '/pricing', '/marketplace', '/support'];

  // Check if the requested path is public
  const isPublicPath = publicPaths.includes(pathname);
  console.log("Is Public Path:", isPublicPath); // Debugging

  // Define private paths
  const privatePaths = ['/home', '/setup', '/dashboard', '/profile', '/settings'];
  const isPrivatePath = privatePaths.includes(pathname);

  // Redirect to login if accessing a protected path without a token
  if (isPrivatePath && !token) {
    console.log("Redirecting to login... (no token)");
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // Redirect authenticated users trying to access public pages
  if (token && isPublicPath) {
    console.log("Redirecting to home... (user is authenticated)");
    return NextResponse.redirect(new URL('/home', request.url));
  }

  console.log("Continuing to requested route..."); // Debugging
  return NextResponse.next(); // Continue if conditions are met
}

// Specify which routes to apply this middleware to
export const config = {
  matcher: [
    '/home', 
    '/setup', 
    '/dashboard', 
    '/profile', 
    '/settings',
    '/auth/login',
    '/auth/signup',
    '/about', 
    '/pricing', 
    '/marketplace', 
    '/support',
  ],
};
