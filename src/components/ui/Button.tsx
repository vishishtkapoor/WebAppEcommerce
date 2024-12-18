import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: LucideIcon;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  icon: Icon,
  children,
  className = '',
  ...props 
}) => {
  const baseStyles = 'flex items-center justify-center px-4 py-2 rounded-lg transition-colors';
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'text-gray-700 hover:text-gray-900',
    danger: 'text-red-500 hover:text-red-700'
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="h-5 w-5 mr-2" />}
      {children}
    </button>
  );
};