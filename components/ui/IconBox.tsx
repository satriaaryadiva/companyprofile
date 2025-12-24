/* eslint-disable @typescript-eslint/no-explicit-any */
 

export const IconBox = ({ 
  icon: Icon, 
  size = 'md',
  bgColor = 'bg-blue-100',
  iconColor = 'text-blue-600'
}: { icon: any; size?: 'sm' | 'md' | 'lg'; bgColor?: string; iconColor?: string; }) => {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };
  
  const iconSizes = {
    sm: 24,
    md: 32,
    lg: 40
  };
  
  return (
    <div className={`${sizes[size]} ${bgColor} rounded-full flex items-center justify-center`}>
      <Icon size={iconSizes[size]} className={iconColor} />
    </div>
  );
};