"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "How RD Prime Drone is Revolutionizing Aerial Intelligence",
    date: "September 20, 2025",
    img: "/ai-control.jpg",
    desc: "Discover how the RD Prime Drone combines artificial intelligence, precision sensors, and advanced navigation to transform aerial surveillance, mapping, and research missions.",
    slug: "rd-prime-drone-aerial-intelligence",
  },
  {
    id: 2,
    title: "Inside the Engineering: Building a Smarter Drone",
    date: "August 12, 2025",
    img: "/engineering.jpg",
    desc: "Go behind the scenes with our engineering team to learn how we designed the RD Prime Drone for optimal thrust, balance, and flight stability under extreme conditions.",
    slug: "building-smarter-drone",
  },
  {
    id: 3,
    title: "AI and Automation in Modern Drones",
    date: "July 28, 2025",
    img: "/ai-drones.jpg",
    desc: "AI-driven drones are redefining what’s possible in data collection and decision-making. Here’s how RD Prime Drone leverages deep learning for autonomous navigation.",
    slug: "ai-automation-in-drones",
  },
  {
    id: 4,
    title: "Battery Optimization for Long-Endurance Flights",
    date: "June 10, 2025",
    img: "/battery.png",
    desc: "Battery life is the heart of every drone. Learn how RD Prime Drone achieves maximum endurance using smart power management and energy-dense Li-ion cells.",
    slug: "battery-optimization-drone-flights",
  },
  {
    id: 5,
    title: "Applications of RD Prime Drone Across Industries",
    date: "May 18, 2025",
    img: "/applications.jpg",
    desc: "From precision agriculture to defense surveillance — explore how RD Prime Drone is helping industries unlock efficiency and real-time insights from the sky.",
    slug: "rd-prime-drone-applications",
  },
];

export default function BlogPage() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          RD Prime Drone Blog
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Stay updated with the latest news, innovations, and research stories 
          from the world of aerial technology and drone development.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, i) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition"
          >
            <div className="relative w-full h-56">
              <Image
                src={blog.img}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {blog.desc}
              </p>
              {/* <Link
                href={`/blog/${blog.slug}`}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Read More →
              </Link> */}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-4"
        >
          Innovating the Future of Drones
        </motion.h2>
        <p className="text-gray-600 text-lg">
          RD Prime Drone is committed to advancing aerial robotics through 
          research, innovation, and collaboration. Follow our journey as we 
          build the next generation of intelligent drone systems.
        </p>
      </div>
    </section>
  );
}
