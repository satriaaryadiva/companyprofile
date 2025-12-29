'use client';

 
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Building2, Users, Award, Target, PersonStandingIcon } from 'lucide-react';

import { Container, Section, Card } from '@/components/ui';
import { container, item, } from '@/components/motions/motion';
 
import FadeCarousel from '@/components/ui/CarauselHero';

export default function AboutPage() {
  const t = useTranslations('pages.about');
  const tAbout = useTranslations('about');


  

const carouselImages = [
  { src: "/about/about1.webp", title:t('history.title'), desc:t('history.content') },
  { src: "/about/about2.webp", title: t('facility.title'), desc: t('facility.content') },
  { src: "/about/about3.webp", title: t('team.title'), desc: t('team.content') },
  { src: "/about/about4.webp", title: tAbout('quality.title'), desc: tAbout('quality.content') },
];

  const highlights = [
    { icon: Building2, title: tAbout('values.commitment.title'), description: tAbout('values.commitment.desc') },
    { icon: Users, title:  tAbout('values.integrity.title'), description: tAbout('values.integrity.desc')   },
    { icon: Target, title: tAbout('values.quality.title'), description: tAbout('values.quality.desc') },
    { icon: Award, title:  tAbout('values.innovation.title'), description:  tAbout('values.innovation.desc') },
    { icon:  PersonStandingIcon, title:  tAbout('values.leadership.title'), description:  tAbout('values.leadership.desc') },
  ];

  return (
    <div className="min-h-screen bg-white text-[#171717]">
      
      {/* ===== HERO ===== */}
      <Section
        id="about-hero"
        className="relative  min-h-screen bg-fixed bg-center bg-cover bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/about.webp')" }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[1px]" />

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
     <Section className="py-24 bg-[#171717] text-white relative overflow-hidden">
  {/* Decorative gradient glow */}
  <div className="absolute inset-0 bg-linear-to-b from-[#ffcb04]/10 to-transparent pointer-events-none" />

  <Container>
    {/* Sejarah */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto text-center"
    >
      <h3 className="text-4xl font-extrabold mb-5 bg-linear-to-r from-[#ffcb04] to-white bg-clip-text text-transparent tracking-wide">
        {t("history.title")}
      </h3>
      <p className="text-white/80 text-lg leading-relaxed">
        {t("history.content")}
      </p>
    </motion.div>

    {/* Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-16">
      {[
        { val: "1981", label: tAbout("yearsExperience") ?? "Tahun Didirikan" },
        { val: "30,000m²", label: t("facility.content") ?? "Area Produksi" },
        { val: tAbout("expand.title"), label:  tAbout("expand.desc") },
      ].map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.15 }}
          className="text-center"
        >
          <h4 className="text-5xl font-black text-[#ffcb04] drop-shadow-md">
            {stat.val}
          </h4>
          <p className="text-white/60 mt-3 font-bold text-sm uppercase tracking-wide">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Visi & Misi */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-24">
      {/* Visi */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl"
      >
        <h4 className="text-3xl font-bold text-[#ffcb04] mb-4">
          {tAbout("vision.title")}
        </h4>
        <p className="text-white/80 leading-relaxed">
          {tAbout("vision.content")}
        </p>
      </motion.div>

      {/* Misi */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl"
      >
        <h4 className="text-3xl font-bold text-[#ffcb04] mb-4">
          {tAbout("mission.title")}
        </h4>
        <ul className="space-y-3 text-white/80">
          {[1,2,3,4].map(i => (
            <li key={i} className="flex gap-3 items-start">
              <span className="text-[#ffcb04] font-bold">▹</span>
              {tAbout(`mission.item${i}`)}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </Container>
</Section>

      <FadeCarousel images={carouselImages}

      />
      {/* ===== HIGHLIGHTS ===== */}
      <Section className="py-20 bg-white">
        <Container>
          <motion.h2 variants={item} className="text-3xl font-bold mb-4 text-foreground">{tAbout('values.title')}</motion.h2>
          <div className="grid md:grid-cols-2 align-middle gap-8 lg:gap-12">
            
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
                <Card hover className="p-8   border-foreground border-8 hover:border-[#ffcb04] transition">
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
