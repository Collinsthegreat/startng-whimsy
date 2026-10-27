import React, { useRef } from 'react';
import { GameCartridge } from '../types';
import { FEATURED_GAMES } from '../data/games';
import { playShekere } from '../audio';

interface CartridgeShelfProps {
  onSelectCartridge: (game: GameCartridge) => void;
}

export const CartridgeShelf: React.FC<CartridgeShelfProps> = ({ onSelectCartridge }) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / rect.height) * 12;
    const rotateY = (x / rect.width) * 12;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <section className="shelf-section" id="arcade-shelf">
      <div className="section-head">
        <div>
          <h2 className="section-title">Arcade Cartridge Shelf</h2>
          <div style={{ color: 'var(--muted)', fontSize: '0.92rem', marginTop: '4px' }}>
            Tap any cartridge to slide into the console
          </div>
        </div>
        <div className="section-count">{FEATURED_GAMES.length} INDIE GAMES</div>
      </div>

      <div className="cartridge-grid">
        {FEATURED_GAMES.map((game, i) => (
          <div
            key={game.id}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`cartridge-card ${game.legendary ? 'legendary' : ''}`}
            onMouseMove={(e) => handleMouseMove(i, e)}
            onMouseLeave={() => handleMouseLeave(i)}
            onClick={() => {
              playShekere();
              onSelectCartridge(game);
            }}
            role="button"
            tabIndex={0}
            aria-label={`${game.title}: ${game.subtitle}. Tap to load cartridge.`}
          >
            <div>
              <div className="cartridge-top">
                <div className="cartridge-notch" />
                {game.legendary && <div className="legendary-badge">★ Featured</div>}
              </div>

              <h3 className="cartridge-title">{game.title}</h3>
              <p className="cartridge-subtitle">{game.subtitle}</p>

              <div className="cartridge-tags">
                {game.tags.map((t) => (
                  <span key={t} className="tag-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="cartridge-bottom">
              <div className="creator-name">
                by <b>{game.creator}</b>
              </div>
              <button
                className={`btn-chunky ${game.legendary ? 'btn-accent' : ''}`}
                style={{ padding: '6px 14px', fontSize: '0.84rem' }}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectCartridge(game);
                }}
              >
                Insert ▾
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
