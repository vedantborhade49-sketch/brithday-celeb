import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LetterCollection from '../components/sections/letters/LetterCollection';
import './LettersPage.css';

export default function LettersPage() {
  const navigate = useNavigate();
  const [openLetterId, setOpenLetterId] = useState(null);

  return (
    <div className={`letters-page ${openLetterId ? 'has-open-letter' : ''}`}>
      
      {/* Background Dimmer when a letter is open */}
      <div className="letters-dimmer" onClick={() => setOpenLetterId(null)}></div>

      {/* Ambient background details */}
      <div className="letters-ambient-bg">
        <span className="bg-decor star" style={{ top: '15%', left: '10%' }}>✦</span>
        <span className="bg-decor dot" style={{ top: '25%', left: '15%' }}>·</span>
        <span className="bg-decor dot" style={{ top: '20%', right: '20%' }}>·</span>
        <span className="bg-decor star" style={{ top: '65%', right: '12%' }}>✦</span>
        <span className="bg-decor dot" style={{ top: '70%', right: '15%' }}>·</span>
        <span className="bg-decor petal" style={{ top: '75%', left: '18%' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" strokeDasharray="1 3"/></svg>
        </span>
        <span className="bg-decor petal" style={{ top: '30%', right: '15%' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" strokeDasharray="1 3"/></svg>
        </span>
      </div>

      <div className="letters-page-content">
        
        {/* Intro Section */}
        <section className="letters-intro">
          <h1 className="letters-title">LETTERS</h1>
          <p className="letters-subtitle">some things are better written down.</p>
        </section>

        {/* Collection Section */}
        <section className="letters-main">
          <LetterCollection 
            openLetterId={openLetterId} 
            setOpenLetterId={setOpenLetterId} 
          />
        </section>

        {/* Outro Section */}
        <section className="letters-outro">
          <p className="outro-text">you can come back whenever you want.</p>
          <p className="outro-subtext">some letters are worth reading twice.</p>
          
          <div className="outro-footer">
            <p className="footer-text">that's all for now.</p>
            <p className="footer-subtext">but you can always open them again.</p>
            
            <button 
              className="back-home-btn"
              onClick={() => navigate('/')}
            >
              back home &rarr;
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
