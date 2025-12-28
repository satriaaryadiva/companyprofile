'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowUpRight, ArrowUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { container, item } from '../motions/motion';

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

  return (
    <footer className="relative bg-[#171717] text-white pt-20 pb-10 overflow-hidden border-t border-white/10">

      {/* Glow kuning #ffcb04 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-125 h-125 bg-[#ffcb04]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-87.5[h-87.5-[#ffcb04]/15 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >

          {/* Brand */}
          <motion.div variants={item}>
            <h3 className="text-3xl font-extrabold bg-[#ffcb04] bg-clip-text text-transparent">
              RUSINDO
            </h3>
            <p className="mt-3 text-gray-300 text-sm leading-relaxed">{t('company')}</p>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item}>
            <h4 className="font-semibold text-[#ffcb04] mb-4">{t('contact')}</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <p className="flex gap-2 items-start"><MapPin size={16}/> Jln. Pasar 7 Tionghoa No. 68, Deli Serdang</p>
              <p className="flex gap-2 items-center"><Phone size={16}/> +62 61 8826538</p>
            </div>
          </motion.div>

          {/* Menu */}
          <motion.div variants={item}>
            <h4 className="font-semibold text-[#ffcb04] mb-4">{t('menu')}</h4>
            <div className="flex flex-col gap-2">
              {menuItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  whileHover={{ x: 6 }}
                  className="text-gray-300 hover:text-[#ffcb04] flex items-center gap-1 text-sm transition"
                >
                  {item.label} <ArrowUpRight size={14}/>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Email */}
          <motion.div variants={item}>
            <h4 className="font-semibold text-[#ffcb04] mb-4">{t('email')}</h4>
            <p className="flex gap-2 items-center text-gray-300 text-sm"><Mail size={16}/> desiyenrusindo@gmail.com</p>
            <p className="flex gap-2 items-center text-gray-300 text-sm ml-5.5">ptrusindo68@gmail.com</p>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500">&copy; 2024 PT. Rusindo Prima Food Industri — {t('copyright')}</p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-gray-300 hover:text-[#ffcb04]"
          >
            <span className="text-sm">{t('backToTop')}</span>
            <div className="w-9 h-9 rounded-full bg-[#ffcb04] flex items-center justify-center hover:brightness-110 transition">
              <ArrowUp size={18} className="text-[#171717]" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
