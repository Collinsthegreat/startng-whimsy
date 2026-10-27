import React, { useState } from 'react';
import { BronzeHeadSvg } from './BronzeHeadSvg';
import { RiddleOption } from '../types';
import { playThunk, playVictory } from '../audio';
import { triggerConfetti } from '../confetti';

interface HeroRiddleProps {
  onPlayRoots: () => void;
}

const OPTIONS: RiddleOption[] = [
  { id: 'kano', label: 'Kano', correct: false },
  { id: 'edo', label: 'Edo', correct: true },
  { id: 'lagos', label: 'Lagos', correct: false },
];

export const HeroRiddle: React.FC<HeroRiddleProps> = ({ onPlayRoots }) => {
  const [tumbledIds, setTumbledIds] = useState<string[]>([]);
  const [solved, setSolved] = useState<boolean>(false);

  const handlePillClick = (option: RiddleOption, e: React.MouseEvent<HTMLButtonElement>) => {
    if (solved || tumbledIds.includes(option.id)) return;

    if (option.correct) {
      setSolved(true);
      const rect = e.currentTarget.getBoundingClientRect();
      triggerConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
      playVictory();
    } else {
      playThunk();
      setTumbledIds((prev) => [...prev, option.id]);
    }
  };

  const resetRiddle = () => {
    setTumbledIds([]);
    setSolved(false);
  };

  return (
    <div className="riddle-capsule" role="region" aria-label="Micro-Arcade Riddle">
      <div className="riddle-header">
        <div className="bronze-icon-wrap">
          <BronzeHeadSvg size={38} />
        </div>
        <h2 className="riddle-question">Benin Bronzes come from…?</h2>
      </div>

      <div className="riddle-pills">
        {OPTIONS.map((opt) => {
          const isTumbled = tumbledIds.includes(opt.id);
          const isCorrectWin = solved && opt.correct;

          return (
            <button
              key={opt.id}
              className={`riddle-pill ${isTumbled ? 'tumbled' : ''} ${isCorrectWin ? 'correct-win' : ''}`}
              onClick={(e) => handlePillClick(opt, e)}
              disabled={isTumbled}
              aria-label={opt.label}
            >
              {isCorrectWin ? `🇳🇬 ${opt.label} ✓` : opt.label}
            </button>
          );
        })}
      </div>

      {solved && (
        <div className="riddle-victory-zone">
          <div className="victory-message">
            <div className="flag-planted">🚩</div>
            <div>
              <div className="victory-title">Spot on! You unlocked ROOTS 3D</div>
              <div className="victory-sub">Explore all 67 Nigerian tribes & 54 African nations</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button className="btn-chunky btn-accent" onClick={onPlayRoots}>
              Play ROOTS 3D →
            </button>
            <button
              className="btn-chunky"
              onClick={resetRiddle}
              style={{ fontSize: '0.8rem', padding: '8px 12px' }}
              title="Reset and try again"
            >
              ↺
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
