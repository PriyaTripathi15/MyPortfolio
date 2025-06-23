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
    description:
      'Secured 1st position for developing a full-stack Training & Placement Portal at MANIT Bhopal during the TechnoSearch technical fest.',
    platform: 'TechnoSearch 2025, MANIT Bhopal',
    date: 'March 2025',
  },
  {
    img: cert3,
    title: 'Cyber Gyan Virtual Internship – C-DAC Noida',
    description:
      'Completed a certified training program in Ethical Hacking and Penetration Testing covering secure coding and network security practices.',
    platform: 'C-DAC Noida',
    date: 'June 2025',
  },
  {
    img: cert4,
    title: 'IBM SkillsBuild Frontend Internship',
    description:
      'Completed a 6-week frontend internship focused on HTML, CSS, JavaScript, Git, and responsive design under CSRBOX and IBM SkillsBuild.',
    platform: 'IBM SkillsBuild & CSRBOX',
    date: 'August 2024',
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

      {/* Certifications Grid */}
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
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">{cert.title}</h3>
              <p className="text-lg text-gray-300 mb-2">{cert.description}</p>
              <div className="text-sm text-gray-400 italic">
                {cert.platform} • {cert.date}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#2C3E50] rounded-lg overflow-hidden max-w-4xl w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 text-white text-3xl font-bold bg-gray-700 hover:bg-red-600 rounded-full w-10 h-10 flex items-center justify-center"
              >
                &times;
              </button>
              <img
                src={selectedCert.img}
                alt={selectedCert.title}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-6 text-white">
                <h3 className="text-3xl font-bold text-yellow-500 mb-3">{selectedCert.title}</h3>
                <p className="text-lg mb-3">{selectedCert.description}</p>
                <div className="text-md text-gray-300 italic">
                  {selectedCert.platform} • {selectedCert.date}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
