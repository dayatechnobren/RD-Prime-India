"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setSubmitted(true);
};

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Have a question about RD Prime Drone, partnerships, or custom drone solutions?  
          We did love to hear from you. Fill out the form below and our team will reach out soon.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            We are available Monday–Saturday, 9 AM to 6 PM.  
            Reach out to us for technical queries, collaborations, or demo requests.
          </p>

          <div className="space-y-4 text-gray-700">
            <div>
              <h4 className="font-semibold text-gray-900">Office Address</h4>
              <p>RD Prime Innovations Pvt. Ltd.<br />Gate No.01, Triveni Complex, Goverdhan Road, Mathura, Uttar Pradesh – 281004</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Phone</h4>
              <p>+91 96165 46428</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Email</h4>
              <p>contact@rdprimedrone.com</p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold text-gray-900 mb-2">Follow Us</h4>
            <div className="flex gap-4 text-2xl text-blue-600">
              <a href="#" aria-label="LinkedIn">
                <i className="ri-linkedin-box-fill"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="ri-twitter-x-fill"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
        >
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">
            Send Us a Message
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </motion.button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 font-medium mt-3 text-center"
            >
              Thank you! Your message has been sent successfully.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
