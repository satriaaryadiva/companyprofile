import React from 'react';

export const Button = ({  children , 
  variant = 'primary', 
  size = 'md', 
  onClick : onClick, 
  disabled = false,
  className = '',
  ...props } : {
children: React.ReactNode;
variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline' | 'ghost' | 'nav';
size?: 'sm' | 'md' | 'lg';
onClick?: () => void;
disabled?: boolean;
className?: string;

  }) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2';
  
  const variants = {
    primary: ' text-white hover:bg-blue-700 active:bg-blue-800',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
    success: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100',
    ghost: 'text-gray-700 bg-white hover:bg-gray-100 active:bg-gray-200',
    nav: '   text-background  font-black bg-(--secondary)  hover:scale-120 active:scale-110',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const disabledStyles = 'opacity-50 cursor-not-allowed';
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? disabledStyles : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};