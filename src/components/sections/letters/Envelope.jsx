import React from 'react';
import './Envelope.css';

export default function Envelope({ letter, isOpen, onClick, onClose, style }) {
  const handleEnvelopeClick = (e) => {
    if (!isOpen) {
      onClick();
    }
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    if (onClose) onClose();
  };

  return (
    <div className={`envelope-wrapper ${isOpen ? 'is-open' : ''}`} style={style}>
      <div className="envelope-container" onClick={handleEnvelopeClick}>
        
        {/* Back of the envelope */}
        <div className="envelope-back"></div>
        
        {/* The Letter inside */}
        <div className="letter-paper">
          <div className="letter-content">
            {isOpen && (
              <button className="close-letter-btn" onClick={handleCloseClick}>
                close letter ×
              </button>
            )}
            <div className="letter-header">
              <span className="letter-date">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <h3 className="letter-title">{letter.title}</h3>
            <div className="letter-message-body">
              {letter.message.split('\n').map((line, i) => (
                <p key={i}>
                  {line === '' ? <br /> : line}
                </p>
              ))}
            </div>
            {letter.urduFooter && (
              <div className="letter-urdu-footer">
                {letter.urduFooter}
              </div>
            )}
          </div>
        </div>
        
        {/* Front folds constructed with robust CSS borders */}
        <div className="envelope-front-left"></div>
        <div className="envelope-front-right"></div>
        <div className="envelope-front-bottom"></div>

        {/* The Flap */}
        <div className="envelope-flap"></div>

        {/* The Label */}
        <div className="envelope-label">
          {letter.label}
        </div>

      </div>
    </div>
  );
}
