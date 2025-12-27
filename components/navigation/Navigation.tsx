'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '../ui';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-300
        ${scrolled 
          ? 'bg-background/90   shadow-lg backdrop-blur-md border-b border-gray-200' 
          : 'bg-transparent text-background'
        }`}
    >
      {/* MAIN NAV */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-primary tracking-tight cursor-pointer"
          >
            RUSINDO
          </motion.div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 font-semibold">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * idx }}
                className={`transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-primary' : 'text-background hover:bg-secondary/90'
                }`}
              >
                {item.label}
              </motion.a>
            ))}

            <LanguageSwitcher />

            <Button
              className="font-bold"
              variant='nav'
              size="md"
              onClick={() => window.open('https://wa.me/6281260468888', '_blank')}
            >
              {t('contact')}
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <button  className={`md:hidden   font-extrabold ${
                  scrolled ? 'text-secondary  ' : 'text-background  hover:bg-secondary'
                }  `}  onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26}  /> : <Menu size={30}  />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t shadow-md"
          >
            <div className="px-6 py-6 space-y-4 text-gray-700 font-medium">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-4 border-t flex justify-between items-center">
                <LanguageSwitcher />
                <Button 
                  className="font-bold" 
                  size="sm" 
                  onClick={() => window.open('https://wa.me/6281260468888', '_blank')}
                >
                  {t('contact')}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
