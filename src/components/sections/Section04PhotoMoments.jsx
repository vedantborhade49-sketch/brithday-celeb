import React, { useState } from 'react';
import ScrollReveal from '../layout/ScrollReveal';
import FloatingPhoto from '../ui/FloatingPhoto';
import HandwrittenNote from '../ui/HandwrittenNote';
import './Section04PhotoMoments.css';

export default function Section04PhotoMoments() {
  const [lightboxImg, setLightboxImg] = useState(null);

  const openLightbox = (src) => setLightboxImg(src);
  const closeLightbox = () => setLightboxImg(null);

  return (
    <section id="section-04" className="section-photos">
      <div className="photos-header-area">
        <ScrollReveal direction="up">
          <h2 className="photos-header">okay, maybe we need more pictures</h2>
          <p className="photos-subtext">we've only known each other for 14 days, give me a break.</p>
        </ScrollReveal>
      </div>

      <div className="scrapbook-desk">
        
        <ScrollReveal direction="up" delay={200} className="desk-item pos-1">
          <div onClick={() => openLightbox('/images/rakshanda-01.jpg')}>
            <FloatingPhoto 
              src="/images/rakshanda-01.jpg" 
              className="photo-large" 
              rotation={-4} 
            />
          </div>
          <HandwrittenNote text="✨" rotation={10} style={{ top: '-10%', right: '-5%' }} />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={400} className="desk-item pos-2">
          <div onClick={() => openLightbox('/images/rakshanda-02.jpg')}>
            <FloatingPhoto 
              src="/images/rakshanda-02.jpg" 
              className="photo-medium" 
              rotation={6} 
            />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={600} className="desk-item pos-3">
          <div onClick={() => openLightbox('/images/rakshanda-03.jpg')}>
            <FloatingPhoto 
              src="/images/rakshanda-03.jpg" 
              className="photo-small" 
              rotation={-12} 
            />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={800} className="desk-item pos-4">
          <div onClick={() => openLightbox('/images/rakshanda-04.jpg')}>
            <FloatingPhoto 
              src="/images/rakshanda-04.jpg" 
              className="photo-wide" 
              rotation={3} 
            />
          </div>
        </ScrollReveal>

      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" aria-label="Close lightbox">&times;</button>
          <img src={lightboxImg} alt="Enlarged view" className="lightbox-img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
