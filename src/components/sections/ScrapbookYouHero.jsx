import React from 'react';
import './ScrapbookYouHero.css';

export default function ScrapbookYouHero() {
  return (
    <div className="you-scrapbook">
      
      {/* ================= CENTER CONTENT ================= */}
      <div className="sy-center">
        <p className="sy-top-center">A FEW FRAMES FROM</p>
        <h1 className="sy-title">moments</h1>
        <h1 className="sy-title-2">that matter.</h1>
        
        <p className="sy-subtitle">same girl. different days.</p>
        <p className="sy-subtitle-2">still her. still special.</p>
        <div className="sy-heart">&hearts;</div>
      </div>

      <div className="sy-scroll">
        <div className="sy-scroll-line"></div>
        <p>SCROLL FOR A LITTLE NOTE</p>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a08085" strokeWidth="1.5">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      {/* ================= LEFT SIDE ================= */}
      
      {/* Top Left Note */}
      <div className="sy-element sy-note-top-left">
        <p>one for</p>
        <p>the camera roll &hearts;</p>
      </div>

      {/* Tall Polaroid Left */}
      <div className="sy-element sy-polaroid-tall-left">
        <div className="sy-tape tape-tall-left"></div>
        <div className="sy-polaroid polaroid-tall">
          <div className="sy-polaroid-img">
            {/* Placeholder */}
            <div style={{width:'100%', height:'100%', background:'#cc9999'}} />
          </div>
          <p className="sy-polaroid-caption">this felt right here &hearts;</p>
        </div>
      </div>

      {/* Middle Left Text Note */}
      <div className="sy-element sy-note-mid-left">
        <p>good</p>
        <p>people</p>
        <p>brighter</p>
        <p>days &hearts;</p>
      </div>

      {/* Bottom Left Square Polaroid */}
      <div className="sy-element sy-polaroid-bottom-left">
        <div className="sy-tape tape-bottom-left"></div>
        <div className="sy-polaroid">
          <div className="sy-polaroid-img">
            {/* Placeholder */}
            <div style={{width:'100%', height:'100%', background:'#bd8c8c'}} />
          </div>
          <p className="sy-polaroid-caption sm-caption">14 days in...</p>
        </div>
      </div>


      {/* ================= RIGHT SIDE ================= */}

      {/* Top Right Checklist */}
      <div className="sy-element sy-note-checklist">
        <div className="sy-tape tape-checklist-top"></div>
        <ul className="sy-list">
          <li><span>&#9744;</span> better conversations</li>
          <li><span>&#9744;</span> random plans</li>
          <li><span>&#9744;</span> more momos</li>
          <li><span>&#9744;</span> la la land</li>
          <li><span>&#9744;</span> many more... &hearts;</li>
        </ul>
      </div>

      {/* Top Right Text Note */}
      <div className="sy-element sy-note-top-right">
        <p>same</p>
        <p>silliness</p>
        <p>same girl</p>
        <p>brighter days &hearts;</p>
      </div>

      {/* Upper Right Square Polaroid (Tulips) */}
      <div className="sy-element sy-polaroid-upper-right">
        <div className="sy-tape tape-upper-right"></div>
        <div className="sy-polaroid polaroid-square">
          <div className="sy-polaroid-img">
            {/* Placeholder */}
            <div style={{width:'100%', height:'100%', background:'#d69a9a'}} />
          </div>
          <p className="sy-polaroid-caption">just because &hearts;</p>
        </div>
      </div>

      {/* Middle Right Wide Polaroid */}
      <div className="sy-element sy-polaroid-wide-right">
        <div className="sy-tape tape-wide-right"></div>
        <div className="sy-polaroid polaroid-wide">
          <div className="sy-polaroid-img">
            {/* Placeholder */}
            <div style={{width:'100%', height:'100%', background:'#b28080'}} />
          </div>
          <p className="sy-polaroid-caption">more of this.</p>
        </div>
        
        {/* Layered Note over wide polaroid */}
        <div className="sy-layered-note">
          <p>chill karo yar</p>
          <p>mat kar lala</p>
          <p>ok yaarr</p>
          <p>basaline &hearts;</p>
        </div>
      </div>

      {/* Far Right Film Strip */}
      <div className="sy-film-strip">
        <div className="sy-film-hole"></div>
        <div className="sy-film-hole"></div>
        <div className="sy-film-hole"></div>
        <div className="sy-film-hole"></div>
        <div className="sy-film-hole"></div>
        <div className="sy-film-hole"></div>
        <div className="sy-film-hole"></div>
        <div className="sy-film-frame">
          <div style={{width:'100%', height:'100%', background:'#8c4a4a'}} />
        </div>
        <div className="sy-film-hole"></div>
        <div className="sy-film-hole"></div>
        <div className="sy-film-hole"></div>
        <div className="sy-film-hole"></div>
      </div>

      {/* Bottom Right Text Note */}
      <div className="sy-element sy-note-bottom-right">
        <p>collecting</p>
        <p>little moments &hearts;</p>
        <svg className="sy-drawn-heart" viewBox="0 0 100 100" fill="none" stroke="#5c3a41" strokeWidth="3">
          <path d="M50 85 C50 85, 20 60, 15 35 C10 15, 45 10, 50 35 C55 10, 90 15, 85 35 C80 60, 50 85, 50 85 Z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* ================= DECORATIONS ================= */}
      
      {/* Flowers & Petals */}
      <div className="sy-petal yp-1"><span role="img" aria-label="petal" style={{fontSize: '4rem'}}>🌸</span></div>
      <div className="sy-petal yp-2"><span role="img" aria-label="petal" style={{fontSize: '3.5rem'}}>🌸</span></div>
      <div className="sy-petal yp-3"><span role="img" aria-label="petal" style={{fontSize: '3rem'}}>🌸</span></div>
      <div className="sy-petal yp-4"><span role="img" aria-label="petal" style={{fontSize: '4.5rem'}}>🌸</span></div>
      <div className="sy-petal yp-5"><span role="img" aria-label="petal" style={{fontSize: '3.5rem'}}>🌸</span></div>
      <div className="sy-petal yp-6"><span role="img" aria-label="petal" style={{fontSize: '2.5rem'}}>🌸</span></div>
      
      {/* Tulip / Baby's Breath */}
      <div className="sy-petal yp-7"><span role="img" aria-label="tulip" style={{fontSize: '12rem'}}>🌷</span></div>
      <div className="sy-petal yp-8"><span role="img" aria-label="leaf" style={{fontSize: '6rem'}}>🌿</span></div>

    </div>
  );
}
