import React, { useEffect, useState, createContext, useContext } from 'react';
import { User, Role } from '../data/types';
import { mockEmployers, mockContractors } from '../data/mockData';
interface AuthContextType {
  user: User | null;
  login: (email: string, role: Role) => void;
  logout: () => void;
  isAuthenticated: boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export function AuthProvider({ children }: {children: React.ReactNode;}) {
  const [user, setUser] = useState<User | null>(null);
  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('buildhire_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Failed to parse stored user');
      }
    }
  }, []);
  const login = (email: string, role: Role) => {
    // Mock login logic - in a real app this would call an API
    let loggedInUser: User;
    if (role === 'employer') {
      loggedInUser = mockEmployers[0]; // Default to Sarah for demo
    } else {
      loggedInUser = mockContractors[0]; // Default to David for demo
    }
    setUser(loggedInUser);
    localStorage.setItem('buildhire_user', JSON.stringify(loggedInUser));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('buildhire_user');
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user
      }}>
      
      {children}
    </AuthContext.Provider>);

}
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}