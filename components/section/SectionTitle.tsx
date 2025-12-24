import React from 'react';
export const SectionTitle = ({ title, subtitle, className }: {
    title: string;
    subtitle?: string;
    className?: string;
}) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};