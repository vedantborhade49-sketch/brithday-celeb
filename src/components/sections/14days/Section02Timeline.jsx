import React from 'react';
import ScrollReveal from '../../layout/ScrollReveal';
import './Section02Timeline.css';

const timelineData = [
  { day: 1, text: "okay, new person.", rotation: -2 },
  { day: 3, text: "the jokes have officially started.", rotation: 1 },
  { day: 6, text: "'chill karo yar' has entered the vocabulary.", rotation: -1 },
  { day: 9, text: "ok yaarr.", rotation: 2 },
  { day: 12, text: "mat kar lala.", rotation: -3 },
  { day: 14, text: "...and somehow this became a website.", rotation: 0 },
];

export default function Section02Timeline() {
  return (
    <section id="section-14d-02" className="section-timeline">
      <div className="timeline-container">
        
        <ScrollReveal direction="up" className="timeline-header-wrapper">
          <h2 className="timeline-header">how did we get here?</h2>
        </ScrollReveal>

        <div className="timeline-trail">
          {timelineData.map((item, index) => (
            <ScrollReveal 
              key={index} 
              direction={index % 2 === 0 ? "left" : "right"} 
              delay={200}
              className={`timeline-entry ${index % 2 === 0 ? 'entry-left' : 'entry-right'}`}
            >
              <div className="timeline-point"></div>
              <div 
                className="timeline-card" 
                style={{ transform: `rotate(${item.rotation}deg)` }}
              >
                <span className="timeline-day">DAY {item.day < 10 ? `0${item.day}` : item.day}</span>
                <p className="timeline-text">{item.text}</p>
                
                {/* Tiny doodle variations */}
                {index === 1 && <span className="tiny-doodle">✨</span>}
                {index === 3 && <span className="tiny-doodle doodle-right">🌸</span>}
                {index === 4 && <span className="tiny-doodle doodle-bottom">✌️</span>}
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
