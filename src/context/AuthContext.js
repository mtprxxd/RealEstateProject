import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../utils/db';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = db.getSession();
    if (session) setUser(session);
    setLoading(false);
  }, []);

  const login = (credentials) => {
    const result = db.login(credentials);
    if (result.success) setUser(result.user);
    return result;
  };

  const register = (data) => {
    const result = db.register(data);
    if (result.success) setUser(result.user);
    return result;
  };

  const logout = () => {
    db.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
