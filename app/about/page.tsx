"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white text-gray-900">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1500&q=80')",
            backgroundSize: "100%",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-5xl md:text-6xl font-extrabold text-white text-center"
        >
          About <span className="text-blue-500">Us</span>
        </motion.h1>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">Who We Are 🚀</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We are pioneers in <span className="font-semibold">drone
            technology</span>, committed to building cutting-edge solutions that
            push industries forward. From sustainable drones to advanced aerial
            innovations, our goal is to empower communities and businesses
            worldwide.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With a team of passionate engineers, creators, and innovators, we’re
            shaping the future of drone technology—making it smarter, greener,
            and more accessible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/about-1.jpg"
            alt="About Drone"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* Mission + Vision */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-bold mb-4">🌍 Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize industries with eco-friendly drones that maximize
              efficiency, reduce costs, and create a more sustainable future.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-bold mb-4">✨ Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the global leader in drone innovation, shaping the future of
              transportation, agriculture, defense, and humanitarian efforts
              through technology.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Meet Our Team 👨‍💻👩‍💻
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {["Alex", "Maya", "Jordan"].map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gray-50 rounded-xl p-6 text-center shadow-lg"
            >
              <Image
                src={`/team-${i + 1}.jpg`}
                alt={name}
                width={200}
                height={200}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold">{name}</h4>
              <p className="text-gray-600">Drone Specialist</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
