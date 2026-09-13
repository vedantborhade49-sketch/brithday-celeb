import React from 'react';
import './MazeRenderer.css';

export default function MazeRenderer({ maze, pieces, animatingPieces, onPieceClick }) {
  if (!maze) return null;

  const cellSize = 40; // Pixels per grid cell
  const padding = 20;

  const viewBoxWidth = maze.width * cellSize + padding * 2;
  const viewBoxHeight = maze.height * cellSize + padding * 2;

  const getCoord = (c) => ({
    cx: c.x * cellSize + padding + cellSize / 2,
    cy: c.y * cellSize + padding + cellSize / 2
  });

  const getDirName = (dir) => {
    if (dir.dy === -1) return 'UP';
    if (dir.dy === 1) return 'DOWN';
    if (dir.dx === -1) return 'LEFT';
    if (dir.dx === 1) return 'RIGHT';
    return '';
  };

  return (
    <div className="maze-renderer-wrapper">
      <svg 
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} 
        className="maze-svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background Grid Dots */}
        {Array.from({ length: maze.width }).map((_, x) => 
          Array.from({ length: maze.height }).map((_, y) => (
            <circle 
              key={`dot-${x}-${y}`}
              cx={x * cellSize + padding + cellSize/2}
              cy={y * cellSize + padding + cellSize/2}
              r="1.5"
              fill="rgba(0,0,0,0.08)"
            />
          ))
        )}

        {/* Pieces */}
        {pieces.map((piece) => {
          const points = piece.cells.map(c => {
            const { cx, cy } = getCoord(c);
            return `${cx},${cy}`;
          }).join(' ');

          const headPos = getCoord(piece.cells[piece.cells.length - 1]);
          
          let angle = 0;
          if (piece.dir.dx === 1) angle = 0; // right
          else if (piece.dir.dx === -1) angle = 180; // left
          else if (piece.dir.dy === 1) angle = 90; // down
          else if (piece.dir.dy === -1) angle = 270; // up

          const animType = animatingPieces[piece.id];
          const dirName = getDirName(piece.dir);
          let classNames = 'maze-piece';
          if (animType === 'shake') classNames += ` shake-${dirName}`;
          if (animType === 'slide') classNames += ` slide-${dirName}`;

          return (
            <g 
              key={piece.id} 
              className={classNames}
              onClick={() => onPieceClick(piece)}
            >
              {/* Invisible thicker path for easier clicking/tapping */}
              <polyline 
                points={points} 
                fill="none" 
                stroke="transparent" 
                strokeWidth="20" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              {/* Actual visible path */}
              <polyline 
                points={points} 
                fill="none" 
                className="piece-line"
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              {/* Arrowhead */}
              <g transform={`translate(${headPos.cx}, ${headPos.cy}) rotate(${angle})`}>
                <path 
                  d="M -7 -6 L 1 0 L -7 6" 
                  fill="none" 
                  className="piece-arrow"
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
