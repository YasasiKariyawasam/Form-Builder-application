// src/components/common/Button.jsx
import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  onClick, 
  className = '' 
}) => {
  const baseStyles = 'font-medium rounded-xl transition-all flex items-center gap-2 justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg',
    secondary: 'bg-white text-gray-700 hover:shadow-md',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;