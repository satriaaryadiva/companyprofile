/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useEffect, useRef } from 'react';
import { ChevronRight, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button, Container, ProductCarousel, Section } from '../ui';
import { container, float, item } from '../motions/motion';
import { useRouter } from 'next/navigation'; // ✅ PERBAIKAN

export const HeroSection: React.FC = () => {
  const t = useTranslations('hero');
  const router = useRouter();
  const tProducts = useTranslations('products');

  const products = [
    { name: tProducts('instantNoodles'), img: '/products/noodle.webp' },
    { name: tProducts('snacks'), img: '/products/snack.webp' },
    { name: tProducts('sauce'), img: '/products/sauce.webp' },
    { name: tProducts('stickyNoodles'), img: '/products/lidi.webp' },
  ];

  return (
    <Section
      id="home"
      className="relative pt-10 min-h-screen flex items-center bg-center bg-no-repeat bg-cover overflow-hidden"
      style={{ backgroundImage: "url('/main.webp')" }}
    >
      {/* 🔥 Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/50 to-black/90" />

      {/* Glow Accent */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-10 w-96 h-96 bg-(--primary) blur-[130px] rounded-full"
        />
      </div>

      <Container className="relative z-10 py-20 md:px20">
        <div className="grid md:grid-cols-2 gap-16">

          {/* 📱 MOBILE CAROUSEL */}
          <ProductCarousel products={products} />

          {/* 💻 DESKTOP GRID */}
          <div className="hidden order-1 md:order-2 md:block md:pl-6">
            <div className="grid grid-cols-2 gap-5">
              {products.map((product, idx) => (
                <motion.div
                  key={idx}
                  variants={float}
                  animate="animate"
                  transition={{ delay: idx * 0.2 }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  className={`bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${idx % 2 !== 0 ? 'mt-8' : ''}`}
                >
                  <div className="w-full h-40 bg-linear-to-br from-(--primary)/20 to-black rounded-lg flex items-center justify-center">
                    <Package size={48} className="text-white/80" />
                  </div>
                  <p className="mt-4 font-semibold text-center text-white">{product.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ✍️ TEXT */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.h1 variants={item} className="text-4xl  md:pl-5 md:text-5xl font-extrabold mb-8 drop-shadow-xl text-background leading-tight">
              {t('title')}
            </motion.h1>

            <motion.p variants={item} className="text-lg md:text-xl font-medium text-white/90 mb-10 leading-relaxed max-w-lg">
              {t('subtitle')}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <Button variant='primary'
                onClick={() => router.push('/produk')}
                className="bg-(--primary) text-black font-bold hover:bg-white hover:text-black transition-all"
                size="lg"
              >
                {t('viewProducts')} <ChevronRight size={20} />
              </Button>

              <Button variant='nav'
                onClick={() => router.push('/contact')}
                 
                size="lg"
              >
                {t('contactUs')}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
