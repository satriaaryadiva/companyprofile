/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export const Section = ({ children, id, className , bgColor, bgImage  ,style } :{
    children: React.ReactNode;
    id?: any;
    style?: any;
    bgImage?: string;
    className?: string;
    bgColor?: string;
}) => {
  return (
    <section id={id} className={`py-20 ${bgColor} ${className}  `} 
      style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' , ...style } : { ...style }} >
      {children}
    </section>
  );
};