// src/context/AuthContext.tsx
"use client"

// src/context/AuthContext.tsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getToken, isTokenExpired, removeToken, setToken } from '../lib/auth';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token =getToken();
    if (token) {
      // Add your logic to check if the token is valid/expired
      const isValidToken = !isTokenExpired(token); // Define this function based on your token structure
      setIsAuthenticated(isValidToken);
    }
  }, []);

  const login = (token: string) => {
    setToken(token)
    setIsAuthenticated(true);
  };

  const logout = () => {
    removeToken()
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
