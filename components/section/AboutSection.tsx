'use client';

import React from 'react';
import { ChevronRight, Award } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Section, Container, SectionTitle, Card, ValueCard } from '../ui';
import { container, item } from '../motions/motion';

export const AboutSection: React.FC = () => {
  const t = useTranslations('about');

  const missions = [
    t('mission.item1'),
    t('mission.item2'),
    t('mission.item3'),
    t('mission.item4')
  ];

  const values = [
    {
      title: t('values.commitment.title'),
      description: t('values.commitment.desc')
    },
    {
      title: t('values.integrity.title'),
      description: t('values.integrity.desc')
    },
    {
      title: t('values.innovation.title'),
      description: t('values.innovation.desc')
    },
    {
      title: t('values.leadership.title'),
      description: t('values.leadership.desc')
    },
    {
      title: t('values.quality.title'),
      description: t('values.quality.desc')
    }
  ];
 
  return (
    <Section id="tentang" bgColor="bg-white">
      <Container>
        <SectionTitle title={t('title')} />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <motion.div variants={item}>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t('description1')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t('description2')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('description3')}
            </p>
          </motion.div>
          <motion.div 
            variants={item}
            className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8 }}
                className="text-6xl font-bold text-blue-600 mb-2"
              >
                40+
              </motion.div>
              <p className="text-xl text-gray-700">{t('yearsExperience')}</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <motion.div variants={item}>
            <Card>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('vision.title')}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('vision.content')}
              </p>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('mission.title')}</h3>
              <ul className="space-y-3 text-gray-700">
                {missions.map((mission, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ChevronRight className="text-blue-600 mt-1 shrink-0" size={20} />
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </motion.div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('values.title')}</h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {values.map((value, idx) => (
              <motion.div key={idx} variants={item}>
                <ValueCard
                  icon={Award}
                  title={value.title}
                  description={value.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};