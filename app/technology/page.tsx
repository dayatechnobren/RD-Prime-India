"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TechnologyPage() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Technology Behind Our Plastic Manufacturing
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Our production facility uses industry-grade machinery, advanced
          molding technologies, and high-performance raw materials to manufacture
          durable, precise, and reliable plastic components for industrial,
          automotive, electrical, and engineering applications.
        </p>
      </div>

      {/* Technology Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            title: "Injection Molding",
            desc: "High-pressure injection molding machines are used to produce consistent, highly durable components such as bushes, caps, washers, and precision parts. This process ensures perfect dimensional accuracy and excellent surface finish.",
            icon: "/injection-molding.jpeg",
          },
          {
            title: "Extrusion Technology",
            desc: "Extrusion is used to manufacture packing rope, seals, and plastic profiles. The process melts raw polymers and forms them into continuous shapes, ensuring strength, uniformity, and resistance to wear.",
            icon: "/extrusion.webp",
          },
          {
            title: "Compression & Transfer Molding",
            desc: "Used for rubber and polyurethane components such as heavy-duty bushes and vibration mounts. This method gives products exceptional load-bearing and impact-resistance performance.",
            icon: "/compression-molding.jpeg",
          },
          {
            title: "CNC Finishing & Trimming",
            desc: "After molding, components are finished with CNC-guided trimming to ensure precision edges, smooth surfaces, and adherence to engineering tolerances required for industrial-grade performance.",
            icon: "/cnc-machine.jpg",
          },
          {
            title: "Raw Material Processing",
            desc: "We work with premium polymers such as Nylon (PA6), Polypropylene (PP), Polyethylene (HDPE), Polyurethane (PU), Silicone, NBR, EPDM, and PVC. Each material undergoes drying, mixing, filtration, and quality checks before production.",
            icon: "/raw-materials.jpg",
          },
          {
            title: "Quality Inspection & Testing",
            desc: "Every product is tested for strength, flexibility, heat resistance, chemical stability, and durability. Our testing system ensures components perform flawlessly under industrial and mechanical stress.",
            icon: "/quality-testing.jpeg",
          },
        ].map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden"
          >
            <div className="relative w-full h-56">
              <Image
                src={tech.icon}
                alt={tech.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                {tech.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {tech.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Closing Section */}
      <div className="mt-20 text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-4"
        >
          Engineered for Industrial Performance
        </motion.h2>

        <p className="text-gray-600 text-lg">
          By combining advanced manufacturing technologies with high-grade 
          materials, we deliver components that set benchmarks in durability, 
          precision, and long-term performance across multiple industries.
        </p>
      </div>
    </section>
  );
}
