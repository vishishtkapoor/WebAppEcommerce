import { User } from '../../types/user';

export interface AuthSlice {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const createAuthSlice = (set: any): AuthSlice => ({
  user: null,
  setUser: (user) => set({ user }),
});