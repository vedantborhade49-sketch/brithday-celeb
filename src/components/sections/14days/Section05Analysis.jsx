import React from 'react';
import ScrollReveal from '../../layout/ScrollReveal';
import './Section05Analysis.css';

const data = [
  { label: 'Jokes', value: 100 },
  { label: '"ok yaarr"', value: 90 },
  { label: 'Chill', value: 100 },
  { label: 'Momos', value: 95 },
  { label: 'Biryani', value: 95 },
  { label: 'Pilot energy', value: 100 },
  { label: 'Normal behaviour', value: 30 },
];

export default function Section05Analysis() {
  return (
    <section id="section-14d-05" className="section-analysis">
      <div className="analysis-container">
        
        <ScrollReveal direction="up" className="analysis-header-wrapper">
          <h2 className="analysis-header">a very serious analysis</h2>
          <p className="analysis-subtext">results may be completely unscientific.</p>
        </ScrollReveal>

        <div className="chart-container">
          {data.map((item, index) => (
            <ScrollReveal 
              key={item.label}
              direction="up" 
              delay={200 + (index * 100)} 
              className="chart-row"
            >
              <div className="chart-label">{item.label}</div>
              <div className="bar-track">
                <div 
                  className="bar-fill" 
                  style={{ 
                    '--target-width': `${item.value}%`,
                    backgroundColor: item.value < 50 ? 'var(--text-muted)' : 'var(--accent-rose)'
                  }}
                >
                  <span className="bar-value">{item.value}%</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
