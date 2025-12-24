import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Section, Container, SectionTitle, Card, ContactInfo } from '../ui';

export const DistributionSection: React.FC = () => {
  return (
    <Section id="distribusi" bgColor="bg-gray-50">
      <Container>
        <SectionTitle title="Jaringan Distribusi" />

        <Card className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Distribusi Produk Rusindo</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Produk-produk PT. Rusindo Prima Food Industri didistribusikan melalui <strong>PT. Multi Agung Sukses (MAS)</strong> sebagai distributor tunggal resmi. PT. MAS didirikan pada tahun 2007 dan beroperasi untuk wilayah Sumatera Utara dan Aceh.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Seiring dengan pertumbuhan bisnis, PT. Multi Agung Sukses telah berkembang dan saat ini memiliki <strong>enam cabang</strong> yang tersebar di berbagai wilayah Provinsi Sumatera Utara.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Untuk memperluas jangkauan distribusi secara nasional, PT. Rusindo juga menjalin kerja sama dengan berbagai distributor besar di <strong>Surabaya, Kalimantan, Jakarta, Jawa Barat, Jawa Tengah, Makassar, dan Nusa Tenggara</strong>.
          </p>
        </Card>

        <Card className="bg-blue-50">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Informasi Kontak Distributor</h3>
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
      </Container>
    </Section>
  );
};