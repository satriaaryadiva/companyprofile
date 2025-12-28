'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Building2, Users, Award, Target } from 'lucide-react';

import { Container, Section, Card } from '@/components/ui';
import { container, item } from '@/components/motions/motion';
 
import FadeCarousel from '@/components/ui/CarauselHero';

export default function AboutPage() {
  const t = useTranslations('pages.about');
  const tAbout = useTranslations('about');


  

const carouselImages = [
  { src: "/hero.webp", title: "PT. Rusindo", desc: "Kualitas, inovasi, dan kepercayaan sejak 1981" },
  { src: "/product.webp", title: "Modern Facility", desc: "Produksi bertaraf internasional" },
  { src: "/hero.webp", title: "Better Process", desc: "Standar kualitas terjamin dan tersertifikasi" },
];

  const highlights = [
    { icon: Building2, title: t('facility.title'), description: t('facility.content') },
    { icon: Users, title: t('team.title'), description: t('team.content') },
    { icon: Target, title: tAbout('vision.title'), description: tAbout('vision.content') },
    { icon: Award, title: 'Excellence', description: 'Komitmen pada kualitas & inovasi berkelanjutan' }
  ];

  return (
    <div className="min-h-screen bg-white text-[#171717]">
      
      {/* ===== HERO ===== */}
      <Section
        id="about-hero"
        className="relative h-[60vh] md:h-[70vh] bg-center bg-cover bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

        {/* Glow kuning brand */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-10 bottom-0 w-80 h-80 bg-[#ffcb04]/40 blur-[120px] rounded-full"
          />
        </div>

        {/* Content Text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative text-center max-w-3xl px-6"
        >
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
          >
            {t('title')}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-white/90 text-lg md:text-xl leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>
      </Section>

      {/* ===== COMPANY HISTORY ===== */}
      <Section className="py-20 bg-[#171717] text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-3xl font-bold mb-4 text-[#ffcb04]">{t('history.title')}</h3>
            <p className="text-white/80 text-lg leading-relaxed">{t('history.content')}</p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14">
            {[
              { val: '1981', label: 'Tahun Didirikan' },
              { val: '30,000m²', label: 'Area Produksi' },
              { val: '2012', label: 'Ekspansi Internasional' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="text-center"
              >
                <h4 className="text-4xl font-extrabold text-[#ffcb04]">{stat.val}</h4>
                <p className="text-white/70 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
      <FadeCarousel images={carouselImages}

      />
      {/* ===== HIGHLIGHTS ===== */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="w-full"
              >
                <Card hover className="p-8 border border-[#ffcb04]/30 hover:border-[#ffcb04] transition">
                  <div className="flex items-center gap-4 mb-4">
                    <item.icon className="text-[#ffcb04]" size={42} />
                    <h4 className="text-xl font-bold">{item.title}</h4>
                  </div>
                  <p className="text-[#171717]/80 leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
