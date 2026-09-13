import React from 'react';
import './AmbientBackground.css';

export default function AmbientBackground() {
  // Generate random particles and petals
  const particles = Array.from({ length: 30 });
  const petals = Array.from({ length: 8 });

  return (
    <div className="ambient-background">
      <div className="paper-grain"></div>
      
      {particles.map((_, i) => (
        <div 
          key={`particle-${i}`} 
          className="ambient-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 20}s`
          }}
        />
      ))}

      {petals.map((_, i) => (
        <div 
          key={`petal-${i}`} 
          className="ambient-petal"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${-10 + Math.random() * 110}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${15 + Math.random() * 15}s`
          }}
        />
      ))}
    </div>
  );
}
