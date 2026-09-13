import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../layout/ScrollReveal';
import AnimatedFlower from '../../ui/AnimatedFlower';
import './Section07Day14Final.css';

export default function Section07Day14Final() {
  const navigate = useNavigate();

  return (
    <section id="section-14d-07" className="section-14d-final">
      
      {/* Soft central light */}
      <div className="final-glow"></div>

      <div className="final-14d-container">
        
        <ScrollReveal direction="up" delay={200}>
          <h2 className="final-day-title">DAY 14</h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={600}>
          <p className="final-date">14 &bull; 09 &bull; 2026</p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={1000}>
          <p className="final-text">and here we are.</p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={1400}>
          <h1 className="final-wish handwritten">happy birthday, yaarr ♡</h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={1800}>
          <button className="continue-btn" onClick={() => navigate('/')}>
            continue &darr;
          </button>
        </ScrollReveal>

      </div>

      <AnimatedFlower type="lily" style={{ bottom: '-10px', left: '20%', opacity: 0.8 }} />

    </section>
  );
}
