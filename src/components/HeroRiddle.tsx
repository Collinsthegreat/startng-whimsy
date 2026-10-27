import React, { useEffect, useState } from 'react';
import { BronzeHeadSvg } from './BronzeHeadSvg';
import { RiddleOption } from '../types';
import { playThunk, playVictory } from '../audio';
import { triggerConfetti } from '../confetti';
import { ResetIcon } from './Icons';

interface HeroRiddleProps {
  onPlayRoots: () => void;
}

const RAW_OPTIONS: RiddleOption[] = [
  { id: 'kano', label: 'Kano', correct: false },
  { id: 'edo', label: 'Edo', correct: true },
  { id: 'lagos', label: 'Lagos', correct: false },
];

export const HeroRiddle: React.FC<HeroRiddleProps> = ({ onPlayRoots }) => {
  const [options, setOptions] = useState<RiddleOption[]>(RAW_OPTIONS);
  const [tumbledIds, setTumbledIds] = useState<string[]>([]);
  const [solved, setSolved] = useState<boolean>(false);

  // Randomize pill order on each session mount so Edo is not predictably always in the center
  useEffect(() => {
    setOptions([...RAW_OPTIONS].sort(() => Math.random() - 0.5));
  }, []);

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
    setOptions([...RAW_OPTIONS].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="storyteller-capsule" role="region" aria-label="Daily Mystery Riddle">
      <div className="storyteller-grid">
        {/* Left: The Royal Benin Bronze Head with subtle idle float */}
        <div className="bronze-hero-frame" aria-hidden="true">
          <BronzeHeadSvg size={72} />
        </div>

        {/* Right: The 5-Word Riddle & In-Place Transforming Slot */}
        <div className="storyteller-content-col">
          <h2 className="riddle-title">Benin Bronzes come from…?</h2>

          {/* Stable-height interactive slot: zero layout shift on win */}
          <div className="riddle-interactive-slot">
            {!solved ? (
              <div className="riddle-pills-row">
                {options.map((opt, idx) => {
                  const isTumbled = tumbledIds.includes(opt.id);

                  return (
                    <button
                      key={opt.id}
                      className={`riddle-pill-large ${isTumbled ? 'tumbled' : ''} ${idx === 0 ? 'idle-nudge' : ''}`}
                      onClick={(e) => handlePillClick(opt, e)}
                      disabled={isTumbled}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            ) : (
              /* Transforms in-place: exact same height, 0px layout shift */
              <div className="riddle-win-slot">
                <button
                  className="btn-chunky btn-accent btn-win-cta"
                  onClick={onPlayRoots}
                  autoFocus
                >
                  <span>Play ROOTS 3D →</span>
                </button>
                <button
                  className="btn-chunky btn-icon-only"
                  onClick={resetRiddle}
                  aria-label="Replay riddle"
                  title="Replay riddle"
                >
                  <ResetIcon size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
