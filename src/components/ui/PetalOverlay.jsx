import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import './PetalOverlay.css';

// SVG Path for a simple falling petal
const petalPath = "M10.5 0C4.7 0 0 5 0 10.5C0 16 5 21 10.5 21C16 21 21 16 21 10.5C21 5 16 0 10.5 0ZM10.5 19C5.8 19 2 15.2 2 10.5C2 5.8 5.8 2 10.5 2C15.2 2 19 5.8 19 10.5C19 15.2 15.2 19 10.5 19Z";

export default function PetalOverlay() {
  const { scrollYProgress } = useScroll();
  const [petals, setPetals] = useState([]);
  
  // Create a subtle petal drop when the user scrolls past section transitions
  useEffect(() => {
    let lastSection = 0;
    const thresholds = [0.12, 0.26, 0.43, 0.52, 0.68, 0.76];
    
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      let currentSection = 0;
      for (let i = 0; i < thresholds.length; i++) {
        if (latest > thresholds[i]) {
          currentSection = i + 1;
        }
      }
      
      if (currentSection !== lastSection) {
        // Drop more petals when entering darker sections
        const isEnteringDark = currentSection === 1 || currentSection === 3 || currentSection === 5;
        dropPetals(isEnteringDark ? 8 : 4);
        lastSection = currentSection;
      }
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);

  const dropPetals = (count) => {
    const newPetals = Array.from({ length: count }).map(() => ({
      id: Math.random().toString(36).substr(2, 9),
      left: 10 + Math.random() * 80, // 10% to 90%
      size: 15 + Math.random() * 15, // 15px to 30px
      rotation: Math.random() * 360,
      duration: 8 + Math.random() * 7,
      delay: Math.random() * 2
    }));
    
    setPetals(prev => [...prev, ...newPetals]);
    
    // Cleanup after they fall
    setTimeout(() => {
      setPetals(prev => prev.filter(p => !newPetals.find(np => np.id === p.id)));
    }, 15000);
  };

  return (
    <div className="petal-overlay-container">
      {petals.map(petal => (
        <motion.div
          key={petal.id}
          className="falling-petal"
          style={{
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size
          }}
          initial={{ y: -50, opacity: 0, rotate: petal.rotation }}
          animate={{ 
            y: window.innerHeight + 100, 
            opacity: [0, 0.8, 0.8, 0],
            rotate: petal.rotation + 180 + Math.random() * 180,
            x: Math.random() * 100 - 50 // Drift sideways
          }}
          transition={{ 
            duration: petal.duration, 
            delay: petal.delay,
            ease: "linear"
          }}
        >
          <svg viewBox="0 0 21 21" fill="var(--accent-rose, #e08b9b)" opacity="0.6">
            <path d={petalPath} />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
