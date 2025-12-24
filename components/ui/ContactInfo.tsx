/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export const ContactInfo = ({ icon: Icon, children, iconColor = 'text-blue-600' }:{
    icon: any;
    children: React.ReactNode;
    iconColor?: string;
}) => {
  return (
    <div className="flex items-start gap-2">
      <Icon size={20} className={`${iconColor} mt-1 shrink-0`} />
      <div className="text-gray-700">{children}</div>
    </div>
  );
};