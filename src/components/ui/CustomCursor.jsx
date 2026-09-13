import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    if (window.innerWidth <= 768 || 'ontouchstart' in window) {
      setIsMobile(true);
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('floating-photo-container')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
        scale: isHovering ? 2.5 : 1,
        opacity: mousePosition.x === -100 ? 0 : 0.6
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
    />
  );
}
