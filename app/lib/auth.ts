// lib/auth.js

export const getToken = () => {
    if (typeof document === 'undefined') return null;
    const tokenMatch = document.cookie.match(new RegExp('(^| )token=([^;]+)'));
    return tokenMatch ? tokenMatch[2] : null;
  };
  
  export const isTokenExpired = (token:string) => {
    if (!token) return true;
    const [, payload] = token.split('.');
    const { exp } = JSON.parse(atob(payload));
    return Date.now() >= exp * 1000;
  };
  
  export const setToken = (token:string) => {
    document.cookie = `token=${token}; Path=/; Secure; HttpOnly; SameSite=Strict; Max-Age=${60 * 60}`;
  };
  
  export const isAuthenticated = () => {
    const token = getToken();
    return token && !isTokenExpired(token);
  };
  
  export const removeToken = () => {
    document.cookie = 'token=; Path=/; Max-Age=0';
  };
  