export function canEscape(pieceCells, dir, occupiedCellsByOtherPieces, width, height) {
  for (let cell of pieceCells) {
    let currX = cell.x + dir.dx;
    let currY = cell.y + dir.dy;
    // Check if the ray in direction `dir` from `cell` hits any OTHER piece
    while (currX >= -1 && currX <= width && currY >= -1 && currY <= height) {
      if (occupiedCellsByOtherPieces.has(`${currX},${currY}`)) {
        return false; // Collision
      }
      currX += dir.dx;
      currY += dir.dy;
    }
  }
  return true;
}

export function generateTapAwayMaze(width, height) {
  const pieces = [];
  const occupied = new Set();
  
  let attempts = 0;
  let pieceId = 0;
  
  // We try to fill the board. We stop if we fail many times in a row.
  while (attempts < 1000) {
    attempts++;
    
    // 1. Pick a random empty cell
    const emptyCells = [];
    for(let x = 0; x < width; x++) {
      for(let y = 0; y < height; y++) {
        if (!occupied.has(`${x},${y}`)) emptyCells.push({x, y});
      }
    }
    
    // If board is getting very full, it's harder to place things. We might stop early.
    if (emptyCells.length === 0) break;
    
    const startCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    
    // 2. Random walk to build a shape
    const shape = [startCell];
    const shapeSet = new Set([`${startCell.x},${startCell.y}`]);
    // Random length between 2 and 6
    const maxLen = 2 + Math.floor(Math.random() * 5); 
    let curr = startCell;
    let lastDir = null;
    
    for (let i = 1; i < maxLen; i++) {
      const dirs = [
        {dx: 0, dy: -1}, {dx: 1, dy: 0}, {dx: 0, dy: 1}, {dx: -1, dy: 0}
      ].sort(() => Math.random() - 0.5);
      
      let moved = false;
      for (let d of dirs) {
        const nx = curr.x + d.dx;
        const ny = curr.y + d.dy;
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          if (!occupied.has(`${nx},${ny}`) && !shapeSet.has(`${nx},${ny}`)) {
            shape.push({x: nx, y: ny});
            shapeSet.add(`${nx},${ny}`);
            curr = {x: nx, y: ny};
            lastDir = d;
            moved = true;
            break;
          }
        }
      }
      if (!moved) break;
    }
    
    if (shape.length < 2 || !lastDir) continue; // We want lines, not just single dots
    
    // 3. Check if shape can escape in lastDir
    if (canEscape(shape, lastDir, occupied, width, height)) {
      // Add piece
      pieces.push({
        id: `piece-${pieceId++}`,
        cells: shape,
        dir: lastDir
      });
      // Mark occupied
      shape.forEach(c => occupied.add(`${c.x},${c.y}`));
      attempts = 0; // reset attempts since we succeeded
    }
  }
  
  // Return pieces randomized so the order they are drawn/listed isn't the solution order
  return { 
    width, 
    height, 
    pieces: pieces.sort(() => Math.random() - 0.5) 
  };
}
