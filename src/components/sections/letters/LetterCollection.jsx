import React from 'react';
import Envelope from './Envelope';
import './LetterCollection.css';
import { lettersData } from '../../../data/lettersData';

export default function LetterCollection({ openLetterId, setOpenLetterId }) {
  // We apply some pseudo-random but deterministic rotations/positions for an organic feel
  const organicStyles = [
    { transform: 'rotate(-3deg) translate(5px, 10px)' },
    { transform: 'rotate(2deg) translate(-10px, 0px)' },
    { transform: 'rotate(-1deg) translate(0px, 15px)' },
    { transform: 'rotate(4deg) translate(8px, -5px)' },
    { transform: 'rotate(-4deg) translate(-5px, 8px)' },
    { transform: 'rotate(1deg) translate(12px, 12px)' },
  ];

  return (
    <div className="letter-collection">
      {lettersData.map((letter, index) => {
        const isOpen = openLetterId === letter.id;
        // Don't apply organic rotation to the open letter to keep it straight for reading
        const style = isOpen ? { zIndex: 100 } : organicStyles[index % organicStyles.length];

        return (
          <div key={letter.id} className={`collection-item ${isOpen ? 'active-item' : ''}`}>
            <Envelope 
              letter={letter} 
              isOpen={isOpen}
              onClick={() => setOpenLetterId(letter.id)}
              onClose={() => setOpenLetterId(null)}
              style={style}
            />
          </div>
        );
      })}
    </div>
  );
}
