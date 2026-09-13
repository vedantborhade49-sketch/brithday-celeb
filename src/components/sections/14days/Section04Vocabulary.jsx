import React, { useState } from 'react';
import ScrollReveal from '../../layout/ScrollReveal';
import './Section04Vocabulary.css';

export default function Section04Vocabulary() {
  const [stampActive, setStampActive] = useState(false);
  const [slowActive, setSlowActive] = useState(false);

  const handleOkYaarr = () => {
    setStampActive(true);
    setTimeout(() => setStampActive(false), 2000);
  };

  const handleChill = () => {
    setSlowActive(true);
    setTimeout(() => setSlowActive(false), 3000);
  };

  return (
    <section id="section-14d-04" className={`section-vocab ${slowActive ? 'slow-mode' : ''}`}>
      <div className="vocab-container">
        
        <ScrollReveal direction="up" className="vocab-header-wrapper">
          <h2 className="vocab-header">the vocabulary</h2>
          <p className="vocab-subtext">14 days were apparently enough to learn these.</p>
        </ScrollReveal>

        <div className="vocab-scatter">
          
          <ScrollReveal direction="up" delay={200} className="vocab-item v-pos-1">
            <div className="phrase-card card-chill" onClick={handleChill}>
              <span className="phrase-text">"chill karo yar"</span>
              <span className="phrase-hint">click to relax</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400} className="vocab-item v-pos-2">
            <div className="phrase-card card-mat">
              <span className="phrase-text">"mat kar lala"</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={600} className="vocab-item v-pos-3">
            <div className="phrase-card card-basaline">
              <span className="phrase-text">"basaline"</span>
              <div className="basaline-sparkles">✨</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={800} className="vocab-item v-pos-4">
            <div className="phrase-card card-ok" onClick={handleOkYaarr}>
              <span className="phrase-text">"ok yaarr"</span>
              {stampActive && <div className="stamp-approved">APPROVED ✓</div>}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
