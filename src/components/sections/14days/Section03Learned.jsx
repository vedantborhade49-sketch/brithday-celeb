import React from 'react';
import ScrollReveal from '../../layout/ScrollReveal';
import AnimatedFlower from '../../ui/AnimatedFlower';
import './Section03Learned.css';

const facts = [
  { id: 'flowers', title: 'Lilies & Tulips', icon: '🌸', desc: 'the superior flowers.' },
  { id: 'lalaland', title: 'La La Land', icon: '🎬', desc: 'city of stars, are you shining just for her?' },
  { id: 'music', title: 'Reflections', icon: '🎧', desc: 'currently on loop.' },
  { id: 'pilot', title: 'Pilot Dreams', icon: '✈️', desc: 'aiming for the skies.' },
  { id: 'momos', title: 'Momos', icon: '🥟', desc: 'a primary food group.' },
  { id: 'biryani', title: 'Biryani', icon: '🍛', desc: 'the other primary food group.' },
  { id: 'world', title: 'Every Country', icon: '🌍', desc: 'wants to see it all.' },
];

export default function Section03Learned() {
  return (
    <section id="section-14d-03" className="section-learned">
      <div className="learned-container">
        
        <ScrollReveal direction="up" className="learned-header-wrapper">
          <h2 className="learned-header">things i've already learned about you</h2>
        </ScrollReveal>

        <div className="facts-grid">
          {facts.map((fact, index) => (
            <ScrollReveal 
              key={fact.id}
              direction="up" 
              delay={200 + (index * 100)} 
              className="fact-card"
            >
              <div className="fact-icon">{fact.icon}</div>
              <h3 className="fact-title">{fact.title}</h3>
              <p className="fact-desc">{fact.desc}</p>
            </ScrollReveal>
          ))}
          
          {/* Decorative flower slot in the grid */}
          <div className="fact-card flower-card">
            <AnimatedFlower type="tulip" style={{ bottom: '10px' }} />
          </div>
        </div>

      </div>
    </section>
  );
}
