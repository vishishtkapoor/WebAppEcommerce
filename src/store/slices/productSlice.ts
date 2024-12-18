import { Product } from '../../types/product';

export interface ProductSlice {
  products: Product[];
  addProduct: (product: Product) => void;
}

export const createProductSlice = (set: any): ProductSlice => ({
  products: [
    {
      id: '1',
      name: 'Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      category: 'Electronics'
    },
    {
      id: '2',
      name: 'Smart Watch',
      description: 'Feature-rich smartwatch with health tracking',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      category: 'Electronics'
    },
    {
      id: '3',
      name: 'Running Shoes',
      description: 'Comfortable running shoes for athletes',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      category: 'Sports'
    }
  ],
  addProduct: (product) => set((state: any) => ({ 
    products: [...state.products, product] 
  })),
});