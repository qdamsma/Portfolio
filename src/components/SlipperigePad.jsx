import { useState, useEffect } from 'react'
import './SlipperigePad.scss'
import banaan from '../assets/banana.png'

function findStart(grid) {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++){
      if (grid[row][col] === 'S'){
        return { row, col };
      };
    };
  };
};

function move(grid, pos, direction) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dr = direction === 'down' ? 1 : direction === 'up' ? -1 : 0;
  const dc = direction === 'right' ? 1 : direction === 'left' ? -1 : 0;

  const nextRow = pos.row + dr
  const nextCol = pos.col + dc

  if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols){
    return pos
  }; 

  const cell = grid[nextRow][nextCol];

  // Collisions - W = Walls, E = Exit, - = leeg vakje, S = Start, B = Banaan
  if (cell === 'W'){
    return pos;
  };
  if (cell === 'E'){
    return { row: nextRow, col: nextCol, won: true };
  };
  if (cell === '-' || cell === 'S') {
    return { row: nextRow, col: nextCol };
  }; 
  if (cell === 'B') {
    let r = nextRow;
    let c = nextCol;

    while (true) {
      const nr = r + dr;
      const nc = c + dc;

      // Stop als het volgende stapje uit het grid gaat - voor de start
      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) {
        break;
      };

      const next = grid[nr][nc];

      // Stop voor een Wall
      if (next === 'W'){
        break;
      };
      
      r = nr
      c = nc
    };

    // Return de positie waar ik de muur raak
    return { row: r, col: c };
  };

  return pos
};

function SlipperigePad({ grid }) {
  const start = findStart(grid);
  const [pos, setPos] = useState(start);
  const [won, setWon] = useState(false);

  // Luistert naar ingedrukte pijltoetsen
  useEffect(() => {
    function onKey(e) {
      if (won){
        return;
      }
      let direction = null
      if (e.key === 'ArrowLeft'){
        direction = 'left';
      } 
      if (e.key === 'ArrowDown'){
        direction = 'down';
      }
      if (e.key === 'ArrowUp'){
        direction = 'up';
      }
      if (e.key === 'ArrowRight'){
        direction = 'right';
      }
      if (!direction) {
        return;
      }
      e.preventDefault();

      const next = move(grid, pos, direction);
      setPos(next)
      if (next.won){
        setWon(true);
      };
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [pos, won]);

  // Verplaatst de speler in de opgegeven richting via de knoppen
  function step(direction) {
    if (won){
      return;
    }
    const next = move(grid, pos, direction);
    setPos(next);
    if (next.won){
      setWon(true)
    } 
  }

  function reset() {
    setPos(start)
    setWon(false)
  }

  return (
    <div className="puzzle">
      <p className="puzzle__uitleg">
        Maak je weg van het startpunt naar het doel, maar pas op voor bananenschillen. Als je op een schil stapt, glij je door zonder te stoppen totdat je een muur raakt!
      </p>
      <ul className="puzzle__legenda">
        <li><span className="puzzle__cell puzzle__cell--exit" /> Het doel</li>
        <li><span className="puzzle__cell puzzle__cell--peel"><img src={banaan} alt="banaan" /></span> Bananenschil</li>
        <li><span className="puzzle__cell puzzle__cell--wall" /> Muur</li>
      </ul>
      {won && <p className="puzzle__message">Gelukt!</p>}
      <div
        className="puzzle__grid"
        style={{ gridTemplateColumns: `repeat(${grid[0].length}, 1fr)` }}
      >
        {grid.map((row, r) =>
          row.map((cell, c) => {
            const isPlayer = pos.row === r && pos.col === c
            let type = 'empty'
            if (cell === 'W') type = 'wall'
            else if (cell === 'B') type = 'peel'
            else if (cell === 'E') type = 'exit'

            return (
              <div
                key={`${r}-${c}`}
                className={`puzzle__cell puzzle__cell--${type}`}
              >
                {cell === 'B' && <img src={banaan} alt="banaan" className="puzzle__banaan" />}
                {isPlayer && <span className="puzzle__player" />}
              </div>
            )
          })
        )}
      </div>
      <div className="puzzle__buttons">
        <button className="puzzle__button puzzle__button--up" onPointerDown={(e) => { e.preventDefault(); step('up'); }}>↑</button>
        <button className="puzzle__button puzzle__button--left" onPointerDown={(e) => { e.preventDefault(); step('left'); }}>←</button>
        <button className="puzzle__button puzzle__button--reset puzzle__button--secondary" onPointerDown={(e) => { e.preventDefault(); reset(); }}>↺</button>
        <button className="puzzle__button puzzle__button--right" onPointerDown={(e) => { e.preventDefault(); step('right'); }}>→</button>
        <button className="puzzle__button puzzle__button--down" onPointerDown={(e) => { e.preventDefault(); step('down'); }}>↓</button>
      </div>
      <p className="puzzle__hint">Je kunt ook de pijltoetsen gebruiken</p>
    </div>
  )
}

export default SlipperigePad
