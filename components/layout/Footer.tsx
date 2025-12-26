'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const Footer: React.FC = () => {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { label: tNav('about'), href: '#tentang' },
    { label: tNav('products'), href: '#produk' },
    { label: tNav('partnership'), href: '#kemitraan' },
    { label: tNav('distribution'), href: '#distribusi' },
    { label: tNav('certification'), href: '#sertifikasi' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-8"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">RUSINDO</h3>
            <div className="space-y-3">
              <p className="text-gray-400">{t('company')}</p>
              <p className="text-gray-400 text-sm">{t('tagline')}</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-4">{t('contact')}</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0" />
                <div>
                  <p>Jln. Pasar 7 Tionghoa No. 68</p>
                  <p>Hamparan Perak, Deli Serdang</p>
                  <p>Indonesia 20374</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <p>+62 61 8826538</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-4">{t('menu')}</h4>
            <div className="space-y-2">
              {menuItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-4">{t('email')}</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 shrink-0" />
                <div>
                  <p>desiyenrusindo@gmail.com</p>
                  <p>ptrusindo68@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; 2024 PT. Rusindo Prima Food Industri. {t('copyright')}
            </p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <span className="text-sm">{t('backToTop')}</span>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors"
              >
                <ArrowUp size={16} />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
