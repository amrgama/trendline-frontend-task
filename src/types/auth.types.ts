export interface User {
  id: string | number;
  name: string;
  email: string;
  mobile?: string;
  mobile_country_code?: string;
  image?: string;
  type?: string;
  [key: string]: unknown;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
