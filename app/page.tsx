"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="text-center bg-gray-500 px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-gray-900"
      >
        Innovation in Drone Technology 🚁
      </motion.h1>
      <p className="mt-6 text-lg text-gray-600">
        Building drones & raw products for a smarter, sustainable future.
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg"
      >
        Explore Products
      </motion.button>
    </div>
  );
}
