import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cert1 from '../Images/certificate1.jpg'; // MANIT
import cert3 from '../Images/certificate3.jpg'; // IBM
import cert4 from '../Images/certificate2.jpg'; // CDAC

export default function Certifications() {
  const certs = [
    {
      img: cert1,
      title: 'TechnoSearch 2025 – 1st Prize (Project Contest)',
    },
    {
      img: cert3,
      title: 'Cyber Gyan Virtual Internship – C-DAC Noida',
    },
    {
      img: cert4,
      title: 'IBM SkillsBuild Frontend Internship',
    },
  ];

  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <motion.section
      id="certifications"
      className="bg-[#1a2c3d] text-white font-['Ubuntu'] px-6 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Section Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl pt-10 font-extrabold text-yellow-600 inline-block relative">
          Certifications
          <span className="block w-24 h-1 bg-yellow-600 mt-2 mx-auto rounded"></span>
        </h2>
      </motion.div>

      {/* Certificates Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-[#34495E] rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:bg-slate-700 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedCert(cert)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={cert.img} alt={cert.title} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-yellow-500">{cert.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-6xl w-full"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-white text-4xl font-bold bg-gray-700 hover:bg-red-600 rounded-full w-12 h-12 flex items-center justify-center z-10"
              >
                &times;
              </button>
              <img
                src={selectedCert.img}
                alt="Certificate"
                className="w-full max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
