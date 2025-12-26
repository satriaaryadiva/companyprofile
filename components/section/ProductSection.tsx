'use client';

import React from 'react';
import { Package } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Section, Container, SectionTitle, ProductCard } from '../ui';
import { container, item } from '../motions/motion';

export const ProductsSection: React.FC = () => {
  const t = useTranslations('products');

  const products = [
    { name: t('instantNoodles'), gradient: 'from-blue-400 to-blue-600' },
    { name: t('stickyNoodles'), gradient: 'from-yellow-400 to-yellow-600' },
    { name: t('sauce'), gradient: 'from-red-400 to-red-600' },
    { name: t('snacks'), gradient: 'from-green-400 to-green-600' }
  ];

   
  return (
    <Section id="produk" bgColor="bg-gray-50">
      <Container>
        <SectionTitle 
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product, idx) => (
            <motion.div key={idx} variants={item}>
              <ProductCard
                name={product.name}
                gradient={product.gradient}
                icon={Package}
                onClick={() => console.log(`Clicked: ${product.name}`)}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};