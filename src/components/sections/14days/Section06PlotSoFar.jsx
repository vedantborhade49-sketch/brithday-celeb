import React from 'react';
import ScrollReveal from '../../layout/ScrollReveal';
import FloatingPhoto from '../../ui/FloatingPhoto';
import './Section06PlotSoFar.css';

export default function Section06PlotSoFar() {
  return (
    <section id="section-14d-06" className="section-plot">
      <div className="plot-container">
        
        <div className="plot-text-layer">
          <ScrollReveal direction="up" delay={200} className="plot-line">
            <h3>14 days isn't enough to know someone.</h3>
          </ScrollReveal>
          
          <div className="plot-spacer"></div>

          <ScrollReveal direction="up" delay={400} className="plot-line">
            <h3>But it's enough to collect a few jokes,</h3>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={600} className="plot-line">
            <h3>a few phrases,</h3>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={800} className="plot-line">
            <h3>some oddly specific observations,</h3>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={1000} className="plot-line">
            <h3>and apparently enough material</h3>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={1200} className="plot-line emphasis">
            <h3>to make an entire website.</h3>
          </ScrollReveal>
        </div>

        {/* Floating background images */}
        <div className="plot-images-layer">
          <ScrollReveal direction="right" delay={500} className="plot-img p-img-1">
            <FloatingPhoto src="/images/r7.png" className="plot-photo" rotation={-5} />
          </ScrollReveal>
          
          <ScrollReveal direction="left" delay={900} className="plot-img p-img-2">
            <FloatingPhoto src="/images/w4.jpeg" className="plot-photo" rotation={8} />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={1300} className="plot-img p-img-3">
            <FloatingPhoto src="/images/r4.png" className="plot-photo" rotation={-3} />
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
