import React from 'react';
import './Scrapbook14DaysHero.css';

export default function Scrapbook14DaysHero() {
  return (
    <div className="fourteen-scrapbook">
      
      {/* Background massive 14 */}
      <div className="sb14-bg-number">14</div>

      {/* Centerpiece */}
      <div className="sb14-center">
        <h1 className="sb14-days-text">days.</h1>
        <h2 className="sb14-subtitle">that's how long I've known you.</h2>
        <p className="sb14-subtext">and somehow, you already have enough<br/>stories to fill a website.</p>
        <div className="sb14-heart-icon">&hearts;</div>
      </div>

      {/* Top Left Note */}
      <div className="sb14-element note-top-left">
        <p>good<br/>conversations</p>
        <p>silly moments</p>
        <p>random thoughts</p>
        <p>14 days &hearts;</p>
      </div>


      {/* Bottom Left Checklist */}
      <div className="sb14-element note-checklist">
        <div className="sb14-small-tag tag-ok">ok yaarr.</div>
        <div className="sb14-tape tape-checklist"></div>
        <ul className="sb14-list">
          <li><span>&#9744;</span> momos</li>
          <li><span>&#9744;</span> biryani</li>
          <li><span>&#9744;</span> la la land</li>
          <li><span>&#9744;</span> deep talks</li>
          <li><span>&#9744;</span> random plans</li>
          <li><span>&#9744;</span> more to come...</li>
        </ul>
      </div>

      {/* Main Single Polaroid */}
      <div className="sb14-element polaroid-main">
        <div className="sb14-small-tag tag-mat-kar">mat kar lala</div>
        <div className="sb14-tape tape-main"></div>
        <div className="sb14-polaroid">
          <div className="sb14-polaroid-img">
            <img src="/images/w1.jpeg" alt="Rakhashanda" style={{width:'100%', height:'100%', objectFit:'cover'}} />
          </div>
          <p className="sb14-polaroid-caption">just 14 days in...</p>
        </div>
      </div>

      {/* Top Far Right Text */}
      <div className="sb14-far-right-text">
        <p>SAME GIRL.</p>
        <p>BRIGHTER</p>
        <p>DAYS. &hearts;</p>
      </div>

      {/* Middle Right Note */}
      <div className="sb14-element note-basaline">
        <p>basaline &hearts;</p>
      </div>


      {/* Bottom Right Box Text */}
      <div className="sb14-element box-text-corner">
        <p>BETTER</p>
        <p>CONVERSATIONS</p>
        <p>BRIGHTER DAYS</p>
        <p>SAME YOU</p>
        <p>MORE TO COME</p>
        <p className="box-heart">&hearts;</p>
      </div>

      {/* Decorative Assets Placeholders */}
      <div className="sb14-floral f-2"><span role="img" aria-label="petal" style={{fontSize: '4rem'}}>🌸</span></div>
      <div className="sb14-floral f-3"><span role="img" aria-label="leaf" style={{fontSize: '8rem'}}>🌿</span></div>

      {/* Scroll indicator */}
      <div className="sb14-scroll">
        <div className="sb14-scroll-line"></div>
        <p>SCROLL TO CONTINUE</p>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a08085" strokeWidth="1.5">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      {/* Sparkles */}
      <div className="sb14-sparkle spk-1">☆</div>
      <div className="sb14-sparkle spk-2">☆</div>
      <div className="sb14-sparkle spk-3">☆</div>
    </div>
  );
}
