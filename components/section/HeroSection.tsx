/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useEffect, useRef } from 'react';
import { ChevronRight, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button, Container, ProductCarousel, Section } from '../ui';
import { container, float, item } from '../motions/motion';
import { b } from 'framer-motion/client';
  

export const HeroSection: React.FC = () => {
  const t = useTranslations('hero');
  const tProducts = useTranslations('products');
  const carouselRef = useRef<HTMLDivElement>(null);

  const products = [
    { name: tProducts('instantNoodles'), img: '/products/noodle.webp' },
    { name: tProducts('snacks'), img: '/products/snack.webp' },
    { name: tProducts('sauce'), img: '/products/sauce.webp' },
    { name: tProducts('stickyNoodles'), img: '/products/lidi.webp' },
  ];

  // AUTO SLIDE (Mobile)
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const interval = setInterval(() => {
      el.scrollBy({ left: 260, behavior: 'smooth' });
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section
      id="home"
      className="relative pt-10 min-h-screen  bg-fixed flex items-center bg-center bg-no-repeat bg-cover overflow-hidden"
      style={{ backgroundImage: "url('/hero.webp')" ,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
         
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/50" />

      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.32, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-10 w-96 h-96 bg-(--primary) blur-[100px] rounded-full"
        />

      </div>

      <Container className="relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-14">

          {/* 🟣 MOBILE CAROUSEL */}
          <ProductCarousel  products={products} />

          {/* 💻 DESKTOP GRID */}
          <div className="order-1 md:order-2 hidden md:block md:pl-6">
            <div className="grid grid-cols-2 gap-5">
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
                  <div className={`w-full h-40 bg-linear-to-br   rounded-lg flex items-center justify-center`}>
                    <Package size={48}  />
                  </div>
                  <p className="mt-4 font-semibold text-center">{product.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* TEXT AREA */}
          <motion.div variants={container} initial="hidden" animate="visible" className="order-2 md:order-1">
            <motion.h1 variants={item} className="text-4xl text-background md:text-5xl font-extrabold   mb-12 drop-shadow-xl font-montserrat">
              {t('title')}
            </motion.h1>

            <motion.p variants={item} className="text-lg md:text-xl pl-3 font-bold text-white  mb-10 leading-relaxed max-w-lg font-montserrat">
              {t('subtitle')}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <Button variant='primary' className="bg-(--primary) text-secondary font-extrabold hover:bg-(--secondary)" size="lg">
                {t('viewProducts')} <ChevronRight size={20} />
              </Button>
              <Button variant="nav" size="lg" className="border-white font-bold text-white hover:bg-white hover:text-black">
                {t('contactUs')}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
