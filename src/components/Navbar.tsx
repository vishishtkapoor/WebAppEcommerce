import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, LogOut, Search } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Navbar = () => {
  const { user, cart, setUser } = useStore();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <span className="text-xl font-bold text-gray-800">EcoShop</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-900 transition-colors" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cart.length}
                </span>
              )}
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                {user.isAdmin && (
                  <Link 
                    to="/admin" 
                    className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                  >
                    Admin Dashboard
                  </Link>
                )}
                <button
                  onClick={() => setUser(null)}
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <User className="h-5 w-5" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};