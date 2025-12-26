'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Section, Container, SectionTitle, CertificationCard } from '../ui';

export const CertificationSection: React.FC = () => {
  const t = useTranslations('certification');

  const certifications = [
    {
      title: t('iso.title'),
      description: t('iso.description'),
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      title: t('haccp.title'),
      description: t('haccp.description'),
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      title: t('award.title'),
      description: t('award.description'),
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Section id="sertifikasi" bgColor="bg-white">
      <Container>
        <SectionTitle 
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {certifications.map((cert, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <CertificationCard
                title={cert.title}
                description={cert.description}
                iconBg={cert.iconBg}
                iconColor={cert.iconColor}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};