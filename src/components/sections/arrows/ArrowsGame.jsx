import React, { useState, useEffect, useCallback } from 'react';
import { generateTapAwayMaze, canEscape } from '../../../utils/mazeGenerator';
import MazeRenderer from './MazeRenderer';
import confetti from 'canvas-confetti';
import './ArrowsGame.css';

const LEVELS = [
  { level: 1, size: 8 },
  { level: 2, size: 10 },
  { level: 3, size: 12 },
  { level: 4, size: 15 },
  { level: 5, size: 18 },
];

export default function ArrowsGame() {
  const [gameState, setGameState] = useState('intro'); // intro, playing, level_complete, game_complete
  const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
  const [maze, setMaze] = useState(null);
  const [pieces, setPieces] = useState([]);
  const [animatingPieces, setAnimatingPieces] = useState({}); // { id: 'slide' | 'shake' }
  const [moves, setMoves] = useState(0);

  const initLevel = useCallback((levelIdx) => {
    const size = LEVELS[levelIdx].size;
    const newMaze = generateTapAwayMaze(size, size);
    setMaze(newMaze);
    setPieces(newMaze.pieces);
    setAnimatingPieces({});
    setMoves(0);
    setGameState('playing');
  }, []);

  const handleStart = () => {
    setCurrentLevelIdx(0);
    initLevel(0);
  };

  const handleNextLevel = () => {
    if (currentLevelIdx < LEVELS.length - 1) {
      setCurrentLevelIdx(prev => prev + 1);
      initLevel(currentLevelIdx + 1);
    } else {
      setGameState('game_complete');
    }
  };

  const resetLevel = () => {
    initLevel(currentLevelIdx);
  };

  const handlePieceClick = (piece) => {
    if (gameState !== 'playing') return;
    if (animatingPieces[piece.id]) return; // already animating

    const otherPieces = pieces.filter(p => p.id !== piece.id);
    const occupied = new Set();
    otherPieces.forEach(p => p.cells.forEach(c => occupied.add(`${c.x},${c.y}`)));

    const canMove = canEscape(piece.cells, piece.dir, occupied, maze.width, maze.height);

    setMoves(m => m + 1);

    if (canMove) {
      // Trigger slide animation
      setAnimatingPieces(prev => ({ ...prev, [piece.id]: 'slide' }));
      
      // Remove piece after animation finishes
      setTimeout(() => {
        setPieces(prev => {
          const next = prev.filter(p => p.id !== piece.id);
          if (next.length === 0) {
            setTimeout(() => {
              confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#f5e1e5', '#8b4a58', '#dca7b3']
              });
              setGameState('level_complete');
            }, 400);
          }
          return next;
        });
      }, 500); // match CSS animation duration
    } else {
      // Trigger shake animation
      setAnimatingPieces(prev => ({ ...prev, [piece.id]: 'shake' }));
      
      setTimeout(() => {
        setAnimatingPieces(prev => {
          const next = {...prev};
          delete next[piece.id];
          return next;
        });
      }, 300); // match CSS shake duration
    }
  };

  return (
    <div className="arrows-game-container">
      
      {/* HEADER */}
      {gameState !== 'intro' && (
        <div className="game-header">
          <div className="level-info">LEVEL 0{currentLevelIdx + 1} / 0{LEVELS.length}</div>
          <div className="header-title">ARROWS</div>
          <div className="moves-info">MOVES: {moves.toString().padStart(3, '0')}</div>
        </div>
      )}

      {/* GAME AREA */}
      <div className="game-area">
        
        {gameState === 'intro' && (
          <div className="intro-screen">
            <h2>you said you like this game.</h2>
            <p>so obviously, i had to put it here.</p>
            <p className="intro-rule">tap the arrows. clear the board. don't crash.</p>
            <button className="play-btn" onClick={handleStart}>PLAY &rarr;</button>
          </div>
        )}

        {maze && (gameState === 'playing' || gameState === 'level_complete') && (
          <MazeRenderer 
            maze={maze} 
            pieces={pieces} 
            animatingPieces={animatingPieces}
            onPieceClick={handlePieceClick} 
          />
        )}

        {gameState === 'level_complete' && currentLevelIdx < LEVELS.length - 1 && (
          <div className="overlay-screen">
            <h2>congratulations...</h2>
            <p>bas abh sac pe mat khelna</p>
            <button className="next-btn" onClick={handleNextLevel}>NEXT LEVEL &rarr;</button>
          </div>
        )}

        {(gameState === 'game_complete' || (gameState === 'level_complete' && currentLevelIdx === LEVELS.length - 1)) && (
          <div className="overlay-screen">
            <h2>YOU MADE IT.</h2>
            <p>apparently you are good at this.</p>
            <h1 className="final-bday-msg">happy birthday, rakhashanda &hearts;</h1>
            <button className="reset-btn" onClick={handleStart}>PLAY AGAIN</button>
          </div>
        )}
      </div>

      {/* DESKTOP RESET */}
      {gameState === 'playing' && (
        <div className="desktop-footer">
          <button className="desktop-reset" onClick={resetLevel}>RESET MAZE</button>
        </div>
      )}

    </div>
  );
}
