// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import './globals.css';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rusindo",
  description: "Food Industry & Distribution",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={`${montserrat.variable} font-sans bg-background text-foreground`} suppressHydrationWarning >
        {children}
      </body>
    </html>
  );
}
