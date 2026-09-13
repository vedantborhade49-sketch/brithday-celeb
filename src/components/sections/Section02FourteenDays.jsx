import React from 'react';
import ScrollReveal from '../layout/ScrollReveal';
import HandwrittenNote from '../ui/HandwrittenNote';
import './Section02FourteenDays.css';

export default function Section02FourteenDays() {
  return (
    <section id="section-02" className="section-fourteen">
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
            <p className="fourteen-subtext">and somehow, this happened.</p>
          </ScrollReveal>
        </div>

        {/* Floating Handwritten Notes */}
        <div className="notes-layer">
          <ScrollReveal direction="left" delay={1200}>
            <HandwrittenNote text="ok yaarr" rotation={-5} style={{ top: '20%', left: '15%' }} />
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={1400}>
            <HandwrittenNote text="chill karo yar" rotation={8} style={{ top: '30%', right: '20%' }} />
          </ScrollReveal>

          <ScrollReveal direction="left" delay={1600}>
            <HandwrittenNote text="mat kar lala" rotation={-3} style={{ bottom: '25%', left: '25%' }} />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={1800}>
            <HandwrittenNote text="basaline" rotation={12} style={{ bottom: '15%', right: '30%' }} />
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
