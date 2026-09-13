import React from 'react';
import ScrollReveal from '../layout/ScrollReveal';
import HandwrittenNote from '../ui/HandwrittenNote';
import './Section02FourteenDays.css';

export default function Section02FourteenDays() {
  return (
    <section id="section-02" className="home-scene scene-deep section-fourteen">
      <div className="fourteen-container">
        
        {/* The Giant Number in Background */}
        <div className="giant-number-wrapper">
          <ScrollReveal direction="up" delay={0}>
            <div className="giant-number">14</div>
          </ScrollReveal>
        </div>

        {/* Foreground Text */}
        <div className="fourteen-text-content">
          <ScrollReveal direction="up" delay={400}>
            <h2 className="fourteen-days">days.</h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={800}>
            <p className="fourteen-subtext serif-font">that's how long I've known you.</p>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
