/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Button } from './Button';

export const   PartnershipCard = ({ 
  icon: Icon, 
  title, 
  description, 
  contacts,
  iconBg = 'bg-blue-100',
  iconColor = 'text-blue-600',
  buttonVariant ,
  onButtonClick
}: { 
  icon: any;
  title: string;
  description: string;
  contacts: React.ReactNode;
  iconBg?: string;
  iconColor?: string;
  buttonVariant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline' | 'ghost';
  onButtonClick?: () => void;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-16 h-16 ${iconBg} rounded-full flex items-center justify-center`}>
          <Icon size={32} className={iconColor} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
      <div className="space-y-3 text-gray-700 mb-6">
        {contacts}
      </div>
      <Button variant={buttonVariant} onClick={onButtonClick}>
        Hubungi Kami
      </Button>
    </div>
  );
};
