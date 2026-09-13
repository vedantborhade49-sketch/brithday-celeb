import React from 'react';
import FloatingPhoto from '../ui/FloatingPhoto';
import ScrollReveal from '../layout/ScrollReveal';
import './Section01Hero.css';

export default function Section01Hero() {
  const scrollToNext = () => {
    document.getElementById('section-02')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="section-01" className="section-hero">
      
      {/* Paper airplane path that continues down */}
      <svg className="hero-plane-path" viewBox="0 0 500 1000" preserveAspectRatio="none">
        <path 
          id="flightPathHero" 
          d="M -50,100 C 200,150 400,400 300,1000" 
          fill="none" 
          stroke="var(--accent-rose)" 
          strokeWidth="1.5" 
          strokeDasharray="4 8" 
          opacity="0.3"
        />
      </svg>
      <div className="hero-plane">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="var(--text-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="hero-container">
        
        <div className="hero-text-content">
          <ScrollReveal direction="up" delay={200}>
            <p className="hero-tiny">for someone who definitely didn't ask for this</p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={400}>
            <h1 className="hero-title">RAKHASHANDA</h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={600}>
            <p className="hero-subtitle handwritten">happy birthday, yaarr &hearts;</p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={800}>
            <p className="hero-date">14 &bull; 09 &bull; 2026</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={1200}>
            <button className="primary-cta" onClick={scrollToNext}>
              okay, there's more &rarr;
            </button>
          </ScrollReveal>
        </div>

        <div className="hero-photo-container">
          <ScrollReveal direction="left" delay={1000}>
            <FloatingPhoto 
              src="/images/rakshanda-01.jpg" 
              className="main-hero-photo"
              rotation={2}
            />
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
