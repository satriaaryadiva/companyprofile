import React from 'react';
import { Section, Container, SectionTitle, CertificationCard } from '../ui';

interface Certification {
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

export const CertificationSection: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: 'ISO',
      description: 'Standar sistem manajemen yang memastikan proses operasional berjalan secara terstruktur dan konsisten',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      title: 'HACCP',
      description: 'Sistem jaminan keamanan pangan yang mengidentifikasi, mengevaluasi, dan mengendalikan potensi bahaya',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      title: 'Product & Brand Award 2018',
      description: 'Penghargaan dari Kementerian sebagai bentuk apresiasi atas kualitas produk dan brand',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    }
  ];

  return (
    <Section id="sertifikasi" bgColor="bg-white">
      <Container>
        <SectionTitle 
          title="Sertifikasi & Penghargaan"
          subtitle="Komitmen terhadap kualitas, keamanan pangan, dan profesionalisme dalam menjalankan usaha"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <CertificationCard
              key={idx}
              title={cert.title}
              description={cert.description}
              iconBg={cert.iconBg}
              iconColor={cert.iconColor}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
