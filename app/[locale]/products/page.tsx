/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

import { Container, Section, Button, ProductCard } from '@/components/ui';
import { ProductModal } from '@/components/ui/ProductModal';
import { container, item } from '@/components/motions/motion';

export default function ProductsPage() {
  const t = useTranslations('pages.products');
  const tProducts = useTranslations('products');

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const categories = [
    { id: 'all', name: t('allProducts') },
    { id: 'noodles', name: tProducts('instantNoodles') },
    { id: 'sticky', name: tProducts('stickyNoodles') },
    { id: 'sauce', name: tProducts('sauce') },
    { id: 'snacks', name: tProducts('snacks') }
  ];

  const products = [
    { id: 1, name: 'Mie Instan Rasa Ayam', category: 'noodles', gradient: 'from-blue-400 to-blue-600', desc: 'Mie instan rasa ayam', pack: '70g' },
    { id: 2, name: 'Mie Soto Nusantara', category: 'noodles', gradient: 'from-blue-400 to-blue-600', desc: 'Mie rasa soto khas Indonesia', pack: '70g' },
    { id: 3, name: 'Mie Lidi Original', category: 'sticky', gradient: 'from-yellow-400 to-yellow-600', desc: 'Camilan klasik renyah', pack: '50g' },
    { id: 4, name: 'Mie Lidi Pedas', category: 'sticky', gradient: 'from-yellow-400 to-yellow-600', desc: 'Pedas gurih bikin nagih', pack: '50g' },
    { id: 5, name: 'Saus Sambal Pedas', category: 'sauce', gradient: 'from-red-400 to-red-600', desc: 'Saus sambal pedas mantap', pack: '340ml' },
    { id: 6, name: 'Saus Tomat Premium', category: 'sauce', gradient: 'from-red-400 to-red-600', desc: 'Tomat segar kualitas terbaik', pack: '340ml' },
    { id: 7, name: 'Wafer Coklat', category: 'snacks', gradient: 'from-green-400 to-green-600', desc: 'Wafer coklat lembut', pack: '150g' },
    { id: 8, name: 'Wafer Vanilla', category: 'snacks', gradient: 'from-green-400 to-green-600', desc: 'Rasa vanilla klasik', pack: '150g' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <Section
        id="home"
        className="relative pt-32 h-screen  bg-fixed flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/product.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="px-20 sm:px-40 text-center relative"
        >
          <motion.h1 variants={item} className="text-white text-5xl font-extrabold drop-shadow-xl">
            {t('title')}
          </motion.h1>
          <motion.p variants={item} className="mt-6 text-xl text-white drop-shadow">
            {t('description')}
          </motion.p>
        </motion.div>
      </Section>

      {/* CATEGORY & PRODUCTS */}
      <Section bgColor="bg-background md:py-20 py-10">
        <Container>
          <motion.h2 variants={item} className="text-center text-4xl font-extrabold mb-10">
            {t('subtitle')}
          </motion.h2>

          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'nav' : 'ghost'}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
                <ProductCard
                  name={product.name}
                  gradient={product.gradient}
                  icon={Package}
                  onClick={() => setSelectedProduct(product)}
                />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* MODAL */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}
