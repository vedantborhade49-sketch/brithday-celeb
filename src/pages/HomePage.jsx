import React from 'react';
import { useNavigate } from 'react-router-dom';
import Scrapbook14DaysHero from '../components/sections/Scrapbook14DaysHero';
import ScrapbookReflectionsHero from '../components/sections/ScrapbookReflectionsHero';
import ScrapbookYouHero from '../components/sections/ScrapbookYouHero';

import './HomePage.css';

export default function HomePage() {
  const navigate = useNavigate();

  const scrollTo14Days = () => {
    document.getElementById('fourteen-days-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="scrollable-home">
      <div className="scrapbook-home" id="hero-section">
        
        {/* Top Left Text */}
        <div className="sb-top-left">
          <p>A SMALL</p>
          <p>PLACE FOR</p>
          <p>A VERY SPECIAL</p>
          <p>PERSON &hearts;</p>
        </div>

        {/* Top Right Text */}
        <div className="sb-top-right">
          <p>good</p>
          <p>people</p>
          <p>brighter</p>
          <p>days &hearts;</p>
        </div>

        {/* Main Center Content */}
        <div className="sb-center-content">
          <h2 className="sb-greeting">happy birthday,</h2>
          <h1 className="sb-name">Rakhashanda <span className="sb-heart">&hearts;</span></h1>
          
          <p className="sb-date">1 4 &bull; 0 9 &bull; 2 0 2 6</p>
          <p className="sb-subtitle">14 days. and somehow, here we are.</p>

          <button className="sb-btn" onClick={scrollTo14Days}>
            okay, there's more &rarr;
          </button>
          
          <div className="sb-plane-path">
            <svg viewBox="0 0 200 50" className="dashed-path">
              <path d="M 0,0 Q 50,50 150,20 T 200,40" fill="none" stroke="#a08085" strokeWidth="1.5" strokeDasharray="4,4" />
            </svg>
            <div className="sb-plane-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a08085" strokeWidth="1.5">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Center Scroll */}
        <div className="sb-scroll-indicator">
          <div className="sb-line"></div>
          <p>SCROLL TO BEGIN</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a08085" strokeWidth="1.5">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        {/* Right Side Polaroid */}
        <div className="sb-polaroid-container">
          <div className="sb-tape top-tape"></div>
          <div className="sb-polaroid">
            <div className="sb-polaroid-img-wrapper">
               <img src="/images/r1.png" alt="Rakhashanda" className="sb-main-img" />
            </div>
            <p className="sb-polaroid-caption">recently added to my camera roll &hearts;</p>
          </div>
        </div>

        {/* Small Torn Notes */}
        <div className="sb-note bottom-left-note">
          <p>you<br/>make<br/>ordinary<br/>days feel<br/>special &hearts;</p>
        </div>

        <div className="sb-note right-note">
          <p>same<br/>girl...<br/>brighter<br/>days &hearts;</p>
        </div>

        {/* Decorative Assets (Placeholders for floral) */}
        <div className="sb-floral top-left-floral">
          <span role="img" aria-label="tulip" style={{fontSize: '12rem', filter: 'hue-rotate(-20deg) opacity(0.8)'}}>🌷</span>
        </div>
        
        <div className="sb-floral bottom-right-floral">
          <span role="img" aria-label="lily" style={{fontSize: '15rem', opacity: 0.8}}>🌸</span>
        </div>

        {/* Sparkles / Stars */}
        <div className="sb-sparkle sp-1">☆</div>
        <div className="sb-sparkle sp-2">✧</div>
        <div className="sb-sparkle sp-3">☆</div>
        <div className="sb-sparkle sp-4">☆</div>
        
      </div>

      <div id="fourteen-days-section">
        <Scrapbook14DaysHero />
      </div>

      <div id="reflections-audio-section">
        <ScrapbookReflectionsHero />
      </div>

      <div id="you-scrapbook-section">
        <ScrapbookYouHero />
      </div>


    </div>
  );
}
