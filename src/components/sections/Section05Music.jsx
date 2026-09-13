import React from 'react';
import ScrollReveal from '../layout/ScrollReveal';
import './Section05Music.css';

export default function Section05Music() {
  return (
    <section id="section-05" className="section-music">
      <div className="music-container">
        
        <ScrollReveal direction="up">
          <span className="tiny-label">currently in her rotation</span>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={200}>
          <h2 className="music-title">REFLECTIONS</h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={500}>
          <div className="minimal-player">
            <button className="player-play-btn" aria-label="Play Reflections">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5V19L19 12L8 5Z" />
              </svg>
            </button>
            <div className="waveform">
              {/* Fake animated waveform */}
              {Array.from({ length: 40 }).map((_, i) => (
                <div 
                  key={i} 
                  className="wave-bar" 
                  style={{ 
                    height: `${20 + Math.random() * 80}%`,
                    animationDelay: `${Math.random() * 1}s`
                  }} 
                />
              ))}
            </div>
            <span className="time-display">0:00</span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
