'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

interface FooterSection {
  title: string;
  content: React.ReactNode;
}

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections: FooterSection[] = [
    {
      title: 'RUSINDO',
      content: (
        <div className="space-y-3">
          <p className="text-gray-400">PT. Rusindo Prima Food Industri</p>
          <p className="text-gray-400 text-sm">
            Distributor FMCG Terpercaya sejak 1981
          </p>
        </div>
      )
    },
    {
      title: 'Kontak',
      content: (
        <div className="space-y-3 text-gray-400 text-sm">
          <div className="flex items-start gap-2">
            <MapPin size={16} className="mt-1 shrink-0"/>
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
      )
    },
    {
      title: 'Menu',
      content: (
        <div className="space-y-2">
          {['Tentang Kami', 'Produk', 'Kemitraan', 'Distribusi', 'Sertifikasi'].map(
            (item, idx) => (
              <motion.a
                key={idx}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                whileHover={{ x: 5 }}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                {item}
              </motion.a>
            )
          )}
        </div>
      )
    },
    {
      title: 'Email',
      content: (
        <div className="space-y-2 text-gray-400 text-sm">
          <div className="flex items-start gap-2">
            <Mail size={16} className="mt-1 shrink-0" />
            <div>
              <p>desiyenrusindo@gmail.com</p>
              <p>ptrusindo68@gmail.com</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
      {/* Background Pattern */}
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
          {footerSections.map((section, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <h3
                className={`${
                  idx === 0 ? 'text-2xl' : 'text-base'
                } font-bold mb-4`}
              >
                {section.title}
              </h3>
              {section.content}
            </motion.div>
          ))}
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
              &copy; 2024 PT. Rusindo Prima Food Industri. All rights reserved.
            </p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <span className="text-sm">Back to Top</span>
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