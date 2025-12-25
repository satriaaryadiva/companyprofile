import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { routing } from '@/routing';

 
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
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}