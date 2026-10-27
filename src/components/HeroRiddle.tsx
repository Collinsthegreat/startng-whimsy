import React, { useState } from 'react';
import { BronzeHeadSvg } from './BronzeHeadSvg';
import { RiddleOption, MascotHat } from '../types';
import { playThunk, playVictory, playShekere } from '../audio';
import { triggerConfetti } from '../confetti';
import { FlagPinIcon, ResetIcon } from './Icons';

interface HeroRiddleProps {
  onPlayRoots: () => void;
}

const HATS: MascotHat[] = ['fila', 'gele', 'cap', 'crown', 'shades'];

const OPTIONS: RiddleOption[] = [
  { id: 'kano', label: 'Kano', correct: false },
  { id: 'edo', label: 'Edo', correct: true },
  { id: 'lagos', label: 'Lagos', correct: false },
];

export const HeroRiddle: React.FC<HeroRiddleProps> = ({ onPlayRoots }) => {
  const [tumbledIds, setTumbledIds] = useState<string[]>([]);
  const [solved, setSolved] = useState<boolean>(false);
  const [hatIndex, setHatIndex] = useState<number>(0);
  const [isSquashing, setIsSquashing] = useState<boolean>(false);

  const currentHat = HATS[hatIndex]!;

  const cycleHat = () => {
    setIsSquashing(true);
    playShekere();
    setHatIndex((prev) => (prev + 1) % HATS.length);
    setTimeout(() => setIsSquashing(false), 450);
  };

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
    <div className="storyteller-capsule" role="region" aria-label="Playable Storyteller Riddle">
      <div className="storyteller-grid">
        {/* Left: The Mascot Storyteller & Ancient Bronze Head */}
        <div className="storyteller-art-col">
          {/* Interactive Mascot */}
          <div
            className={`mascot-avatar-trigger ${isSquashing ? 'squashing' : ''}`}
            onClick={cycleHat}
            role="button"
            tabIndex={0}
            aria-label="Storyteller mascot. Tap to cycle attire."
          >
            <svg width="64" height="64" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="34" cy="38" r="22" fill="#8d5524" stroke="#292a23" strokeWidth="2.5" />
              <circle cx="28" cy="38" r="3" fill="#292a23" />
              <circle cx="40" cy="38" r="3" fill="#292a23" />
              <path
                d={solved ? 'M28 44C31 49 37 49 40 44' : 'M30 46C32 48 36 48 38 46'}
                stroke="#292a23"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Dynamic Hat Overlay */}
              {currentHat === 'fila' && (
                <path
                  d="M20 25C22 14 42 12 48 18C44 20 46 25 44 26C38 28 26 28 20 25Z"
                  fill="#eb5757"
                  stroke="#292a23"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
              )}
              {currentHat === 'gele' && (
                <path
                  d="M14 26C12 16 22 8 34 8C46 8 56 16 54 26C58 22 56 14 46 11C34 8 22 11 14 26Z"
                  fill="#d8fd71"
                  stroke="#292a23"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
              )}
              {currentHat === 'cap' && (
                <path
                  d="M22 26C22 18 46 18 46 26H52C52 28 48 29 44 29H22V26Z"
                  fill="#278546"
                  stroke="#292a23"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
              )}
              {currentHat === 'crown' && (
                <path
                  d="M22 26L22 16L28 20L34 14L40 20L46 16L46 26H22Z"
                  fill="#f5a623"
                  stroke="#292a23"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
              )}
              {currentHat === 'shades' && (
                <g>
                  <rect x="22" y="34" width="11" height="8" rx="2" fill="#292a23" stroke="#d8fd71" strokeWidth="1.5" />
                  <rect x="35" y="34" width="11" height="8" rx="2" fill="#292a23" stroke="#d8fd71" strokeWidth="1.5" />
                  <line x1="33" y1="38" x2="35" y2="38" stroke="#d8fd71" strokeWidth="2" />
                </g>
              )}
            </svg>
          </div>

          {/* Large Benin Bronze Head Artwork */}
          <div className="bronze-hero-frame">
            <BronzeHeadSvg size={68} />
          </div>
        </div>

        {/* Right: The 5-Word Riddle & Chunky Pills */}
        <div className="storyteller-content-col">
          <h2 className="riddle-title">Benin Bronzes come from…?</h2>

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
                >
                  {isCorrectWin ? `${opt.label} ✓` : opt.label}
                </button>
              );
            })}
          </div>

          {solved && (
            <div className="riddle-win-banner">
              <div className="win-meta">
                <span className="win-flag-pill">
                  <FlagPinIcon size={16} />
                </span>
                <span className="win-txt">Edo Kingdom • ROOTS 3D</span>
              </div>

              <div className="win-actions">
                <button className="btn-chunky btn-accent" onClick={onPlayRoots}>
                  Play ROOTS 3D →
                </button>
                <button
                  className="btn-chunky btn-icon-only"
                  onClick={resetRiddle}
                  aria-label="Replay riddle"
                >
                  <ResetIcon size={15} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
