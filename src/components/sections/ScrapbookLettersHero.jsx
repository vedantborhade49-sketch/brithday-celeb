import React from 'react';
import './ScrapbookLettersHero.css';

export default function ScrapbookLettersHero() {
  // Generate random petals
  const petals = Array.from({ length: 15 }).map((_, i) => (
    <div key={i} className={`sl-petal sl-petal-${i + 1}`}>
      <span role="img" aria-label="petal">🌸</span>
    </div>
  ));

  return (
    <div className="letters-scrapbook">
      {/* Animated Background */}
      <div className="sl-background-glow"></div>
      
      {/* Floating Petals */}
      <div className="sl-petals-container">
        {petals}
      </div>

      {/* Center CSS Cake */}
      <div className="css-cake-wrapper">
        <div className="css-cake">
          
          {/* Candles */}
          <div className="cake-candles">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="candle">
                <div className="flame"></div>
                <div className="candle-body"></div>
              </div>
            ))}
          </div>

          {/* Cake Tier */}
          <div className="cake-tier">
            {/* Frosting drips */}
            <div className="frosting-drips">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="drip"></div>
              ))}
            </div>

            {/* Text on Cake */}
            <div className="cake-text">
              <p className="ct-1">Happy Birthday</p>
              <p className="ct-2">Rakhashanda</p>
              <p className="ct-3">&hearts;</p>
            </div>
          </div>

          {/* Cake Plate */}
          <div className="cake-plate"></div>
        </div>
      </div>

      {/* Right Side Scroll Indicator */}
      <div className="sl-side-scroll">
        <span className="sl-num">01</span>
        <span className="sl-dot">.</span>
        <span className="sl-dot">.</span>
        <span className="sl-dot">.</span>
        <span className="sl-num active">02</span>
        <span className="sl-dot">.</span>
        <span className="sl-dot">.</span>
        <span className="sl-dot">.</span>
      </div>
    </div>
  );
}
