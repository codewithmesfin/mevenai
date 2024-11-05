import Cookies from 'js-cookie';

// Helper function to retrieve the access token from cookies
export const getToken = (): string | undefined => {
  const token = Cookies.get('accessToken');
  Cookies.set('name', 'value')
  console.log("Access Token Retrieved:", token); // Log the retrieved token
  return token;
};

// Function to check if the token is expired
export const isTokenExpired = (token: string): boolean => {
  if (!token) return true;
  const [, payload] = token.split('.');
  try {
    const { exp } = JSON.parse(atob(payload)); // Decode and parse the JWT
    const isExpired = Date.now() >= exp * 1000; // Check expiration
    console.log("Is Token Expired:", isExpired); // Log expiration check
    return isExpired;
  } catch (error) {
    console.error("Error decoding token:", error);
    return true; // Return true if there's an error decoding the token
  }
};

// Function to set the token in cookies
export const setToken = (token: string): void => {
  Cookies.set('accessToken', token, {
    path: '/',
    secure: false, // Set to true in production; false for localhost
    sameSite: 'Strict',
    expires: 1 / 24, // Token expires in 1 hour
  });
  console.log("Access Token Set:", token); // Log the token being set
};

// Function to check if the user is authenticated
export const isAuthenticated = (): boolean => {
  const token = getToken();
  const authenticated = token && !isTokenExpired(token);
  console.log("Is User Authenticated:", authenticated); // Log authentication status
  return authenticated?true:false;
};

// Function to remove the token
export const removeToken = (): void => {
  Cookies.remove('accessToken', { path: '/' }); // Specify path when removing
  console.log("Access Token Removed"); // Log removal
};
