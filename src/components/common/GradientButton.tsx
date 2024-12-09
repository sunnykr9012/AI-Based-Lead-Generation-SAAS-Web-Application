import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

const GradientButton = ({ children, variant = 'primary' }: GradientButtonProps) => {
  const baseClasses = "inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-500 hover-glow";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg shadow-blue-500/25",
    secondary: "bg-white text-gray-900 border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600",
    outline: "gradient-border bg-transparent text-blue-400 hover:text-blue-300"
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
};

export default GradientButton;