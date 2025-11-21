import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg";
  
  const variants = {
    primary: "bg-brand-gold text-white hover:bg-amber-600 hover:shadow-amber-500/30",
    secondary: "bg-brand-blue text-white hover:bg-blue-900 hover:shadow-blue-900/30",
    outline: "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};