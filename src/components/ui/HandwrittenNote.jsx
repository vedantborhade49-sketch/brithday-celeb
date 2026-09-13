import React from 'react';
import './HandwrittenNote.css';

export default function HandwrittenNote({ text, style, rotation = 0, className = '' }) {
  return (
    <div 
      className={`ui-handwritten-note handwritten ${className}`} 
      style={{ ...style, '--note-rotation': `${rotation}deg` }}
    >
      {text}
    </div>
  );
}
