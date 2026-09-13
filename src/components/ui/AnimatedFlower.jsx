import React from 'react';
import './AnimatedFlower.css';

export default function AnimatedFlower({ type = 'tulip', style, className = '' }) {
  return (
    <div className={`animated-flower type-${type} ${className}`} style={style}>
      {type === 'tulip' ? (
        <svg width="40" height="120" viewBox="0 0 40 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 40C20 40 10 120 20 120" stroke="var(--text-muted)" strokeWidth="1.5" className="stem" />
          <path d="M20 40C5 30 10 10 20 0C30 10 35 30 20 40Z" fill="var(--accent-blush)" stroke="var(--accent-rose)" className="petal main-petal" />
          <path d="M20 40C15 25 15 15 20 5" stroke="var(--accent-rose)" strokeWidth="1" className="petal-detail" />
        </svg>
      ) : (
        <svg width="60" height="100" viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 40C30 40 20 100 30 100" stroke="var(--text-muted)" strokeWidth="1.5" className="stem" />
          <path d="M30 40C10 25 0 20 5 10C15 10 20 20 30 30" fill="var(--bg-ivory)" stroke="var(--accent-rose)" className="petal side-petal-left" />
          <path d="M30 40C50 25 60 20 55 10C45 10 40 20 30 30" fill="var(--bg-ivory)" stroke="var(--accent-rose)" className="petal side-petal-right" />
          <path d="M30 40C25 20 30 5 35 10C40 15 35 25 30 40Z" fill="var(--accent-blush)" className="petal center-petal" />
        </svg>
      )}
    </div>
  );
}
