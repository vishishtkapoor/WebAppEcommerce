import React from 'react';
import { useStore } from '../store/useStore';
import { ProductCard } from '../components/ProductCard';

export const Home = () => {
  const { products } = useStore();
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {categories.map(category => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter(product => product.category === category)
              .map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};