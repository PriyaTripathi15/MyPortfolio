import React from 'react';
import {
  Code, FileCode, TerminalSquare, Settings, Database, Server, Cloud,
  GitBranch, GitCommit, Github, Layers, ClipboardList, FileText,
  Laptop2, GitMerge
} from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'C', icon: <FileCode className="text-slate-400 w-10 h-10" /> },
  { name: 'C++', icon: <FileCode className="text-slate-400 w-10 h-10" /> },
  { name: 'JavaScript', icon: <Code className="text-slate-400 w-10 h-10" /> },
  { name: 'Core Java', icon: <Settings className="text-slate-400 w-10 h-10" /> },
  { name: 'React', icon: <Layers className="text-slate-400 w-10 h-10" /> },
  { name: 'Express', icon: <Server className="text-slate-400 w-10 h-10" /> },
  { name: 'Node.js', icon: <TerminalSquare className="text-slate-400 w-10 h-10" /> },
  { name: 'MongoDB', icon: <Database className="text-slate-400 w-10 h-10" /> },
  { name: 'SQL', icon: <FileText className="text-slate-400 w-10 h-10" /> },
  { name: 'Bootstrap', icon: <ClipboardList className="text-slate-400 w-10 h-10" /> },
  { name: 'Tailwind CSS', icon: <Cloud className="text-slate-400 w-10 h-10" /> },
  { name: 'Version Control', icon: <GitBranch className="text-slate-400 w-10 h-10" /> },
  { name: 'Git', icon: <GitMerge className="text-slate-400 w-10 h-10" /> },
  { name: 'GitHub', icon: <Github className="text-slate-400 w-10 h-10" /> },
  { name: 'Postman', icon: <GitCommit className="text-slate-400 w-10 h-10" /> },
  { name: 'VS Code', icon: <Laptop2 className="text-slate-400 w-10 h-10" /> },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

const SkillsSection = () => {
  return (
    <motion.section
      id="skills"
      className="px-6 py-24 bg-[#1a2c3d] text-white font-['Ubuntu']"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Section Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl pt-10 font-extrabold text-yellow-500 inline-block relative">
          My Tech Skills
          <span className="block w-24 h-1 bg-yellow-500 mt-2 mx-auto rounded"></span>
        </h2>
      </motion.div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-700 hover:bg-slate-600 transition-all duration-300 hover:scale-105"
          >
            {skill.icon}
            <p className="mt-3 text-base text-center font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
