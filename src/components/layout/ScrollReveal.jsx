import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ScrollReveal.css';

export default function ScrollReveal({ children, style, className = '', direction = 'up', delay = 0 }) {
  const [ref, isVisible] = useScrollReveal();

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(40px)';
      case 'down': return 'translateY(-40px)';
      case 'left': return 'translateX(40px)';
      case 'right': return 'translateX(-40px)';
      case 'none': return 'none';
      default: return 'translateY(40px)';
    }
  };

  const baseStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0,0)' : getTransform(),
    transitionDelay: `${delay}ms`,
    ...style
  };

  return (
    <div 
      ref={ref} 
      className={`scroll-reveal ${className}`} 
      style={baseStyle}
    >
      {children}
    </div>
  );
}
