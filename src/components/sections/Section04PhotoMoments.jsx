import React, { useState } from 'react';
import ScrollReveal from '../layout/ScrollReveal';
import FloatingPhoto from '../ui/FloatingPhoto';
import HandwrittenNote from '../ui/HandwrittenNote';
import './Section04PhotoMoments.css';

export default function Section04PhotoMoments() {
  return (
    <section id="section-04" className="home-scene scene-dark-rose section-photos">
      
      {/* Subtle glowing dots / stars */}
      <div className="cinematic-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="glow-dot" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.1
          }}></div>
        ))}
      </div>

      <div className="cinematic-content">
        <ScrollReveal direction="up" delay={200}>
          <h2 className="cinematic-phrase handwritten">okay yaarr...</h2>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={800}>
          <p className="cinematic-subtext serif-font">you know what i mean.</p>
        </ScrollReveal>
      </div>

    </section>
  );
}
