"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TechnologyPage() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Technology Behind RD Prime Drone
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          RD Prime Drone integrates advanced aerodynamics, intelligent systems, and 
          cutting-edge materials to deliver unmatched flight performance, stability, and reliability 
          for industrial, defense, and research applications.
        </p>
      </div>

      {/* Core Technologies */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            title: "AI Flight Control System",
            desc: "Powered by real-time AI algorithms, the RD Prime Drone autonomously adjusts flight paths, detects obstacles, and optimizes battery consumption during missions.",
            icon: "/ai-control.jpg",
          },
          {
            title: "Next-Gen Propulsion",
            desc: "Brushless BLDC motors and lightweight carbon-fiber propellers ensure high thrust-to-weight ratio, low noise, and superior energy efficiency.",
            icon: "/propulsion.jpg",
          },
          {
            title: "Smart Navigation & GPS",
            desc: "Integrated GPS + GLONASS + RTK module enables centimeter-level precision, stable hovering, and auto-return-to-home functionality.",
            icon: "/gps.jpg",
          },
          {
            title: "Aero-Optimized Frame Design",
            desc: "Engineered for aerodynamic efficiency, the carbon-fiber composite frame reduces drag and enhances stability even in strong winds.",
            icon: "/aerodesign.png",
          },
          {
            title: "Advanced Sensor Suite",
            desc: "Equipped with LiDAR, IMU, ultrasonic, and vision sensors for terrain mapping, obstacle avoidance, and smooth autonomous navigation.",
            icon: "/sensors.jpg",
          },
          {
            title: "Real-Time Data & Telemetry",
            desc: "High-bandwidth data transmission via 2.4GHz/5.8GHz ensures live HD video, telemetry, and diagnostics to the ground control station.",
            icon: "/telemetry.jpg",
          },
        ].map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
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
              <p className="text-gray-600 text-sm leading-relaxed">{tech.desc}</p>
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
          Built for the Future of Aerial Intelligence
        </motion.h2>
        <p className="text-gray-600 text-lg">
          Every component of RD Prime Drone is designed for efficiency, safety, 
          and intelligence — making it ideal for defense surveillance, mapping, 
          agricultural analysis, and advanced R&D projects.
        </p>
      </div>
    </section>
  );
}
