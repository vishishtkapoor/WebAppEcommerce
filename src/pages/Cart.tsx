import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { Trash } from 'lucide-react';

export const Cart = () => {
  const { cart, removeFromCart } = useStore();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const [orderForm, setOrderForm] = useState({
    name: '',
    email: '',
    address: ''
  });
  const [orderStatus, setOrderStatus] = useState('');

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: orderForm,
          products: cart.map(item => ({
            productId: item.id,
            quantity: 1
          })),
          totalAmount: total,
          paymentMethod: 'COD'
        }),
      });

      if (response.ok) {
        setOrderStatus('Order placed successfully!');
        // Clear cart and form
        cart.forEach(item => removeFromCart(item.id));
        setOrderForm({ name: '', email: '', address: '' });
      } else {
        setOrderStatus('Failed to place order. Please try again.');
      }
    } catch (error) {
      setOrderStatus('Error placing order. Please try again.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md">
            {cart.map(item => (
              <div key={item.id} className="flex items-center p-6 border-b">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1 ml-6">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash className="h-5 w-5" />
                </button>
              </div>
            ))}
            
            <div className="p-6">
              <div className="flex justify-between items-center text-xl font-semibold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Order Details</h2>
            <form onSubmit={handleOrder} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={orderForm.name}
                  onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={orderForm.email}
                  onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={orderForm.address}
                  onChange={(e) => setOrderForm({ ...orderForm, address: e.target.value })}
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-md">
                <p className="font-medium">Payment Method: Cash on Delivery</p>
              </div>

              {orderStatus && (
                <div className={`p-4 rounded-md ${orderStatus.includes('success') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {orderStatus}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};