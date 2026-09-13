import React, { useState, useRef, useEffect } from 'react';
import './ScrapbookReflectionsHero.css';

export default function ScrapbookReflectionsHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTimeStr, setCurrentTimeStr] = useState("0:00");
  const [durationStr, setDurationStr] = useState("0:00");
  const audioRef = useRef(null);
  const sectionRef = useRef(null);

  // Formatting time (seconds to m:ss)
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // play returns a promise, we handle it gracefully
        audioRef.current.play().catch(err => {
          console.error("Audio playback failed:", err);
          setIsPlaying(false);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setCurrentTimeStr(formatTime(current));
      
      if (duration) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDurationStr(formatTime(audioRef.current.duration));
    }
  };

  const handleSeek = (e) => {
    if (audioRef.current && audioRef.current.duration) {
      const seekTime = (e.target.value / 100) * audioRef.current.duration;
      audioRef.current.currentTime = seekTime;
      setProgress(e.target.value);
    }
  };

  // Pause audio when section scrolls out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && isPlaying && audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isPlaying]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="reflections-hero" ref={sectionRef}>
      
      <audio 
        ref={audioRef}
        src="/audio/reflections.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Decorative Gradient Overlays */}
      <div className="ref-gradient-1"></div>
      <div className="ref-gradient-2"></div>
      
      {/* Top Center Track Info */}
      <div className="ref-track-info">
        <p>CURRENTLY IN HER ROTATION</p>
      </div>

      {/* Centerpiece Title */}
      <div className="ref-center-title">
        <h1 className="ref-title">REFLECTIONS</h1>
        <h2 className="ref-subtitle">a song for all her thoughts</h2>
      </div>

      {/* Audio Player Controls */}
      <div className="ref-audio-player">
        {/* Left Waveform Graphic */}
        <div className="ref-waveform left-wave">
           <div className={`wave-bars ${isPlaying ? 'playing' : ''}`}></div>
        </div>

        <div className="ref-controls-core">
          <button className="ref-btn prev-btn" aria-label="Previous Track">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
          </button>
          
          <button className={`ref-btn play-btn ${isPlaying ? 'playing' : ''}`} onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            )}
          </button>

          <button className="ref-btn next-btn" aria-label="Next Track">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
          </button>
        </div>

        {/* Right Waveform Graphic */}
        <div className="ref-waveform right-wave">
           <div className={`wave-bars ${isPlaying ? 'playing' : ''}`}></div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="ref-progress-container">
        <span className="ref-time">{currentTimeStr}</span>
        <div className="ref-progress-wrapper">
          <input 
            type="range" 
            className="ref-progress-bar" 
            min="0" 
            max="100" 
            value={progress}
            onChange={handleSeek}
          />
          <div className="ref-progress-fill" style={{ width: `${progress}%` }}></div>
          {/* Knob */}
          <div className="ref-progress-knob" style={{ left: `${progress}%` }}></div>
        </div>
        <span className="ref-time">{durationStr}</span>
      </div>

      {/* Center Bottom Text */}
      <div className="ref-bottom-text">
        <p>SAME SONGS.</p>
        <p>DIFFERENT THOUGHTS.</p>
        <p>BRIGHTER DAYS.</p>
        <div className="ref-heart">&hearts;</div>
      </div>

      {/* Bottom Scroll Text */}
      <div className="ref-scroll-bottom">
        <p>LET THE MUSIC PLAY</p>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e0c7c8" strokeWidth="1.5">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      {/* =========================================
          LEFT SIDE ELEMENTS
      ========================================= */}
      
      {/* Vinyl Record */}
      <div className="ref-vinyl-container">
        <div className="ref-vinyl-sleeve"></div>
        <div className="ref-vinyl-disc">
          <div className="ref-vinyl-grooves"></div>
          <div className="ref-vinyl-label">
            <p className="v-title">REFLECTIONS</p>
            <p className="v-sub">for the<br/>overthinkers</p>
            <p className="v-heart">&hearts;</p>
          </div>
          <div className="ref-vinyl-hole"></div>
        </div>
      </div>

      {/* Top Left Note */}
      <div className="ref-element ref-note-top-left">
        <p>SOME</p>
        <p>SONGS</p>
        <p>JUST FEEL</p>
        <p>LIKE HER &hearts;</p>
      </div>

      {/* Bottom Left Note */}
      <div className="ref-element ref-note-bottom-left">
        <p>chill karo yar</p>
        <p>mat kar lala</p>
        <p>ok yaarr</p>
        <p>basaline &hearts;</p>
      </div>


      {/* =========================================
          RIGHT SIDE ELEMENTS
      ========================================= */}

      {/* Polaroid */}
      <div className="ref-element ref-polaroid-right">
        <div className="ref-polaroid">
          <div className="ref-polaroid-img">
            <img src="/images/w2.jpeg" alt="Rakhashanda" style={{width:'100%', height:'100%', objectFit:'cover'}} />
          </div>
          <div className="ref-polaroid-caption">
            <p>same songs</p>
            <p>brighter me &hearts;</p>
          </div>
        </div>
      </div>

      {/* Book Stack */}
      <div className="ref-book-stack">
        <div className="ref-book book-1"><span>LA LA LAND</span></div>
        <div className="ref-book book-2"><span>MUSIC</span></div>
        <div className="ref-book book-3"><span>MOMENTS</span></div>
        <div className="ref-book book-4"><span>A HAPPIER YOU</span></div>
      </div>

      {/* Far Right Top Text */}
      <div className="ref-far-right-text">
        <p>good</p>
        <p>music</p>
        <p>brighter</p>
        <p>days &hearts;</p>
      </div>


      {/* =========================================
          DECORATIONS (Sparkles & Petals)
      ========================================= */}
      <div className="ref-sparkle rs-1">✦</div>
      <div className="ref-sparkle rs-2">✦</div>
      <div className="ref-sparkle rs-3">✦</div>
      <div className="ref-sparkle rs-4">✦</div>

      {/* Placeholders for petals */}
      <div className="ref-petal rp-1"><span role="img" aria-label="petal" style={{fontSize:'3rem'}}>🌸</span></div>
      <div className="ref-petal rp-2"><span role="img" aria-label="petal" style={{fontSize:'4rem'}}>🌸</span></div>
      <div className="ref-petal rp-3"><span role="img" aria-label="petal" style={{fontSize:'2.5rem'}}>🌸</span></div>

    </div>
  );
}
