"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Industrial Gaskets & Seals",
    desc: "High-quality rubber and polymer gaskets designed for leak-proof sealing in industrial applications. Available in multiple sizes and shapes for versatile use.",
    img: "/gaskets.jpg", // rename uploaded IMG-20250929-WA0017.jpg → gaskets.jpg
    specs: ["Durable material", "Heat & chemical resistant", "Custom sizes available"],
  },
  {
    id: 2,
    title: "Polyurethane Rollers & Wheels",
    desc: "Heavy-duty PU rollers for smooth performance in material handling, conveyor systems, and industrial machines.",
    img: "/rollers.jpg", // rename IMG-20250929-WA0018.jpg → rollers.jpg
    specs: ["High load capacity", "Low wear & tear", "Noise reduction design"],
  },
  {
    id: 3,
    title: "Polyurethane Bushings",
    desc: "Strong and reliable PU bushings for vibration control and extended machinery life. Ideal for automotive and industrial uses.",
    img: "/bushings.jpg", // rename IMG-20250929-WA0021.jpg → bushings.jpg
    specs: ["Excellent shock absorption", "Corrosion resistant", "Long-lasting durability"],
  },
];

export default function ProductDetails() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Product Range
      </h2>

      <div className="space-y-16 max-w-6xl mx-auto">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative w-full h-80">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="p-8">
              <h3 className="text-3xl font-semibold mb-4">{p.title}</h3>
              <p className="text-gray-600 mb-6">{p.desc}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                {p.specs.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
              >
                Enquire Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
