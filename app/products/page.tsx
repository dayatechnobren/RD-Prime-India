"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const baseProducts = [
  { id: 1, title: "Packing", img: "/gaskets.jpg" },
  { id: 2, title: "Plastic Bush", img: "/rollers.jpg" },
  { id: 3, title: "Bush", img: "/bushings.jpg" },
  { id: 4, title: "Flat Washer", img: "/flatWarser.jpg" },
  { id: 5, title: "Oil Seal", img: "/oilSeal.jpg" },
  { id: 6, title: "O-Ring", img: "/oring.jpg" },
  { id: 7, title: "Packing Rope", img: "/packing.jpg" },
  { id: 8, title: "Plastic Cap", img: "/plasticCap.jpg" },
  { id: 9, title: "Silicon Packing", img: "/siliconPacking.jpg" },
  { id: 10, title: "Wire Cap", img: "/wireCap.jpg" },
];

// generate img11 → img46
const extraProducts = Array.from({ length: 36 }, (_, i) => ({
  id: i + 11,
  title: "Product " + (i + 11),
  img: `/img${i + 11}.jpeg`,
}));

const products = [...baseProducts, ...extraProducts];

export default function ProductDetails() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Product Range
      </h2>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="relative w-full h-56">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold">{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}