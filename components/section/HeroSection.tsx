'use client';

import { motion } from "framer-motion";
import { container, item, float } from "../motions/motion" 
import { ChevronRight, Package } from "lucide-react";
import { Button, Container, Section } from "../ui";

export const HeroSection = () => {
  const products = [
    { name: "Mie Instan", gradient: "from-blue-100 to-blue-200", color: "text-blue-600" },
    { name: "Snack", gradient: "from-green-100 to-green-200", color: "text-green-600" },
    { name: "Saus", gradient: "from-red-100 to-red-200", color: "text-red-600" },
    { name: "Mie Lidi", gradient: "from-yellow-100 to-yellow-200", color: "text-yellow-600" },
  ];

  return (
    <Section
      id="home"
      className="pt-20 min-h-screen flex items-center"
      bgColor="bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="absolute inset-0 opacity-10">
        <motion.div
          variants={float}
          animate="float"
          className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          variants={float}
          animate="float"
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
        />
      </div>

      <Container className="py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Distributor FMCG Terpercaya untuk Kebutuhan Bisnis dan Konsumen Indonesia
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              PT. Rusindo Prima Food Industri menyediakan berbagai produk makanan dan minuman
              dengan harga kompetitif, distribusi stabil, dan jangkauan luas di seluruh Indonesia.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() =>
                  document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Lihat Produk <ChevronRight size={20} />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.open("https://wa.me/6281260468888", "_blank")}
              >
                Hubungi Kami
              </Button>
            </motion.div>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {products.map((product, idx) => (
                <motion.div
                  key={product.name}
                  variants={float}
                  animate="float"
                  whileHover={{ scale: 1.05 }}
                  className={`bg-white p-6 rounded-2xl shadow-lg ${
                    idx % 2 !== 0 ? "mt-8" : ""
                  }`}
                >
                  <div
                    className={`w-full h-40 bg-linear-to-br ${product.gradient} rounded-lg flex items-center justify-center`}
                  >
                    <Package size={48} className={product.color} />
                  </div>
                  <p className="mt-4 font-semibold text-center">{product.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
