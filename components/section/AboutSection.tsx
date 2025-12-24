import React from 'react';
import { ChevronRight, Award } from 'lucide-react';
import { Section, Container, SectionTitle, Card, ValueCard } from '../ui';

export const AboutSection: React.FC = () => {
  const missions = [
    'Menyediakan produk makanan dengan standar kualitas terbaik dan aman dikonsumsi',
    'Membangun sistem manajemen yang kuat, profesional, dan berkelanjutan',
    'Terus berinovasi secara konsisten untuk tetap kompetitif di pasar',
    'Memberikan dedikasi dan pelayanan terbaik guna memuaskan pelanggan'
  ];

  const values = [
    {
      title: 'Komitmen',
      description: 'Memastikan ketersediaan serta pengiriman produk yang tepat waktu sebagai bentuk tanggung jawab kepada mitra dan pelanggan'
    },
    {
      title: 'Integritas',
      description: 'Menjunjung tinggi kejujuran dan integritas dalam setiap aktivitas bisnis serta membangun hubungan yang dilandasi kepercayaan'
    },
    {
      title: 'Inovasi',
      description: 'Terus mendorong inovasi dalam pengembangan produk dan proses kerja agar tetap kompetitif dan relevan'
    },
    {
      title: 'Kepemimpinan',
      description: 'Membangun tim yang solid dan profesional, bekerja dalam kesatuan dan saling menghormati'
    },
    {
      title: 'Kualitas',
      description: 'Berfokus pada kualitas dalam setiap produk dan layanan untuk memberikan hasil terbaik'
    }
  ];

  return (
    <Section id="tentang" bgColor="bg-white">
      <Container>
        <SectionTitle title="Tentang Rusindo" />

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              PT. Rusindo Prima Food Industri berdiri sejak tahun <strong>1981</strong> dan berawal dari usaha rumahan yang berkembang menjadi perusahaan industri makanan dan distribusi FMCG.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Beroperasi di area seluas <strong>30.000 m²</strong> di Sumatera Utara, Rusindo memproduksi berbagai produk makanan berkualitas seperti wafer, snack, mie lidi, saus, dan produk lainnya.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Produk Rusindo telah didistribusikan secara luas ke pasar domestik dan sejak tahun <strong>2012</strong> juga menjangkau pasar internasional, termasuk Korea, Taiwan, Kamboja, dan Vietnam.
            </p>
          </div>
          <div className="bg-linear-to-brrom-blue-50 to-blue-100 rounded-2xl p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-600 mb-2">40+</div>
              <p className="text-xl text-gray-700">Tahun Pengalaman</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h3>
            <p className="text-gray-700 leading-relaxed">
              Menjadi salah satu perusahaan makanan terkemuka di Indonesia dengan menghadirkan produk-produk berkualitas tinggi yang dipercaya oleh konsumen dan mitra usaha.
            </p>
          </Card>

          <Card>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
            <ul className="space-y-3 text-gray-700">
              {missions.map((mission, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ChevronRight className="text-blue-600 mt-1 shrink-0" size={20} />
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nilai-Nilai Perusahaan</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <ValueCard
                key={idx}
                icon={Award}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};