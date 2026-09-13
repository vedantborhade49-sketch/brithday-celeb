import React from 'react';
import { motion } from 'framer-motion';
import './ScrollProgress.css';

export default function ScrollProgress({ progress }) {
  return (
    <div className="scroll-progress-container">
      <motion.div 
        className="scroll-progress-bar" 
        style={{ scaleY: progress }}
      />
    </div>
  );
}
