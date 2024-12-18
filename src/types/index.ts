export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface User {
  username: string;
  isAdmin: boolean;
}