import React from 'react';
import { Package } from 'lucide-react';
import { Section, Container, SectionTitle, ProductCard } from '../ui';

interface Product {
  name: string;
  gradient: string;
}

export const ProductsSection: React.FC = () => {
  const products: Product[] = [
    { name: 'Mie Instan', gradient: 'from-blue-400 to-blue-600' },
    { name: 'Mie Lidi', gradient: 'from-yellow-400 to-yellow-600' },
    { name: 'Saus', gradient: 'from-red-400 to-red-600' },
    { name: 'Snack & Wafer', gradient: 'from-green-400 to-green-600' }
  ];

  return (
    <Section id="produk" bgColor="bg-gray-50">
      <Container>
        <SectionTitle 
          title="Produk Kami"
          subtitle="Kami menyediakan berbagai produk FMCG yang mencakup mie instan, mie lidi, saus, dan aneka snack. Seluruh produk kami diproduksi dan didistribusikan dengan standar kualitas yang terjaga."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
              name={product.name}
              gradient={product.gradient}
              icon={Package}
              onClick={() => console.log(`Clicked: ${product.name}`)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};