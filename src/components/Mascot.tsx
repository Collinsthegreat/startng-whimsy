import React, { useState } from 'react';
import { MascotHat } from '../types';
import { playShekere } from '../audio';

const HATS: { id: MascotHat; label: string; culturalOrigin: string }[] = [
  { id: 'fila', label: 'Fìlà Cap', culturalOrigin: 'Yoruba Velvet' },
  { id: 'gele', label: 'Gèlè Wrap', culturalOrigin: 'Royal Ceremonial' },
  { id: 'cap', label: 'Explorer Cap', culturalOrigin: 'Naija Roots' },
  { id: 'crown', label: 'Oba Gold Crown', culturalOrigin: 'Ancient Benin' },
  { id: 'shades', label: 'Detty Shades', culturalOrigin: 'Lagos December' },
];

export const Mascot: React.FC = () => {
  const [hatIndex, setHatIndex] = useState<number>(0);
  const [isSquashing, setIsSquashing] = useState<boolean>(false);

  const currentHat = HATS[hatIndex]!;

  const cycleHat = () => {
    setIsSquashing(true);
    playShekere();
    setHatIndex((prev) => (prev + 1) % HATS.length);
    setTimeout(() => {
      setIsSquashing(false);
    }, 450);
  };

  return (
    <div className="mascot-strip" role="region" aria-label="Interactive Mascot">
      <button
        className="mascot-avatar-btn"
        onClick={cycleHat}
        title="Tap to change hat!"
        aria-label={`Current hat is ${currentHat.label}. Tap to swap hat.`}
      >
        <div className={`mascot-squash-box ${isSquashing ? 'squashing' : ''}`}>
          <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Body base */}
            <circle cx="34" cy="38" r="22" fill="#8d5524" stroke="#292a23" strokeWidth="2.5" />
            
            {/* Eyes */}
            <circle cx="28" cy="38" r="3" fill="#292a23" />
            <circle cx="40" cy="38" r="3" fill="#292a23" />
            
            {/* Warm smile */}
            <path d="M30 46C32 48 36 48 38 46" stroke="#292a23" strokeWidth="2.5" strokeLinecap="round" />

            {/* Hat Overlay */}
            {currentHat.id === 'fila' && (
              /* Fila folded Yoruba cap */
              <path
                d="M20 25C22 14 42 12 48 18C44 20 46 25 44 26C38 28 26 28 20 25Z"
                fill="#eb5757"
                stroke="#292a23"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            )}

            {currentHat.id === 'gele' && (
              /* Gele elaborate royal wrap */
              <path
                d="M14 26C12 16 22 8 34 8C46 8 56 16 54 26C58 22 56 14 46 11C34 8 22 11 14 26Z"
                fill="#d8fd71"
                stroke="#292a23"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            )}

            {currentHat.id === 'cap' && (
              /* Explorer visor cap */
              <path
                d="M22 26C22 18 46 18 46 26H52C52 28 48 29 44 29H22V26Z"
                fill="#278546"
                stroke="#292a23"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            )}

            {currentHat.id === 'crown' && (
              /* Golden Oba crown */
              <path
                d="M22 26L22 16L28 20L34 14L40 20L46 16L46 26H22Z"
                fill="#f5a623"
                stroke="#292a23"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            )}

            {currentHat.id === 'shades' && (
              /* Cool retro shades */
              <g>
                <rect x="22" y="34" width="11" height="8" rx="2" fill="#292a23" stroke="#d8fd71" strokeWidth="1.5" />
                <rect x="35" y="34" width="11" height="8" rx="2" fill="#292a23" stroke="#d8fd71" strokeWidth="1.5" />
                <line x1="33" y1="38" x2="35" y2="38" stroke="#d8fd71" strokeWidth="2" />
              </g>
            )}
          </svg>
        </div>
      </button>

      <div className="mascot-info">
        <div className="mascot-hat-label">{currentHat.culturalOrigin}</div>
        <div className="mascot-name">{currentHat.label}</div>
        <div className="mascot-hint">
          <span>👆</span>
          <span>Tap mascot to switch attire</span>
        </div>
      </div>
    </div>
  );
};
