'use client';
export { Button } from './Button';
export { Card } from './Card';
export { SectionTitle } from '../section/SectionTitle';
export { Container } from  './Container'
export { Section } from '../section/Section';
export { ProductCard } from './ProductCard';
export { ValueCard } from './ValueCard';
export { CertificationCard } from './CertificationCard';
export { ContactInfo } from './ContactInfo';
export { AboutSection} from '../section/AboutSection'
export { IconBox } from './IconBox';
export { HeroSection } from '../section/HeroSection'
export { ProductsSection } from '../section/ProductSection'
export { PartnershipSection } from  "../section/PartnerShipSection"; 
export { DistributionSection } from '../section/DistributionSection'
export { CertificationSection } from '../section/CertificationSection';

 
export { PartnershipCard } from './PartnershipCard';

// ============================================
// FILE: src/components/layout/Navigation.js
// ============================================


import  { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Produk', href: '#produk' },
    { label: 'Kemitraan', href: '#kemitraan' },
    { label: 'Distribusi', href: '#distribusi' },
    { label: 'Sertifikasi', href: '#sertifikasi' }
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">RUSINDO</div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {item.label}
              </a>
            ))}
            <Button 
              size="md" 
              onClick={() => window.open('https://wa.me/6281260468888', '_blank')}
            >
              Hubungi Kami
            </Button>
          </div>

          <button 
            className="md:hidden" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="block text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};