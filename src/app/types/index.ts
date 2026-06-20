// app/types/index.ts
export interface Article {
  id: number;
  title: string;
  content: string;
  disabled: boolean;
  created_at: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface AuthResponse {
  access: string;
  refresh: string;
  user: User;
}