"use client";

import { createContext, useState, useEffect } from "react";
import { User, AuthState } from "@/types";
import { getToken, removeToken } from "@/lib/token";
import { authApi } from "@/lib/api/auth";

interface AuthContextType extends AuthState {
  login: (user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    const initAuth = async () => {
      const token = getToken();
      if (!token) {
        setState((prev) => ({ ...prev, isLoading: false }));
        return;
      }

      try {
        const response = await authApi.userData();
        if (response.data.status) {
          setState({
            user: response.data.data,
            isAuthenticated: true,
            isLoading: false,
          });
        } else {
          removeToken();
          setState((prev) => ({ ...prev, isLoading: false }));
        }
      } catch {
        removeToken();
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    };

    initAuth();
  }, []);

  const login = (user: User) => {
    setState({
      user,
      isAuthenticated: true,
      isLoading: false,
    });
  };

  const logout = () => {
    // Attempt to call logout API, but don't block local logout
    authApi.logout().catch((err) => console.error("Logout API failed", err));
    removeToken();
    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
