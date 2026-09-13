import React, { useEffect } from 'react';
import ArrowsGame from '../components/sections/arrows/ArrowsGame';

export default function ArrowsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container fade-in">
      <ArrowsGame />
    </div>
  );
}
