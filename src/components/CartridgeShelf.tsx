import React, { useRef } from 'react';
import { GameCartridge } from '../types';
import { FEATURED_GAMES } from '../data/games';
import { playShekere } from '../audio';
import {
  CompassArt,
  TownPlazaArt,
  WordGridArt,
  DanfoBusArt,
  WhotCardArt,
  AyoBoardArt,
} from './Icons';

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
    const rotateX = -(y / rect.height) * 10;
    const rotateY = (x / rect.width) * 10;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  const renderGameArt = (artType: GameCartridge['artType']) => {
    switch (artType) {
      case 'roots':
        return <CompassArt />;
      case 'hangout':
        return <TownPlazaArt />;
      case 'wordle':
        return <WordGridArt />;
      case 'danfo':
        return <DanfoBusArt />;
      case 'whot':
        return <WhotCardArt />;
      case 'ayo':
        return <AyoBoardArt />;
    }
  };

  return (
    <section className="shelf-section" id="arcade">
      <div className="section-head">
        <h2 className="section-title">Arcade shelf</h2>
        <span className="section-count">{FEATURED_GAMES.length} cartridges</span>
      </div>

      <div className="cartridge-grid">
        {FEATURED_GAMES.map((game, i) => (
          <div
            key={game.id}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`cartridge-unit ${game.legendary ? 'legendary' : ''}`}
            style={{ '--cart-accent': game.color } as React.CSSProperties}
            onMouseMove={(e) => handleMouseMove(i, e)}
            onMouseLeave={() => handleMouseLeave(i)}
            onClick={() => {
              playShekere();
              onSelectCartridge(game);
            }}
            role="button"
            tabIndex={0}
            aria-label={`${game.title}: ${game.subtitle}`}
          >
            {/* Authentic Cartridge Notch & Grip Texture */}
            <div className="cartridge-grip-strip">
              <span className="notch-recess" />
              <span className="notch-line" />
              <span className="notch-line" />
              <span className="notch-line" />
            </div>

            {/* Cartridge Art Label */}
            <div className="cartridge-art-panel">
              <div className="cartridge-glyph-box">
                {renderGameArt(game.artType)}
              </div>
              <div className="cartridge-headings">
                <h3 className="cartridge-name">{game.title}</h3>
                <p className="cartridge-sub">{game.subtitle}</p>
              </div>
            </div>

            {/* Footer Row: Creator & Insert Action */}
            <div className="cartridge-action-row">
              <span className="cartridge-author">
                by <b>{game.creator}</b>
              </span>
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
