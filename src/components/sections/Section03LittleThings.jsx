import React from 'react';
import FloatingPhoto from '../ui/FloatingPhoto';
import ScrollReveal from '../layout/ScrollReveal';
import AnimatedFlower from '../ui/AnimatedFlower';
import './Section03LittleThings.css';

export default function Section03LittleThings() {
  return (
    <section id="section-03" className="home-scene scene-baby-pink section-little-things">
      <AnimatedFlower type="lily" style={{ top: '10%', left: '5%' }} delay={0.2} />
      <AnimatedFlower type="tulip" style={{ bottom: '20%', right: '8%' }} delay={0.4} />
      <div className="things-container">
        
        <ScrollReveal direction="up" className="things-header-wrapper">
          <h2 className="things-header">things i've learned...</h2>
        </ScrollReveal>

        <div className="casual-photo-spread">
          <ScrollReveal direction="up" delay={200} className="spread-item item-1">
            <FloatingPhoto 
              src="/images/rakshanda-02.jpg" 
              className="photo-medium" 
              rotation={-6} 
            />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={500} className="spread-item item-2">
             <FloatingPhoto 
              src="/images/rakshanda-01.jpg" 
              className="photo-large" 
              rotation={4} 
            />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={800} className="spread-item item-3">
             <FloatingPhoto 
              src="/images/rakshanda-04.jpg" 
              className="photo-small" 
              rotation={-12} 
            />
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
