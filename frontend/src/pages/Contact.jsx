import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-[#1a2c3d] text-white min-h-screen flex flex-col items-center justify-center font-['Ubuntu']"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Section Heading */}
      <motion.h2
        className="text-5xl md:text-5xl font-extrabold text-yellow-500 mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
        <span className="block w-20 h-1 bg-yellow-600 mt-2 mx-auto rounded"></span>
      </motion.h2>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl text-lg">
        {/* Phone */}
        <motion.div
          className="bg-[#34495E] p-6 rounded-xl shadow-lg hover:scale-105 hover:bg-slate-700 transition-all duration-300 text-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <Phone size={50} className="mx-auto text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">By Phone</h3>
          <p className="text-sm text-gray-300">Call me from anywhere (India)</p>
          <a
            href="tel:+919301150120"
            className="text-yellow-500 text-lg font-bold block mt-2 hover:underline"
          >
            +91-9301150120
          </a>
        </motion.div>

        {/* Email */}
        <motion.div
          className="bg-[#34495E] p-6 rounded-xl shadow-lg hover:scale-105 hover:bg-slate-700 transition-all duration-300 text-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Mail size={50} className="mx-auto text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-sm text-gray-300">Write your queries anytime</p>
          <a
            href="mailto:priyatripathi0415@gmail.com"
            className="text-yellow-500 text-lg font-bold block mt-2 hover:underline"
          >
            priyatripathi0415@gmail.com
          </a>
        </motion.div>

        {/* Address */}
        <motion.div
          className="bg-[#34495E] p-6 rounded-xl shadow-lg hover:scale-105 hover:bg-slate-700 transition-all duration-300 text-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <MapPin size={50} className="mx-auto text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Visit</h3>
          <p className="text-sm text-gray-300">Tap below to open in Google Maps</p>
          <a
            href="https://www.google.com/maps?q=Mhow+Bazar,+Indore,+MP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 text-lg font-bold block mt-2 hover:underline"
          >
            Mhow Bazar, Indore, MP
          </a>
        </motion.div>
      </div>

      {/* Social Media Links */}
      <motion.div
        className="flex space-x-6 mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <a
          href="https://github.com/PriyaTripathi15"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-500 transition"
        >
          <Github size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/priya-tripathi-8b682028a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-500 transition"
        >
          <Linkedin size={40} />
        </a>
        <a
          href="https://www.instagram.com/priaa1504/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-500 transition"
        >
          <Instagram size={40} />
        </a>
      </motion.div>
    </motion.section>
  );
}
