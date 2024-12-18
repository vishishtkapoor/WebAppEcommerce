import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, LogOut } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Navbar = () => {
  const { user, cart, setUser } = useStore();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              EcoShop
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                {user.isAdmin && (
                  <Link to="/admin" className="text-gray-600 hover:text-gray-900">
                    Admin
                  </Link>
                )}
                <button
                  onClick={() => setUser(null)}
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center text-gray-600 hover:text-gray-900">
                <User className="h-5 w-5 mr-1" />
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};