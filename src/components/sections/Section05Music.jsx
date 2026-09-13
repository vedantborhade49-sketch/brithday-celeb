import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../layout/ScrollReveal';
import HandwrittenNote from '../ui/HandwrittenNote';
import './Section05Music.css';

export default function Section05Music() {
  return (
    <section id="section-05" className="home-scene scene-blush section-music">
      <div className="music-container">
        
        <ScrollReveal direction="up">
          <h2 className="playful-title serif-font">currently in her rotation</h2>
        </ScrollReveal>

        {/* Scattered Interactive Phrases */}
        <div className="phrases-layer">
          <ScrollReveal direction="left" delay={200}>
            <div className="interactive-phrase" style={{ top: '20%', left: '15%' }}>
              <HandwrittenNote text="ok yaarr" rotation={-5} />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={400}>
            <div className="interactive-phrase" style={{ top: '35%', right: '20%' }}>
              <HandwrittenNote text="chill karo yar" rotation={8} />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={600}>
            <div className="interactive-phrase" style={{ bottom: '25%', left: '25%' }}>
              <HandwrittenNote text="mat kar lala" rotation={-3} />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={800}>
            <div className="interactive-phrase" style={{ bottom: '15%', right: '30%' }}>
              <HandwrittenNote text="basaline" rotation={12} />
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
