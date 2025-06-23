import React from 'react';
import { GraduationCap, School, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Education() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.section
      id="education"
      className="py-20 bg-[#1a2c3d] text-white font-['Ubuntu'] px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-5xl md:text-5xl font-extrabold text-yellow-500 pt-10">
          Education
          <span className="block w-24 h-[3px] bg-yellow-500 mt-2 mx-auto rounded-full"></span>
        </h2>
      </motion.div>

      {/* Education Cards */}
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        {[
          {
            icon: <GraduationCap size={32} />,
            title: "Masters of Computer Applications",
            institute: "Maulana Azad National Institute of Technology (MANIT), Bhopal",
            duration: "2023 - 2026",
            details: "CGPA: 9.20 (current)",
          },
          {
            icon: <BookOpen size={32} />,
            title: "Bachelors of Computer Applications",
            institute: "School Of Computer Science And IT DAVV, Indore",
            duration: "2019 - 2022",
            details: "CGPA: 9.16",
          },
          {
            icon: <School size={32} />,
            title: "Higher Secondary",
            institute: "Shri Jai Govind Gopinath H.S. School, Indore",
            duration: "2018 - 2019",
            details: "Percentage: 91%",
          },
          {
            icon: <School size={32} />,
            title: "High School",
            institute: "Shri Jai Govind Gopinath H.S. School, Indore",
            duration: "2016 - 2017",
            details: "Percentage: 86.33%",
          },
        ].map((edu, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-[#34495E] border border-slate-600 rounded-xl p-5 hover:bg-slate-700 hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-3">
              {edu.icon}
              <h3 className="text-lg md:text-xl font-semibold">{edu.title}</h3>
            </div>
            <p className="text-sm md:text-base text-gray-200">{edu.institute}</p>
            <p className="text-sm md:text-base text-gray-400">{edu.duration}</p>
            <p className="text-sm md:text-base font-semibold text-gray-300">{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
