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

      {/* Middle Left Polaroid */}
      <div className="sb14-element polaroid-mid-left">
        <div className="sb14-tape tape-mid-left"></div>
        <div className="sb14-polaroid">
          <div className="sb14-polaroid-img">
            {/* Placeholder */}
            <div style={{width:'100%', height:'100%', background:'#d5b4b9'}} />
          </div>
          <p className="sb14-polaroid-caption">chill karo yar &hearts;</p>
        </div>
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

      {/* Top Right Polaroid */}
      <div className="sb14-element polaroid-top-right">
        <div className="sb14-small-tag tag-mat-kar">mat kar lala</div>
        <div className="sb14-tape tape-top-right"></div>
        <div className="sb14-polaroid polaroid-sm">
          <div className="sb14-polaroid-img">
            {/* Placeholder */}
            <div style={{width:'100%', height:'100%', background:'#e3c4c8'}} />
          </div>
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

      {/* Bottom Right Polaroid */}
      <div className="sb14-element polaroid-bottom-right">
        <div className="sb14-tape tape-bottom-right"></div>
        <div className="sb14-polaroid polaroid-tilt">
          <div className="sb14-polaroid-img">
            {/* Placeholder */}
            <div style={{width:'100%', height:'100%', background:'#bba2a6'}} />
          </div>
          <p className="sb14-polaroid-caption sm-caption">just 14 days in...</p>
        </div>
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
