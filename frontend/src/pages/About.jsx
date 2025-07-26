import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.section
      id="about"
      className="px-6 py-24 bg-[#1a2c3d] text-white font-['Ubuntu']"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl pt-10 font-extrabold text-yellow-500 inline-block hover:scale-105 transition-transform duration-300">
          About Me
          <span className="block w-20 h-1 bg-yellow-500 mt-2 mx-auto rounded"></span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto text-[20px] leading-[1.8] space-y-6 text-gray-200">
        {[
          `Hi, I’m Priya Tripathi — currently pursuing MCA at NIT Bhopal. My journey into tech began during my BCA at DAVV Indore, where I discovered my interest in building things for the web.`,

          `I enjoy creating modern, responsive web applications that are both functional and clean. I've built apps like a group expense manager, a placement portal, and an e-commerce platform using the MERN stack.`,

          `Along the way, I’ve interned with IBM SkillsBuild & CSRBOX in frontend development and with C-DAC Noida, where I got exposure to ethical hacking and cybersecurity. These experiences helped me understand both how to build and how to protect.`,

          `I’ve practiced a lot of problem-solving too — solving 300+ coding questions and earning 5star  in C++ & Problem Solving and 4star in SQL and C on HackerRank.`,

          `Beyond tech, I really enjoy singing and listening to music. It keeps me balanced, refreshed, and inspired to keep learning.`,

          `Right now, I’m exploring opportunities where I can grow, collaborate, and contribute to real-world development challenges.`,
        ].map((text, i) => (
          <motion.p
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={paragraphVariants}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </motion.section>
  );
}
