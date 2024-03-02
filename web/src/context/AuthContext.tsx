import React, { createContext, useState, useEffect } from 'react';

export interface AuthContextValue {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
  }
export const AuthContext = createContext({} as AuthContextValue);


const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Replace this with your actual authentication logic (e.g., API call, token storage)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token:string) => {
    localStorage.setItem('token', token);
    console.log(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    
    localStorage.removeItem('token');
  };

  const value:AuthContextValue  = {
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
