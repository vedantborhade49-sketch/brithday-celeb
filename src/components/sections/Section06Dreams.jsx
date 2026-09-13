import React from 'react';
import ScrollReveal from '../layout/ScrollReveal';
import AnimatedFlower from '../ui/AnimatedFlower';
import './Section06Dreams.css';

export default function Section06Dreams() {
  return (
    <section id="section-06" className="home-scene scene-deep section-dreams">
      <AnimatedFlower type="tulip" style={{ top: '15%', left: '10%' }} delay={0.3} />
      
      {/* Subtle world map pattern via SVG */}
      <div className="world-pattern"></div>

      <div className="dreams-container">
        
        <ScrollReveal direction="up">
          <h2 className="dreams-title">pilot someday.</h2>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={400}>
          <p className="dreams-subtext serif-font">somewhere between here and everywhere.</p>
        </ScrollReveal>

        {/* Animated Airplane */}
        <div className="dreams-plane-container">
          <ScrollReveal direction="left" delay={800}>
             <div className="dreams-plane-track">
                <svg className="dreams-plane" width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="var(--accent-rose)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
