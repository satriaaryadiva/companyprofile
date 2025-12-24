import { Award } from 'lucide-react';

export const CertificationCard = ({ 
  title, 
  description, 
  iconBg = 'bg-blue-100', 
  iconColor = 'text-blue-600' 
} : {
  title: string;
  description: string;
  iconBg?: string;
  iconColor?: string;
}

) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
      <div className={`w-20 h-20 ${iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <Award size={40} className={iconColor} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};