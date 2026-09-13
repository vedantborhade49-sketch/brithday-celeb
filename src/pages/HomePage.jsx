import React from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingPhoto from '../components/ui/FloatingPhoto';
import cakeImg from '../assets/cake.png';
import './HomePage.css';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text-section">
          <p className="home-eyebrow fade-in-up delay-1">for someone who definitely didn't ask for this</p>
          <h1 className="home-title fade-in-up delay-2">RAKSHANDA</h1>
          <p className="home-subtitle handwritten fade-in-up delay-3">happy birthday, yaarr &hearts;</p>
          <div className="home-date-badge fade-in-up delay-4">
            <span>14 &bull; 09 &bull; 2026</span>
          </div>
          
          <div className="home-actions fade-in-up delay-5">
            <button className="home-primary-btn" onClick={() => navigate('/14-days')}>
              Begin the Journey &rarr;
            </button>
          </div>
        </div>

        <div className="home-visual-section fade-in delay-4">
          <div className="home-photo-wrapper">
            <FloatingPhoto 
              src="/images/rakshanda-01.jpg" 
              className="home-main-photo"
              rotation={-3}
            />
            {/* Small decorative elements */}
            <div className="home-deco cake-deco">
              <img src={cakeImg} alt="Cake" />
            </div>
            <div className="home-deco star-deco star-1">✦</div>
            <div className="home-deco star-deco star-2">✦</div>
          </div>
        </div>
      </div>
    </div>
  );
}
