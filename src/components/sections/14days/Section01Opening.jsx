import React, { useEffect, useState } from 'react';
import ScrollReveal from '../../layout/ScrollReveal';
import HandwrittenNote from '../../ui/HandwrittenNote';
import './Section01Opening.css';

export default function Section01Opening() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 14;
    const duration = 2000;
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    // Slight delay before counting up
    const timer = setTimeout(() => {
      window.requestAnimationFrame(step);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    document.getElementById('section-14d-02')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="section-14d-01" className="section-14d-opening">
      <div className="opening-container">
        
        <ScrollReveal direction="up" delay={200}>
          <div className="counter-wrapper">
            <span className="counter-number">{count < 10 ? `0${count}` : count}</span>
            <span className="counter-label">DAYS</span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={600}>
          <p className="opening-subtext">that's actually not a lot of time.</p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={1200}>
          <p className="opening-subtext-2">and somehow, here we are.</p>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={1500}>
          <HandwrittenNote 
            text="how did this happen?" 
            rotation={-6} 
            style={{ top: '65%', right: '25%', opacity: 0.6 }} 
          />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={2000}>
          <button className="scroll-down-hint" onClick={scrollToNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" />
            </svg>
          </button>
        </ScrollReveal>

      </div>
    </section>
  );
}
