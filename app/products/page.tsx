"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Packing",
    desc: "High-quality industrial packing materials designed for effective sealing in pumps, valves, and rotating equipment. Made from premium graphite, PTFE, or synthetic fibers to ensure maximum chemical resistance and durability.",
    img: "/gaskets.jpg",
    specs: [
      "Excellent thermal and chemical resistance",
      "Suitable for high-pressure applications",
      "Available in multiple materials and sizes",
    ],
  },
  {
    id: 2,
    title: "Plastic Bush",
    desc: "Durable plastic bushes designed to reduce friction and wear between mechanical parts. Ideal for automotive, machinery, and industrial applications requiring smooth rotation and insulation.",
    img: "/rollers.jpg",
    specs: [
      "Made from high-strength engineering polymers",
      "Corrosion and abrasion resistant",
      "Lightweight with excellent self-lubrication",
    ],
  },
  {
    id: 3,
    title: "Bush",
    desc: "Premium polyurethane (PU) and rubber bushes used for vibration damping and load absorption in machines and vehicles. Enhances stability and reduces mechanical stress.",
    img: "/bushings.jpg",
    specs: [
      "Superior vibration and shock absorption",
      "Weather and oil resistant",
      "Long service life under heavy loads",
    ],
  },
  {
    id: 4,
    title: "Flat Washer",
    desc: "Precision-engineered flat washers designed to evenly distribute load and prevent damage to surfaces. Ideal for use with bolts, nuts, and screws in mechanical assemblies.",
    img: "/flatWarser.jpg",
    specs: [
      "Made from stainless steel, nylon, or brass",
      "Prevents loosening and surface wear",
      "Available in multiple thicknesses and diameters",
    ],
  },
  {
    id: 5,
    title: "Oil Seal",
    desc: "High-performance oil seals that prevent lubricant leakage and protect mechanical components from dust and contaminants. Widely used in automotive and industrial machinery.",
    img: "/oilSeal.jpg",
    specs: [
      "Excellent sealing performance under pressure",
      "Resistant to oil, grease, and heat",
      "Available in NBR, Viton, and silicone materials",
    ],
  },
  {
    id: 6,
    title: "O-Ring",
    desc: "Reliable rubber O-rings designed for static and dynamic sealing applications. Suitable for hydraulic, pneumatic, and general-purpose sealing requirements.",
    img: "/oring.jpg",
    specs: [
      "Available in NBR, EPDM, Silicone, and Viton",
      "Provides superior leak-proof sealing",
      "Custom sizes and hardness available",
    ],
  },
  {
    id: 7,
    title: "Packing Rope",
    desc: "High-quality gland packing rope made for sealing pumps, valves, and rotating shafts. Ensures leak-free performance under high pressure and temperature conditions.",
    img: "/packing.jpg",
    specs: [
      "Made from graphite, PTFE, or aramid fiber",
      "Excellent chemical and thermal resistance",
      "Reduces maintenance and downtime",
    ],
  },
  {
    id: 8,
    title: "Plastic Cap",
    desc: "Durable plastic caps designed to seal and protect pipe ends, bolts, and fittings. Prevents contamination and damage during transport or storage.",
    img: "/plasticCap.jpg",
    specs: [
      "Made from high-grade polyethylene or PVC",
      "UV and impact resistant",
      "Available in multiple sizes and colors",
    ],
  },
  {
    id: 9,
    title: "Silicon Packing",
    desc: "Flexible and heat-resistant silicone packing ideal for sealing ovens, autoclaves, and industrial machinery. Provides superior sealing at high temperatures.",
    img: "/siliconPacking.jpg",
    specs: [
      "High temperature and weather resistance",
      "Non-toxic and food-grade options available",
      "Excellent flexibility and compression set resistance",
    ],
  },
  {
    id: 10,
    title: "Wire Cap",
    desc: "Protective wire caps used to insulate and secure electrical connections. Ensures safety and prevents short circuits in wiring systems.",
    img: "/wireCap.jpg",
    specs: [
      "Made from flame-retardant plastic",
      "Secure twist-on design",
      "Available in various colors and sizes",
    ],
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
            transition={{ duration: 0.6, delay: i * 0.05 }}
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
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
              >
                Enquire Now
              </motion.button> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
