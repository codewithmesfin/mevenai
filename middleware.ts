// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Helper function to check if a token is expired
const isTokenExpired = (token: string): boolean => {
  if (!token) return true;
  const [, payload] = token.split('.');
  try {
    const { exp } = JSON.parse(atob(payload)); // Decode and parse the JWT payload
    return Date.now() >= exp * 1000; // Check if the token is expired
  } catch {
    return true; // Consider token expired if decoding fails
  }
};

export function middleware(request: NextRequest) {
  // Retrieve the access token from cookies
  const token = request.cookies.get('accessToken')?.value;

  // Extract pathname for easy readability
  const pathname = request.nextUrl.pathname;

  // Debugging: Log token and current path
  console.log("Access Token:", token); // Debugging
  console.log("Pathname:", pathname); // Debugging

  // List of public paths that don't require authentication
  const publicPaths = ['/auth/login', '/auth/signup', '/', '/about', '/pricing', '/marketplace', '/support'];
  const isPublicPath = publicPaths.includes(pathname);
  console.log("Is Public Path:", isPublicPath); // Debugging

  // Define private paths
  const privatePaths = ['/home', '/setup','/configuration','/products', '/dashboard', '/profile', '/settings'];
  const isPrivatePath = privatePaths.includes(pathname);

  // Check if token is valid (exists and is not expired)
  const isAuthenticated = token && !isTokenExpired(token);
  console.log("Is Authenticated:", isAuthenticated); // Debugging

  // Redirect to login if accessing a protected path without a valid token
  if (isPrivatePath && !isAuthenticated) {
    console.log("Redirecting to login... (no valid token)");
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // Redirect authenticated users trying to access public pages
  if (isAuthenticated && isPublicPath) {
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
    '/configuration', 
    "/products",
    "/docs",
    "/statistics",
    "/saas",
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
