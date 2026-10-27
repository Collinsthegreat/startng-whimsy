import React from 'react';
import { GameCartridge } from '../types';

interface ConsoleSlotProps {
  activeCartridge: GameCartridge | null;
  inserting: boolean;
  onLaunch: () => void;
  onClose: () => void;
}

export const ConsoleSlot: React.FC<ConsoleSlotProps> = ({
  activeCartridge,
  inserting,
  onLaunch,
  onClose,
}) => {
  if (!activeCartridge) return null;

  return (
    <aside className={`console-dock ${activeCartridge ? 'active' : ''}`} aria-label="Arcade Console">
      <div className="console-inner">
        <div className="console-slot-visual">
          <div className="slot-opening" />
          <div>
            <div className="console-status-text">
              {inserting ? `INSERTING ${activeCartridge.title}…` : `LOCKED: ${activeCartridge.title}`}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
              {activeCartridge.subtitle}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button className="btn-chunky btn-accent" onClick={onLaunch} autoFocus>
            Launch game →
          </button>
          <button className="btn-chunky" onClick={onClose} aria-label="Eject cartridge">
            ⏏ Eject
          </button>
        </div>
      </div>
    </aside>
  );
};
