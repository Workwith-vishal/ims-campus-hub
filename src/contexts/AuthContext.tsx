import React, { createContext, useContext, useState, useCallback } from 'react';
import type { User, Role } from '@/types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: Role) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo
const MOCK_USERS: (User & { password: string })[] = [
  { id: '1', name: 'Dr. Rajesh Kumar', email: 'superadmin@ims.edu', role: 'super_admin', password: 'admin123' },
  { id: '2', name: 'Prof. Amit Sharma', email: 'admin@ims.edu', role: 'admin', password: 'admin123' },
  { id: '3', name: 'Dr. Priya Singh', email: 'teacher@ims.edu', role: 'teacher', password: 'teacher123' },
  { id: '4', name: 'Rahul Verma', email: 'student@ims.edu', role: 'student', password: 'student123' },
  { id: '5', name: 'Sanjay Gupta', email: 'accountant@ims.edu', role: 'accountant', password: 'acc123' },
  { id: '6', name: 'Neha Patel', email: 'librarian@ims.edu', role: 'librarian', password: 'lib123' },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('ims_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = useCallback(async (email: string, password: string) => {
    const found = MOCK_USERS.find(u => u.email === email && u.password === password);
    if (!found) throw new Error('Invalid credentials');
    const { password: _, ...userData } = found;
    setUser(userData);
    localStorage.setItem('ims_user', JSON.stringify(userData));
  }, []);

  const register = useCallback(async (name: string, email: string, _password: string, role: Role) => {
    const newUser: User = { id: Date.now().toString(), name, email, role };
    setUser(newUser);
    localStorage.setItem('ims_user', JSON.stringify(newUser));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('ims_user');
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
