'use client';

 
import { Navigation } from '@/components/ui';
import { Footer } from '@/components/layout/Footer';
import {
  HeroSection,
  AboutSection,
  ProductsSection,
  PartnershipSection,
  DistributionSection,
  CertificationSection
} from "@/components/ui";

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