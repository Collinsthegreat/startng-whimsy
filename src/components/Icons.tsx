import React from 'react';

export const SpeakerOnIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" fillOpacity="0.15" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
  </svg>
);

export const SpeakerOffIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" fillOpacity="0.15" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </svg>
);

export const SunIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity="0.2" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

export const MoonIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

export const FlagPinIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" fill="#008751" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

export const ResetIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
  </svg>
);

/* Cartridge Artwork SVGs */

export const CompassArt: React.FC = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" rx="12" fill="#008751" fillOpacity="0.15" />
    <circle cx="30" cy="30" r="22" stroke="#292a23" strokeWidth="2.5" />
    <polygon points="30 14 35 28 30 25 25 28" fill="#d8fd71" stroke="#292a23" strokeWidth="2" />
    <polygon points="30 46 35 32 30 35 25 32" fill="#eb5757" stroke="#292a23" strokeWidth="2" />
    <circle cx="30" cy="30" r="3" fill="#292a23" />
  </svg>
);

export const TownPlazaArt: React.FC = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" rx="12" fill="#346fdf" fillOpacity="0.15" />
    <path d="M12 44V26L22 18L32 26V44H12Z" fill="#346fdf" stroke="#292a23" strokeWidth="2.5" />
    <path d="M32 44V22L42 14L50 20V44H32Z" fill="#d8fd71" stroke="#292a23" strokeWidth="2.5" />
    <circle cx="22" cy="32" r="3" fill="#292a23" />
    <rect x="38" y="28" width="6" height="8" rx="1" fill="#292a23" />
  </svg>
);

export const WordGridArt: React.FC = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" rx="12" fill="#f5a623" fillOpacity="0.15" />
    <rect x="14" y="14" width="13" height="13" rx="3" fill="#d8fd71" stroke="#292a23" strokeWidth="2" />
    <rect x="33" y="14" width="13" height="13" rx="3" fill="#f5a623" stroke="#292a23" strokeWidth="2" />
    <rect x="14" y="33" width="13" height="13" rx="3" fill="#292a23" />
    <rect x="33" y="33" width="13" height="13" rx="3" fill="#d8fd71" stroke="#292a23" strokeWidth="2" />
  </svg>
);

export const DanfoBusArt: React.FC = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" rx="12" fill="#f5c518" fillOpacity="0.15" />
    <rect x="12" y="18" width="36" height="22" rx="4" fill="#f5c518" stroke="#292a23" strokeWidth="2.5" />
    {/* Black stripes characteristic of Lagos Danfo */}
    <line x1="12" y1="26" x2="48" y2="26" stroke="#292a23" strokeWidth="2.5" />
    <line x1="12" y1="31" x2="48" y2="31" stroke="#292a23" strokeWidth="2.5" />
    <circle cx="20" cy="42" r="4.5" fill="#292a23" />
    <circle cx="40" cy="42" r="4.5" fill="#292a23" />
  </svg>
);

export const WhotCardArt: React.FC = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" rx="12" fill="#eb5757" fillOpacity="0.15" />
    <rect x="15" y="14" width="20" height="28" rx="3" fill="#fff" stroke="#292a23" strokeWidth="2" transform="rotate(-8 15 14)" />
    <rect x="25" y="18" width="20" height="28" rx="3" fill="#eb5757" stroke="#292a23" strokeWidth="2" transform="rotate(6 25 18)" />
    <polygon points="35 24 37 29 42 29 38 32 40 37 35 34 30 37 32 32 28 29 33 29" fill="#d8fd71" stroke="#292a23" strokeWidth="1.5" />
  </svg>
);

export const AyoBoardArt: React.FC = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" rx="12" fill="#a0662f" fillOpacity="0.15" />
    <rect x="12" y="20" width="36" height="20" rx="6" fill="#a0662f" stroke="#292a23" strokeWidth="2.5" />
    {/* 6 Mancala Pits */}
    <circle cx="18" cy="26" r="3" fill="#292a23" />
    <circle cx="30" cy="26" r="3" fill="#292a23" />
    <circle cx="42" cy="26" r="3" fill="#292a23" />
    <circle cx="18" cy="34" r="3" fill="#292a23" />
    <circle cx="30" cy="34" r="3" fill="#292a23" />
    <circle cx="42" cy="34" r="3" fill="#292a23" />
  </svg>
);
