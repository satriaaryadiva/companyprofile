import React from 'react';
import { Users, Globe, Phone, Mail, MapPin } from 'lucide-react';
import { Section, Container, SectionTitle, PartnershipCard, ContactInfo } from '../ui';

export const PartnershipSection: React.FC = () => {
  return (
    <Section id="kemitraan" bgColor="bg-white">
      <Container>
        <SectionTitle title="Business Relationship" />

        <div className="grid md:grid-cols-2 gap-8">
          <PartnershipCard
            icon={Users}
            title="Kemitraan dengan Supplier"
            description="PT. Rusindo Prima Food Industri membuka peluang kerja sama jangka panjang dengan supplier yang mampu memenuhi standar kualitas dan persyaratan bahan baku perusahaan."
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

          <PartnershipCard
            icon={Globe}
            title="Pemasaran & Distribusi"
            description="PT. Rusindo Prima Food Industri membuka peluang kerja sama pemasaran dan distribusi dengan mitra di seluruh Indonesia maupun mancanegara."
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
        </div>
      </Container>
    </Section>
  );
};