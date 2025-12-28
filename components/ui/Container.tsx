/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export const Container = ({  style ,children, className = '' }: {style?: any;  children: React.ReactNode; className?: string }) => {
  return (
    <div style={style}  className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};