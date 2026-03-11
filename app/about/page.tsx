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
              "url('https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1500&q=80')",
            backgroundSize: "cover",
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
          <h2 className="text-4xl font-bold mb-6">Who We Are 🏭</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We specialize in manufacturing{" "}
            <span className="font-semibold">
              high-precision plastic spare parts and molded components
            </span>{" "}
            used across industries like drones, automotive, electronics,
            machinery, and consumer goods. Our commitment is to deliver durable,
            lightweight, and reliable components that enhance product
            performance.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With advanced molding technologies and a dedicated engineering team,
            we ensure every component meets strict industry standards. From
            custom-designed drone parts to heavy-duty automotive components, we
            focus on delivering quality, consistency, and innovation in every
            product.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/about-1.jpg"
            alt="About Company"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover"
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
            <h3 className="text-2xl font-bold mb-4">🎯 Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver high-quality plastic spare parts and engineered
              components that enhance reliability, reduce costs, and power the
              next generation of innovation across industries. We aim to support
              manufacturers with durable, precision-crafted solutions tailored
              to their needs.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-bold mb-4">🌟 Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a global leader in molded plastic components, recognized for
              quality, innovation, and customer trust. We envision a future
              where our products power drones, vehicles, machines, and
              industrial systems worldwide with unmatched precision and
              performance.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
     <div className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-bold text-center mb-12">
    Our Clients 👥👥
  </h2>

  <div className="grid md:grid-cols-3 gap-10">
    {[
      { name: "Indo wings pvt Ltd", img: "/indiwing.webp", url: "https://www.dhcpl.com/" },
      { name: "Insta Exhibition pvt Ltd", img: "/Insta.webp", url: "https://insta-group.com/" },
      { name: "DHCL Pvt Ltd", img: "/DHCL.jpg", url: "https://www.indowings.com/" },
    ].map((member, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        className="bg-gray-50 rounded-xl p-6 text-center shadow-lg"
      >
        <Image
          src={member.img}
          alt={member.name}
          width={200}
          height={200}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />

        <h4 className="text-xl font-semibold hover:text-red-500"><a href={member.url} target="_blank" rel="noopener noreferrer">{member.name}</a></h4>
      </motion.div>
    ))}
  </div>
</div>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Meet Our Team 👨‍🏭👩‍🏭
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: "Alex", role: "Manufacturing Engineer" },
            { name: "Maya", role: "Product Designer" },
            { name: "Jordan", role: "Quality Specialist" },
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gray-50 rounded-xl p-6 text-center shadow-lg"
            >
              <Image
                src={`/team-${i + 1}.jpg`}
                alt={member.name}
                width={200}
                height={200}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
