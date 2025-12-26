'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '../ui';
import { LanguageSwitcher } from'../ui/LanguageSwitcher'

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations('nav');

  const navItems = [
    { label: t('home'), href: '#home' },
    { label: t('about'), href: '#tentang' },
    { label: t('products'), href: '#produk' },
    { label: t('partnership'), href: '#kemitraan' },
    { label: t('distribution'), href: '#distribusi' },
    { label: t('certification'), href: '#sertifikasi' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full   *: z-50  transition-all duration-300 ${
        scrolled ? 'bg-(--secondary) shadow-lg' : ' /95 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold   "
          >
            R 
          </motion.div>

          <div className="hidden md:flex     font-bold items-center space-x-6">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="text-white font-bold hover:text-(--secondary) transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
            <LanguageSwitcher />
            <Button className="text-foreground font-bold" variant='nav' size="md" onClick={() => window.open('https://wa.me/6281260468888', '_blank')}>
              {t('contact')}
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-blue-600"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t ">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};