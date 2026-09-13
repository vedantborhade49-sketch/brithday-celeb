import React from 'react';
import ScrollReveal from '../layout/ScrollReveal';
import AnimatedFlower from '../ui/AnimatedFlower';
import './Section07Final.css';

export default function Section07Final() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="section-07" className="home-scene scene-cream section-final">
      
      {/* Soft light effect */}
      <div className="soft-light"></div>

      <div className="final-container">
        
        <ScrollReveal direction="up" delay={200}>
          <p className="final-message serif-font">there's a lot more ahead.</p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={600}>
          <h1 className="final-title">happy birthday, Rakhashanda ♡</h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={1000}>
          <button className="start-over-btn" onClick={scrollToTop}>
            [ start over &uarr; ]
          </button>
        </ScrollReveal>

      </div>

      <AnimatedFlower type="tulip" style={{ bottom: '-20px', left: '15%', transform: 'scale(1.2)' }} />
      <AnimatedFlower type="lily" style={{ bottom: '10%', right: '20%' }} />

    </section>
  );
}
