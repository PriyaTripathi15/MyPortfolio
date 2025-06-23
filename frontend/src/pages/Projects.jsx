import React, { useState } from "react";
import chatterbox from "../Images/chatterbox.jpg";
import shophouse from "../Images/shophouse.png";
import tpc from "../Images/manit.png";
import splitit from "../Images/split-it.png"; // Add this image to your Images folder
import { Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ChatterBox",
    img: chatterbox,
    shortDesc: "A smart chat app with AI and real-time features.",
    description:
      "ChatterBox is a real-time chat application sending text messages, integrating Gemini AI for smart replies, message liking, image sharing, and live updates using Socket.io. Built with Zustand for efficient state management.",
    techStack: [
      "React", "Node.js", "Express", "zustand", "Gemini AI", "Socket.io"
    ],
    github: "https://github.com/PriyaTripathi15/chatterbox",
  },
  {
    title: "ShopHouse",
    img: shophouse,
    shortDesc: "A complete e-commerce app with payments and admin panel.",
    description:
      "ShopHouse is a full-featured MERN stack e-commerce platform with user auth, product filtering, cart system, stripe payment integration, and an admin dashboard for product and order management.",
    techStack: [
      "React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "stripe", "Bootstrap"
    ],
    github: "https://github.com/PriyaTripathi15/pre-shop",
  },
  {
    title: "Training & Placement Portal – MANIT",
    img: tpc,
    shortDesc: "Centralized platform for MANIT placement and training data.",
    description:
      "A dynamic portal built for MANIT Bhopal to manage student data, recruiter access, training records, and placement progress. Secure access using JWT, styled with Tailwind CSS for a clean UI.",
    techStack: [
      "React", "Node.js", "Express", "MySql", "JWT", "Tailwind CSS"
    ],
    github: "https://github.com/riskmr3275/PacementCellNITB",
  },
  {
    title: "Splite_It",
    img: splitit,
    shortDesc: "A smart expense splitting app for groups.",
    description:
      "Splite_It simplifies expense tracking and splitting among groups. Users can create groups, invite members, add expenses, and view balances. Built initially on Firebase and later upgraded to a MERN stack with Redux Toolkit and email invite system for seamless onboarding.",
    techStack: [
      "React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Firebase", "JWT", "Tailwind CSS"
    ],
    github: "https://github.com/PriyaTripathi15/splite-it",
  },
];

export default function ProjectsList() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="projects" className="px-6 py-24 bg-[#1a2c3d] text-white font-['Ubuntu']">
      {/* Section Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl pt-12 font-extrabold text-yellow-500 inline-block relative">
          My Projects
          <span className="block w-24 h-1 bg-yellow-500 mt-2 mx-auto rounded"></span>
        </h2>
      </motion.div>

      {/* Projects List */}
      <div className="max-w-5xl mx-auto space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#34495E] border-2 border-transparent rounded-xl p-6 transition-all duration-300 hover:bg-slate-700 hover:scale-105 hover:text-slate-100 cursor-pointer"
            onClick={() => toggleIndex(index)}
          >
            <div className="flex items-center gap-6 mb-6">
              <img
                src={project.img}
                alt={project.title}
                className="w-24 h-24 object-cover rounded-full border border-white"
              />
              <div>
                <h3 className="text-3xl font-semibold">{project.title}</h3>
                <p className="text-lg text-gray-300">{project.shortDesc}</p>
              </div>
            </div>

            <div
              className={`${
                openIndex === index
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden transition-all duration-500 ease-in-out`}
            >
              <div className="px-6 pb-4">
                <p className="text-lg leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-3">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-sky-600 text-white px-4 py-1 rounded-full text-sm md:text-base font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                {project.github && (
                  <div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-600 hover:text-yellow-500 flex items-center gap-2 text-lg"
                    >
                      <Github size={24} />
                      GitHub Repository
                    </a>
                    <p className="text-sm text-gray-300 break-all mt-1">
                      {project.github}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
