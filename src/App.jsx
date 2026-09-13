import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AmbientBackground from './components/layout/AmbientBackground';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import FourteenDaysPage from './pages/FourteenDaysPage';
import ArrowsPage from './pages/ArrowsPage';
import YouPage from './pages/YouPage';
import LettersPage from './pages/LettersPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <AmbientBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/14-days" element={<FourteenDaysPage />} />
          <Route path="/arrows" element={<ArrowsPage />} />
          <Route path="/you" element={<YouPage />} />
          <Route path="/letters" element={<LettersPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
