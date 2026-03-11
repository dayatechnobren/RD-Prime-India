"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Plastic Bush",
    desc: "High-strength molded bush designed for smooth mechanical performance and long-lasting durability.",
    img: "/Product-1.jpg",
  },
  {
    id: 2,
    title: "Auto Parts",
    desc: "Precision-engineered plastic components built for mobility, engine support, and automotive assembly.",
    img: "/Product-2.jpg",
  },
  {
    id: 3,
    title: "Drone Canopy",
    desc: "Lightweight, aerodynamic canopy crafted to protect drone internals and enhance efficiency.",
    img: "/Product-3.jpg",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent backdrop-blur" />

        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg"
          >
            Innovation in{" "}
            <span className="text-blue-400">Plastic Components 🔧✨</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow"
          >
            Engineering high-precision plastic spare parts that power drones,
            automotive systems, machinery, and next-gen industrial solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mt-10 flex justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg font-medium"
            >
              Explore Products
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-white text-gray-900 hover:bg-gray-200 rounded-lg shadow-lg font-medium"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 md:px-20 bg-white text-gray-900">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="/about.jpg"
            alt="About Us"
            className="rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />

          <div>
            <h2 className="text-4xl font-bold mb-4">About RD Prime</h2>
            <p className="text-lg text-gray-600 mb-6">
              We manufacture high-precision plastic components used in drones,
              automotive systems, machinery, electronics, and industrial
              applications. Our focus is on durability, accuracy, and
              innovation—ensuring every part performs flawlessly in demanding
              environments.
            </p>

            <Link
              href="/about"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
            >
              Discover More
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-12">Why Choose Us?</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              title: "High Precision",
              desc: "Engineered with tight tolerances to ensure perfect fit and performance.",
              icon: "⚙️",
            },
            {
              title: "Durable & Lightweight",
              desc: "Advanced polymers provide strength while reducing overall weight.",
              icon: "🧩",
            },
            {
              title: "Custom Manufacturing",
              desc: "Tailored components for drones, automotive, machinery, and electronics.",
              icon: "🛠️",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl"
            >
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Latest Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden shadow-lg bg-gray-100 group cursor-pointer"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-56 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-4">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Build with RD Prime?
        </h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Let’s create high-quality plastic components designed for drones,
          machines, automotive systems, and modern industrial applications.
        </p>

        <Link
          href="/contact"
          className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
