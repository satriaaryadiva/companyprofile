'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation'
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: 'id' | 'en') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2">
      <Globe size={20} className="text-background" />
      <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => switchLanguage('id')}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
            locale === 'id'
              ? '     hover:text-gray-900 bg-foreground'
              : ' '
          }`}
        >
          ID
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => switchLanguage('en')}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
            locale === 'en'
              ? '     hover:text-gray-900 bg-foreground'
              : ' ' 
          }`}
        >
          EN
        </motion.button>
      </div>
    </div>
  );
};