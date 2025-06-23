import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import home from '../Images/my.jpg';
import resume from "../assets/resume/resume.pdf";

export default function Home() {
  return (
    <section
      id="home"
      className="py-20 min-h-screen w-full font-['Ubuntu'] flex flex-col items-center justify-center bg-[#1a2c3d] text-white text-center px-4"
    >
      {/* Profile Image */}
      <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden mb-6">
        <img
          src={home}
          alt="Priya Tripathi"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Intro Text */}
      <div className="mb-4 text-[22px] md:text-[34px] font-semibold text-yellow-600">
        <div>Hello, I'm Priya Tripathi</div>
        <div className="text-slate-400 mt-1">
          <Typewriter
            words={['Full Stack Developer', 'MERN Stack Developer']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
      </div>

      {/* Tagline */}
      <p className="text-[15px] md:text-[18px] text-amber-400 animate-pulse leading-relaxed mb-6 max-w-2xl">
        I’m a Web Developer who loves building fast, responsive and creative websites.
        Let’s build something great together!
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <a href="#about">
          <button className="px-6 py-2 md:py-3 text-[15px] md:text-[18px] rounded-md font-medium bg-gray-400 text-neutral-800 border border-[#333] hover:bg-gray-600 hover:text-white hover:border-transparent transition-all duration-300">
            Explore More About Me
          </button>
        </a>
        <a href={resume} download="Priya_Tripathi_Resume.pdf">
          <button className="px-6 py-2 md:py-3 text-[15px] md:text-[18px] rounded-md font-medium bg-gray-400 text-neutral-800 border border-[#333] hover:bg-gray-600 hover:text-white hover:border-transparent transition-all duration-300">
            Download CV
          </button>
        </a>
      </div>
    </section>
  );
}
