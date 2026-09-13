import React from 'react';
import { motion } from 'framer-motion';
import './ScrollReveal.css'; // Keep for base class if needed

export default function ScrollReveal({ children, style, className = '', direction = 'up', delay = 0 }) {
  
  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 40 };
      case 'down': return { opacity: 0, y: -40 };
      case 'left': return { opacity: 0, x: 40 };
      case 'right': return { opacity: 0, x: -40 };
      case 'none': return { opacity: 0 };
      default: return { opacity: 0, y: 40 };
    }
  };

  return (
    <motion.div 
      className={`scroll-reveal ${className}`} 
      style={style}
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        type: 'spring',
        stiffness: 100, 
        damping: 20,
        delay: delay / 1000 // framer-motion uses seconds for delay
      }}
    >
      {children}
    </motion.div>
  );
}
