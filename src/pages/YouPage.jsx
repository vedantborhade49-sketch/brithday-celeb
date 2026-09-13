import React, { useState, useEffect } from 'react';
import './YouPage.css';
import FlowerWorld from '../components/sections/you/FlowerWorld';

export default function YouPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="you-page-container">
      {mounted && <FlowerWorld />}
    </div>
  );
}
