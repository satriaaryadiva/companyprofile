/* eslint-disable @typescript-eslint/no-explicit-any */
 
 import { ChevronRight } from "lucide-react";
 

export const ProductCard = ({ 
  name, 
  gradient, 
  icon: Icon, 
  onClick,
  className  
}: {
    name : string;
    gradient: string;
    icon: any;
    onClick?: () => void;
    className?: string;
}) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group ${className}`}
    >
      <div className={`h-48 bg-linear-to-br ${gradient} flex items-center justify-center group-hover:scale-105 transition-transform`}>
        <Icon size={64} className="text-white" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        
        <p className="text-gray-600 text-sm mb-4">Klik untuk melihat detail produk</p>
        <div className="flex items-center text-blue-600 font-semibold">
          Lihat Detail <ChevronRight size={20} />
        </div>
      </div>
    </div>
  );
};