import { useEffect, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import React from 'react';

const sectionIds = [
  'home',
  'about',
  'education',
  'skills',
  'projects',
  'certifications',
  'contact',
];

function getCurrentSection() {
  let current = 0;
  for (let i = 0; i < sectionIds.length; i++) {
    const el = document.getElementById(sectionIds[i]);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 80) {
        current = i;
      }
    }
  }
  return current;
}

function ScrollIcons() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 100);
      setCurrentSection(getCurrentSection());
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (index) => {
    const el = document.getElementById(sectionIds[index]);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-4 bottom-6 flex flex-col gap-3 z-50 sm:right-3 sm:bottom-4">
      {/* Scroll to Previous Section */}
      <button
        onClick={() => scrollToSection(Math.max(0, currentSection - 1))}
        className={`bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-gray-700 transition-all duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label="Scroll to previous section"
        disabled={currentSection === 0}
      >
        <ChevronUp size={20} />
      </button>

      {/* Scroll to Next Section */}
      <button
        onClick={() => scrollToSection(Math.min(sectionIds.length - 1, currentSection + 1))}
        className="bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-gray-700 transition-all duration-300"
        aria-label="Scroll to next section"
        disabled={currentSection === sectionIds.length - 1}
      >
        <ChevronDown size={20} />
      </button>
    </div>
  );
}

export default ScrollIcons;
