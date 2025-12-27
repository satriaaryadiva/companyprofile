"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductCarouselProps {
  products: {
    name: string;
    img: string;
  }[];
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [pause, setPause] = useState(false);

  // 🌀 Auto Slide
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (!pause) {
        el.scrollBy({ left: 260, behavior: "smooth" });
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [pause]);

  return (
    <div
      ref={carouselRef}
      className="
        flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory
        pb-4 scrollbar-none md:hidden
      "
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      {products.map((product, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="
            min-w-57.5 snap-center bg-white/90 shadow-xl
            p-4 rounded-2xl border border-white/20 backdrop-blur-sm
          "
        >
          <div className="relative w-full h-36 rounded-xl overflow-hidden bg-gray-100">
            <Image src={product.img} alt={product.name} fill className="object-cover" />
          </div>
          <p className="mt-4 font-semibold text-center text-gray-900 font-montserrat">
            {product.name}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductCarousel;
