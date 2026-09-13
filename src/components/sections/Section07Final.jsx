import React from 'react';
import ScrollReveal from '../layout/ScrollReveal';
import AnimatedFlower from '../ui/AnimatedFlower';
import './Section07Final.css';

export default function Section07Final() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="section-07" className="section-final">
      
      {/* Soft light effect */}
      <div className="soft-light"></div>

      <div className="final-container">
        
        <ScrollReveal direction="up" delay={200}>
          <h1 className="final-title">happy birthday, Rakshanda &hearts;</h1>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={600}>
          <p className="final-message">
            I hope this year brings you everything you've ever dreamed of.
            <br />
            Here's to the skies, the world, and beyond.
          </p>
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
