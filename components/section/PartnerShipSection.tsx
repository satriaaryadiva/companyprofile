'use client';

import React from 'react';
import { Users, Globe, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Section, Container, SectionTitle, PartnershipCard, ContactInfo } from '../ui';

export const PartnershipSection: React.FC = () => {
  const t = useTranslations('partnership');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Section id="kemitraan" bgColor="bg-white">
      <Container>
        <SectionTitle title={t('title')} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants}>
            <PartnershipCard
              icon={Users}
              title={t('supplier.title')}
              description={t('supplier.description')}
              iconBg="bg-blue-100"
              iconColor="text-blue-600"
              buttonVariant="primary"
              onButtonClick={() => window.open('https://wa.me/6281260468888', '_blank')}
              contacts={
                <>
                  <ContactInfo icon={MapPin}>
                    Jln. Pasar 7 Tionghoa No. 68, Hamparan Perak, Deli Serdang 20374
                  </ContactInfo>
                  <ContactInfo icon={Phone}>
                    +62 61 8826538 / +62 812 6046 888
                  </ContactInfo>
                </>
              }
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <PartnershipCard
              icon={Globe}
              title={t('distribution.title')}
              description={t('distribution.description')}
              iconBg="bg-green-100"
              iconColor="text-green-600"
              buttonVariant="secondary"
              onButtonClick={() => window.open('https://wa.me/6281260468888', '_blank')}
              contacts={
                <>
                  <ContactInfo icon={Phone} iconColor="text-green-600">
                    +62 61 8826538 / +62 812 6046 888
                  </ContactInfo>
                  <ContactInfo icon={Mail} iconColor="text-green-600">
                    <div>
                      <div>desiyenrusindo@gmail.com</div>
                      <div>ptrusindo68@gmail.com</div>
                    </div>
                  </ContactInfo>
                </>
              }
            />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};