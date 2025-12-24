import React from 'react';

export const Card = ({ children, className  , hover  , ...props }:{
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-8 ${
        hover ? 'hover:shadow-xl transition-shadow duration-200' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;    