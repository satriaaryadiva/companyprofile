/* eslint-disable @typescript-eslint/no-explicit-any */

export const ValueCard = ({ icon: Icon, title, description, iconBg  = 'bg-blue-100', iconColor = 'text-blue-600' } : {
    icon: any;
    title: string;
    description: string;
    iconBg?: string;
    iconColor?: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
      <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center mb-4`}>
        <Icon className={iconColor} size={24} />
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};