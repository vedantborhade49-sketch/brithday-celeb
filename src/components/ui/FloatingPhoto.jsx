import React, { useRef, useState, useEffect } from 'react';
import './FloatingPhoto.css';

export default function FloatingPhoto({ src, alt, rotation = 0, style, className = '' }) {
  const photoRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    
    const rotateX = ((y - centerY) / centerY) * -8; // Max tilt 8deg
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

  const transformStyle = {
    transform: `rotate(${rotation}deg) perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.03 : 1}) translateY(${isHovered ? '-5px' : '0'})`,
  };

  return (
    <div 
      className={`ui-floating-photo ${className}`} 
      style={{ ...style, ...transformStyle }}
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
    </div>
  );
}
