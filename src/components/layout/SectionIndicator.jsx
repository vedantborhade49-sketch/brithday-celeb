import React, { useState, useEffect } from 'react';
import './SectionIndicator.css';

export default function SectionIndicator({ sections = 7 }) {
  const [activeSection, setActiveSection] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Very basic scroll position tracker
      const scrollPosition = window.scrollY + (window.innerHeight / 2);
      
      const elements = Array.from({ length: sections }).map((_, i) => {
        return document.getElementById(`section-0${i + 1}`);
      });

      let current = 1;
      elements.forEach((el, index) => {
        if (el && el.offsetTop <= scrollPosition) {
          current = index + 1;
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (index) => {
    const el = document.getElementById(`section-0${index}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="section-indicator">
      {Array.from({ length: sections }).map((_, i) => (
        <button 
          key={i} 
          className={`indicator-dot ${activeSection === i + 1 ? 'active' : ''}`}
          onClick={() => scrollToSection(i + 1)}
          aria-label={`Scroll to section ${i + 1}`}
        >
          <span className="indicator-number">0{i + 1}</span>
        </button>
      ))}
    </div>
  );
}
