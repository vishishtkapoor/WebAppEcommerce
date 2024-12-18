import { Product } from '../../types/product';

export interface ProductSlice {
  products: Product[];
  addProduct: (product: Product) => void;
}

export const createProductSlice = (set: any): ProductSlice => ({
  products: [
    {
      id: '1',
      name: 'Sony WH-1000XM4',
      description: 'Industry-leading noise canceling wireless headphones with exceptional sound quality and long battery life',
      price: 349.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      category: 'Electronics'
    },
    {
      id: '2',
      name: 'Apple Watch Series 7',
      description: 'Advanced smartwatch with health monitoring, fitness tracking, and seamless integration',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      category: 'Electronics'
    },
    {
      id: '3',
      name: 'Nike Air Zoom Pegasus',
      description: 'Premium running shoes with responsive cushioning and breathable mesh upper',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      category: 'Sports'
    },
    {
      id: '4',
      name: 'Modern Desk Lamp',
      description: 'Adjustable LED desk lamp with wireless charging pad and multiple lighting modes',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c',
      category: 'Home & Office'
    },
    {
      id: '5',
      name: 'Leather Messenger Bag',
      description: 'Handcrafted genuine leather messenger bag with multiple compartments',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
      category: 'Accessories'
    },
    {
      id: '6',
      name: 'Smart Coffee Maker',
      description: 'WiFi-enabled coffee maker with programmable brewing and mobile app control',
      price: 159.99,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
      category: 'Home & Office'
    },
    {
      id: '7',
      name: 'Yoga Mat Premium',
      description: 'Eco-friendly non-slip yoga mat with perfect cushioning and carrying strap',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f',
      category: 'Sports'
    },
    {
      id: '8',
      name: 'Mechanical Keyboard',
      description: 'RGB mechanical gaming keyboard with customizable switches and macro keys',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1595225476474-87563907a212',
      category: 'Electronics'
    },
    {
      id: '9',
      name: 'Minimalist Watch',
      description: 'Classic minimalist design watch with genuine leather strap',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d',
      category: 'Accessories'
    }
  ],
  addProduct: (product) => set((state: any) => ({ 
    products: [...state.products, product] 
  })),
});