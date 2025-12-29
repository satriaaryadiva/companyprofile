 
"use client";

import React from "react";
import { ChevronRight, Award } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Section, Container, SectionTitle, ValueCard } from "../ui";
import { fadeUp, stagger } from "../motions/motion";

// ANIMASI


// PARALLAX BG
const ParallaxImage = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const offset = window.scrollY * 0.25;
      ref.current.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 -z-10 opacity-25"
      style={{
        backgroundImage: "url('/product.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        willChange: "transform"
      }}
    />
  );
};

export const AboutSection: React.FC = () => {
  const t = useTranslations("about");

  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const missions = [
    t("mission.item1"),
    t("mission.item2"),
    t("mission.item3"),
    t("mission.item4")
  ];

  const values = [
    { title: t("values.commitment.title"), description: t("values.commitment.desc") },
    { title: t("values.integrity.title"), description: t("values.integrity.desc") },
    { title: t("values.innovation.title"), description: t("values.innovation.desc") },
    { title: t("values.leadership.title"), description: t("values.leadership.desc") },
    { title: t("values.quality.title"), description: t("values.quality.desc") }
  ];

  return (
    <Section id="tentang" bgColor="bg-[#0D0D0D]">
      <div
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden"
        style={{
          background: `radial-gradient(5% 5% at ${pos.x}px ${pos.y}px, #ffcb04, #0D0D0D)`,
          transition: "background 0.1s",
        }}
      >
        {/* PARALLAX */}
        <ParallaxImage />

        <Container className="max-w-6xl py-20">

          {/* TITLE */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <SectionTitle
              title={t("title")}
              className="text-center text-5xl font-bold text-white tracking-tight"
            />
           
          </motion.div>

          {/* INTRO */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-20 items-center mb-32"
          >
            <motion.div variants={fadeUp} className="space-y-6 text-white/80 leading-relaxed">
              <p className="text-lg">{t("description1")}</p>
              <p className="text-lg">{t("description2")}</p>
              <p className="text-lg">{t("description3")}</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative rounded-4xl overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl bg-linear-to-brrom-black/40 to-black/20 group h-70 flex items-center justify-center"
              style={{
                backgroundImage: "url('/product.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/40 to-black/90 group-hover:via-black/60 transition-all duration-500" />

              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8 }}
                className="relative text-center"
              >
                <h2 className="text-8xl font-black text-white drop-shadow-[0_6px_30px_rgba(0,0,0,0.7)] tracking-tight">
                  40+
                </h2>
                <p className="text-lg text-white/70 mt-2 uppercase tracking-wider">
                  {t("yearsExperience")}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* VISION & MISSION */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-14 mb-32">
            <motion.div variants={fadeUp}>
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200 p-10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <h3 className="text-3xl font-semibold mb-4 text-gray-900">{t("vision.title")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("vision.content")}</p>
              </div>
            </motion.div>

            <motion.div  variants={stagger}>
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200 p-10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <h3 className="text-3xl font-semibold mb-4 text-gray-900">{t("mission.title")}</h3>
                <ul className="space-y-4 text-gray-700">
                  {missions.map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start group">
                      <ChevronRight className="text-blue-600 mt-1 group-hover:translate-x-1 transition-all" />
                      <span className="group-hover:text-gray-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* VALUES */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <h3 className="text-4xl font-bold text-center text-white mb-16 tracking-tight">
              {t("values.title")}
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
              {values.map((value, idx) => (
                <motion.div key={idx} variants={fadeUp}>
                  <ValueCard icon={Award} title={value.title} description={value.description} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>
    </Section>
  );
};
