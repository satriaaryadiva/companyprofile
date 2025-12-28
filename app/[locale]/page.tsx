// src/app/[locale]/page.tsx
'use client';

 
import {
  HeroSection,
  AboutSection,
 
  ProductsSection,
 
  PartnershipSection,
  DistributionSection,
  CertificationSection
} from '@/components/ui/index';

export default function Home() {
  return (
    <div className="min-h-screen">
    
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <PartnershipSection />
      <DistributionSection />
      <CertificationSection />
     
    </div>
  );
}