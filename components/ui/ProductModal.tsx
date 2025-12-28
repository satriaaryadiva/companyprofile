/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import { modalBackdrop, modalContent } from "../motions/motion";

 

export function ProductModal({ product, onClose }: any) {
  return (
    <motion.div
      variants={modalBackdrop}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={onClose}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-999"
    >
      <motion.div
        variants={modalContent}
        onClick={(e) => e.stopPropagation()} // biar klik isi modal nggak auto close
        className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl relative"
      >
        {/* Close Button */}
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-foreground">{product.name}</h2>

        {/* Description */}
        <p className="text-gray-700 mt-2">{product.desc}</p>
        <p className="text-sm text-gray-500 mt-4">Packaging: {product.pack}</p>

        {/* CTA */}
        <button className="mt-6 w-full bg-foreground text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
          Lihat Detail Lengkap
        </button>
      </motion.div>
    </motion.div>
  );
}
