import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AmbientBackground from './components/layout/AmbientBackground';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import FourteenDaysPage from './pages/FourteenDaysPage';
import ArrowsPage from './pages/ArrowsPage';
import YouPage from './pages/YouPage';
import LettersPage from './pages/LettersPage';
import './App.css';
import './pages/HomePage.css'; // ensure styles for password screen are loaded

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === 'acha bete') {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('pehle videos bhejna chotuuuuuu');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="scrapbook-home password-screen">
        <div className="sb-center-content password-content">
          <h2 className="sb-greeting">wait a minute,</h2>
          <h1 className="sb-name" style={{ fontSize: '4rem', marginTop: '10px' }}>password please! <span className="sb-heart" style={{ fontSize: '4rem', transform: 'translateY(5px) rotate(-10deg)' }}>&hearts;</span></h1>
          
          <form onSubmit={handlePasswordSubmit} className="password-form">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password-input"
              placeholder="enter the secret..."
              autoFocus
            />
            <button type="submit" className="sb-btn password-btn">
              enter &rarr;
            </button>
          </form>
          {errorMsg && <p className="password-error">{errorMsg}</p>}
        </div>
      </div>
    );
  }

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
