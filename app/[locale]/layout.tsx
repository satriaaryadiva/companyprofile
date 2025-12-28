/* eslint-disable @typescript-eslint/no-unused-vars */
import { hasLocale, NextIntlClientProvider } from 'next-intl';
 
import { notFound } from 'next/navigation';
import '../globals.css'

import { routing } from '@/routing';
import { Footer, Navigation } from '@/components/ui';
import { Montserrat } from 'next/font/google';
 

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await params terlebih dahulu (Next.js 15+)
  const { locale } = await params;

  // Validasi locale
  if (!hasLocale(routing.locales, locale)) { {
    notFound();
  }}

  // Load messages untuk locale ini
  

  return (
   
      <NextIntlClientProvider locale={locale}  >
      <Navigation />
      {children}
      <Footer />
      </NextIntlClientProvider>
 
 
  );
}