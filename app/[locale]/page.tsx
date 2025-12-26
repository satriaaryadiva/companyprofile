// src/app/[locale]/page.tsx
'use client';

 
import {
  HeroSection,
  AboutSection,
  Navigation,
  ProductsSection,
  Footer,
  PartnershipSection,
  DistributionSection,
  CertificationSection
} from '@/components/ui/index';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <PartnershipSection />
      <DistributionSection />
      <CertificationSection />
      <Footer />
    </div>
  );
}