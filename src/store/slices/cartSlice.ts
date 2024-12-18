import { Product } from '../../types/product';

export interface CartSlice {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
}

export const createCartSlice = (set: any): CartSlice => ({
  cart: [],
  addToCart: (product) => set((state: any) => ({ 
    cart: [...state.cart, product] 
  })),
  removeFromCart: (productId) => set((state: any) => ({
    cart: state.cart.filter((item: Product) => item.id !== productId)
  })),
});