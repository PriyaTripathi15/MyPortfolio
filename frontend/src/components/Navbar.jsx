import { HashLink } from 'react-router-hash-link';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'education', 'skills', 'projects', 'certifications', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-poppins ${
        isScrolled ? 'bg-[#1F2D3D] shadow-md' : 'bg-[#0a1f34]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <HashLink smooth to="/#home" className="flex items-center space-x-2">
            <h1 className="text-yellow-400 text-3xl font-semibold tracking-wide">
              Priya Tripathi
            </h1>
          </HashLink>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex md:items-center space-x-8 text-white text-xl font-medium">
            {['home', 'about', 'education', 'skills', 'projects', 'certifications', 'contact'].map(
              (section) => (
                <HashLink
                  key={section}
                  smooth
                  to={`/#${section}`}
                  className={`transition hover:text-gray-300 ${
                    activeSection === section ? 'text-yellow-400' : ''
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </HashLink>
              )
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a1f34] text-white px-4 pt-2 pb-4 space-y-2 text-xl font-medium font-poppins">
          {['home', 'about', 'education', 'skills', 'projects', 'certifications', 'contact'].map(
            (section) => (
              <HashLink
                key={section}
                smooth
                to={`/#${section}`}
                className={`block transition hover:text-gray-300 ${
                  activeSection === section ? 'text-yellow-400' : ''
                }`}
                onClick={() => setIsMenuOpen(false)} // close menu on click
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </HashLink>
            )
          )}
        </div>
      )}
    </nav>
  );
}
