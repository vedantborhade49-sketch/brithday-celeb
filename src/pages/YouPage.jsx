import React, { useState, useEffect } from 'react';
import './YouPage.css';
import FlowerWorld from '../components/sections/you/FlowerWorld';
import ScrapbookYouHero from '../components/sections/ScrapbookYouHero';

export default function YouPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="you-page-container">
      <ScrapbookYouHero />
      {mounted && <FlowerWorld />}
    </div>
  );
}
