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
    { label: t('home'), href: '/'  },
    { label: t('about'), href: '/about' },
    { label: t('products'), href: '/products' },
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
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-foreground text-background  border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <motion.div
            animate={{ scale: scrolled ? 0.92 : 1 }}
            transition={{ duration: 0.3 }}
            className={`text-3xl font-bold tracking-tight cursor-pointer ${
              scrolled ? "text-background" : "text-white"
            }`}
          >
            RUSINDO
          </motion.div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 font-bold tracking-wider">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`transition-colors text-sm ${
                  scrolled
                    ? "text-background hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </motion.a>
            ))}

            <LanguageSwitcher />

            <Button
              variant="nav"
              size="md"
              className="font-bold rounded-full px-6 shadow-sm"
              onClick={() => window.open('https://wa.me/6281260468888', '_blank')}
            >
              {t('contact')}
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {isOpen ? <X size={26} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", damping: 18 }}
            className="md:hidden fixed top-20 left-0 w-full   bg-background shadow-xl border-b"
          >
            <div className="px-6 py-6 space-y-6 text-foreground font-black">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-primary transition-colors text-base"
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-4 border-t flex items-center justify-between">
                <LanguageSwitcher />
                <Button
                  size="sm"
                  className="font-bold rounded-full"
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
