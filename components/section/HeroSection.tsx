'use client';

import React from 'react';
import { ChevronRight, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button, Container, Section } from '../ui';
import { container, float, item } from '../motions/motion';

export const HeroSection: React.FC = () => {
  const t = useTranslations('hero');

  const products = [
    { name: t('instantNoodles'), gradient: 'from-blue-100 to-blue-200', color: 'text-blue-600' },
    { name: t('snacks'), gradient: 'from-green-100 to-green-200', color: 'text-green-600' },
    { name: t('sauce'), gradient: 'from-red-100 to-red-200', color: 'text-red-600' },
    { name: t('stickyNoodles'), gradient: 'from-yellow-100 to-yellow-200', color: 'text-yellow-600' }
  ];

 

  return (
    <Section id="home" className="pt-20 min-h-screen flex items-center" bgColor="bg-gradient-to-br from-blue-50 to-white">
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
        />
      </div>
      
      <Container className="py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={container }
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {t('title')}
            </motion.h1>
            <motion.p
              variants={item}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              {t('subtitle')}
            </motion.p>
            <motion.div
              variants={item}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                onClick={() => document.getElementById('produk')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('viewProducts')} <ChevronRight size={20} />
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={() => window.open('https://wa.me/6281260468888', '_blank')}
              >
                {t('contactUs')}
              </Button>
            </motion.div>
          </motion.div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {products.map((product, idx) => (
                <motion.div
                  key={idx}
                  variants={float}
                  animate="animate"
                  transition={{ delay: idx * 0.2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-white p-6 rounded-2xl shadow-lg ${idx % 2 !== 0 ? 'mt-8' : ''}`}
                >
                  <div className={`w-full h-40 bg-linear-to-br ${product.gradient} rounded-lg flex items-center justify-center`}>
                    <Package size={48} className={product.color} />
                  </div>
                  <p className="mt-4 font-semibold text-center">{product.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};