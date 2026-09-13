import React from 'react';
import ScrollReveal from '../layout/ScrollReveal';
import AnimatedFlower from '../ui/AnimatedFlower';
import './Section03LittleThings.css';

export default function Section03LittleThings() {
  return (
    <section id="section-03" className="section-little-things">
      <div className="things-container">
        
        <ScrollReveal direction="up" className="things-header-wrapper">
          <h2 className="things-header">things i've learned in 14 days</h2>
        </ScrollReveal>

        <div className="editorial-layout">
          {/* Left Column */}
          <div className="editorial-col col-left">
            <ScrollReveal direction="right" delay={200} className="editorial-item">
              <span className="tiny-label">currently in her rotation</span>
              <h3 className="big-serif">REFLECTIONS</h3>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={600} className="editorial-item item-spaced">
              <h3 className="big-serif">LA LA LAND</h3>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={1000} className="editorial-item item-spaced">
              <span className="tiny-label">dreams of</span>
              <h3 className="big-serif">EVERY COUNTRY.</h3>
            </ScrollReveal>
          </div>

          {/* Center Graphic */}
          <div className="editorial-col col-center">
             <ScrollReveal direction="up" delay={400} className="flower-wrapper">
                <AnimatedFlower type="lily" style={{ bottom: '10%', transform: 'scale(1.5)' }} />
             </ScrollReveal>
          </div>

          {/* Right Column */}
          <div className="editorial-col col-right">
            <ScrollReveal direction="left" delay={400} className="editorial-item item-spaced-top">
              <h3 className="big-serif">PILOT SOMEDAY &#9992;</h3>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={800} className="editorial-item item-spaced">
              <span className="tiny-label">food groups</span>
              <h3 className="big-serif">MOMOS.</h3>
              <h3 className="big-serif">BIRYANI.</h3>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={1200} className="editorial-item item-spaced">
              <h3 className="big-serif">LILIES + TULIPS</h3>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
}
