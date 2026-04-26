import { useState, useEffect, useRef, useMemo } from 'react'
import './SlipperigePad.scss'
import banaan from '../assets/banana.png'
import spriteLeft from '../assets/sprites/sprite-left.png'
import spriteRight from '../assets/sprites/sprite-right.png'

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

  // Collisions - W = Muur, G = Gat (reset), E = Uitgang, - = leeg, S = Start, B = Banaan
  if (cell === 'W'){
    return pos;
  };
  if (cell === 'G'){
    return { row: nextRow, col: nextCol, gereset: true };
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

      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) break;

      const next = grid[nr][nc];

      if (next === 'W') break;
      if (next === 'G') return { row: nr, col: nc, gereset: true };

      r = nr
      c = nc
    };

    return { row: r, col: c };
  };

  return pos
};

function SlipperigePad({ grid }) {
  const start = useMemo(() => findStart(grid), [grid]);
  const [pos, setPos] = useState(start);
  const [won, setWon] = useState(false);
  const [gereset, setGereset] = useState(false);
  const [facing, setFacing] = useState('right');
  const containerRef = useRef(null);

  useEffect(() => {
    new Image().src = spriteLeft
    new Image().src = spriteRight
  }, [])

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

      if (direction === 'left') setFacing('left');
      if (direction === 'right') setFacing('right');
      const next = move(grid, pos, direction);
      if (next.gereset) {
        setPos({ row: next.row, col: next.col });
        setGereset(true);
        setTimeout(() => { setPos(start); setGereset(false); }, 900);
        return;
      }
      setPos(next);
      if (next.won) setWon(true);
    };
    const el = containerRef.current;
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [pos, won, grid, start]);

  // Verplaatst de speler in de opgegeven richting via de knoppen
  function step(direction) {
    if (won || gereset) return;
    if (direction === 'left') setFacing('left');
    if (direction === 'right') setFacing('right');
    const next = move(grid, pos, direction);
    if (next.gereset) {
      setPos({ row: next.row, col: next.col });
      setGereset(true);
      setTimeout(() => { setPos(start); setGereset(false); }, 900);
      return;
    }
    setPos(next);
    if (next.won) setWon(true);
  }

  function reset() {
    setPos(start)
    setWon(false)
  }

  const heeftGat = grid.flat().includes('G')

  return (
    <div
      className="puzzle"
      ref={containerRef}
      tabIndex={0}
      aria-label="Puzzel, gebruik pijltoetsen om te bewegen"
    >
      <p className="puzzle__uitleg">
        Maak je weg van het startpunt naar het doel, maar pas op voor bananenschillen. Als je op een schil stapt, glij je door zonder te stoppen totdat je een muur raakt!
        {heeftGat && ' Val niet in het gat!'}
      </p>
      <ul className="puzzle__legenda">
        <li><span className="puzzle__cell puzzle__cell--exit" /> Het doel</li>
        <li><span className="puzzle__cell puzzle__cell--peel"><img src={banaan} alt="banaan" /></span> Bananenschil</li>
        <li><span className="puzzle__cell puzzle__cell--wall" /> Muur</li>
        {heeftGat && <li><span className="puzzle__cell puzzle__cell--gat" /> Gat</li>}
      </ul>
      {gereset && <p className="puzzle__message puzzle__message--reset">Oeps! Opnieuw...</p>}
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
            else if (cell === 'G') type = 'gat'
            else if (cell === 'B') type = 'peel'
            else if (cell === 'E') type = 'exit'

            return (
              <div key={`${r}-${c}`} className={`puzzle__cell puzzle__cell--${type}`}>
                {cell === 'B' && <img src={banaan} alt="banaan" className="puzzle__banaan" />}
                {isPlayer && <img src={facing === 'left' ? spriteLeft : spriteRight} alt="speler" className={`puzzle__player${cell === 'B' ? ' puzzle__player--glijdt' : ''}${gereset ? ' puzzle__player--valt' : ''}`} />}
              </div>
            )
          })
        )}
      </div>
      <div className="puzzle__buttons">
        <button className="puzzle__button puzzle__button--up" onPointerDown={(e) => { e.preventDefault(); step('up'); }}><span className="material-icons">arrow_upward</span></button>
        <button className="puzzle__button puzzle__button--left" onPointerDown={(e) => { e.preventDefault(); step('left'); }}><span className="material-icons">arrow_back</span></button>
        <button className="puzzle__button puzzle__button--reset puzzle__button--secondary" onPointerDown={(e) => { e.preventDefault(); reset(); }}><span className="material-icons">replay</span></button>
        <button className="puzzle__button puzzle__button--right" onPointerDown={(e) => { e.preventDefault(); step('right'); }}><span className="material-icons">arrow_forward</span></button>
        <button className="puzzle__button puzzle__button--down" onPointerDown={(e) => { e.preventDefault(); step('down'); }}><span className="material-icons">arrow_downward</span></button>
      </div>
      <p className="puzzle__hint">Je kunt ook de pijltoetsen gebruiken</p>
      {!heeftGat && <a href='https://layton.fandom.com/wiki/Puzzle:Slippery_Trip_1' target="_blank" rel="noopener noreferrer">Antwoord</a>}
      {heeftGat && <a href='https://layton.fandom.com/wiki/Puzzle:Slippery_Trip_3' target="_blank" rel="noopener noreferrer">Antwoord</a>}
    </div>
  )
}

export default SlipperigePad
