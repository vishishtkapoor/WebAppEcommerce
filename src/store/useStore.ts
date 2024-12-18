import { create } from 'zustand';
import { createProductSlice, ProductSlice } from './slices/productSlice';
import { createCartSlice, CartSlice } from './slices/cartSlice';
import { createAuthSlice, AuthSlice } from './slices/authSlice';

type StoreState = ProductSlice & CartSlice & AuthSlice;

export const useStore = create<StoreState>((set) => ({
  ...createProductSlice(set),
  ...createCartSlice(set),
  ...createAuthSlice(set),
}));