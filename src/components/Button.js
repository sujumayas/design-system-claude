import React from 'react';

const Button = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseClasses = 'px-4 py-2 rounded font-bold';
  const variantClasses = {
    primary: 'bg-brand-primary luchito text-white',
    secondary: 'bg-brand-secondary text-white',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;