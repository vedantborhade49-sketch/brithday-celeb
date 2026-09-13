import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './FloatingPhoto.css';

export default function FloatingPhoto({ src, alt, rotation = 0, style, className = '' }) {
  const photoRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Parallax based on when this element is in the viewport
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to a subtle y displacement (e.g. moves up 40px as you scroll past)
  const yParallax = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const smoothY = useSpring(yParallax, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px) or (hover: none) or (pointer: coarse)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile || !photoRef.current) return;
    
    const rect = photoRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovered(true);
  };

  return (
    <motion.div 
      className={`ui-floating-photo ${className} floating-photo-container`} 
      style={{ 
        ...style,
        y: isMobile ? 0 : smoothY
      }}
      animate={{
        rotate: isHovered ? rotation + (Math.random() * 2 - 1) : rotation,
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: isHovered ? 1.02 : 1,
        y: isHovered ? -8 : 0,
        boxShadow: isHovered 
          ? "0 25px 50px rgba(100, 70, 80, 0.15), 0 10px 20px rgba(100, 70, 80, 0.1)"
          : "0 10px 30px rgba(0, 0, 0, 0.05)"
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 20,
        mass: 1
      }}
      ref={photoRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="photo-frame">
        <div className="photo-inner">
          {src ? (
            <img src={src} alt={alt || 'Photograph'} />
          ) : (
            <div className="placeholder-content">
              {/* No text as per instructions, just patterned aesthetic */}
            </div>
          )}
        </div>
      </div>
      <div className="tape-detail"></div>
    </motion.div>
  );
}
