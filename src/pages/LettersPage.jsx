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

      <div className="letters-page-content">
        
        {/* Intro Section */}
        <section className="letters-intro">
          <h1 className="letters-title">LETTERS</h1>
          <p className="letters-subtitle">some things are better written down.</p>
          <p className="letters-instruction">open whichever one you want.</p>
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
