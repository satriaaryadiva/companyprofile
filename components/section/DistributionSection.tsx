'use client';

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Section, Container, SectionTitle, Card, ContactInfo } from '../ui';

export const DistributionSection: React.FC = () => {
  const t = useTranslations('distribution');

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Section id="distribusi" bgColor="bg-gray-50">
      <Container>
        <SectionTitle title={t('title')} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          <motion.div variants={itemVariants}>
            <Card className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('description.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('description.paragraph1')}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('description.paragraph2')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('description.paragraph3')}
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-blue-50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('contactInfo')}
              </h3>
              <p className="font-semibold text-gray-900 mb-3">PT. Multi Agung Sukses (MAS)</p>
              <div className="space-y-2">
                <ContactInfo icon={MapPin}>
                  Jln. Pancing Komplek MMTC Blok G 1–2, Medan 20371
                </ContactInfo>
                <ContactInfo icon={Phone}>
                  +62 813 7607 8381 / +62 853 7271 8898
                </ContactInfo>
                <ContactInfo icon={Mail}>
                  wina.cynthia@yahoo.co.id
                </ContactInfo>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};