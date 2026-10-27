import React from 'react';

export const BronzeHeadSvg: React.FC<{ size?: number }> = ({ size = 68 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ancient Benin Bronze Head"
    >
      {/* Royal Beaded Crown (Headdress) */}
      <path
        d="M14 24C14 12 50 12 50 24H14Z"
        fill="#c68642"
        stroke="#292a23"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Crown bead lattice grid */}
      <line x1="20" y1="14" x2="44" y2="24" stroke="#8d5524" strokeWidth="1.5" />
      <line x1="44" y1="14" x2="20" y2="24" stroke="#8d5524" strokeWidth="1.5" />
      <line x1="26" y1="13" x2="38" y2="24" stroke="#8d5524" strokeWidth="1.5" />
      <line x1="38" y1="13" x2="26" y2="24" stroke="#8d5524" strokeWidth="1.5" />

      {/* Top crown jewel nodes */}
      <circle cx="22" cy="14" r="2.5" fill="#eb5757" stroke="#292a23" strokeWidth="1.5" />
      <circle cx="32" cy="12" r="3" fill="#f5a623" stroke="#292a23" strokeWidth="1.5" />
      <circle cx="42" cy="14" r="2.5" fill="#eb5757" stroke="#292a23" strokeWidth="1.5" />

      {/* Main Face Contour */}
      <path
        d="M16 24V38C16 48 32 52 32 52C32 52 48 48 48 38V24H16Z"
        fill="#a0662f"
        stroke="#292a23"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Forehead Tribal Marks (Ichi / Royal Scarification) */}
      <line x1="28" y1="26" x2="28" y2="30" stroke="#292a23" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="25" x2="32" y2="30" stroke="#292a23" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="36" y1="26" x2="36" y2="30" stroke="#292a23" strokeWidth="2.5" strokeLinecap="round" />

      {/* Heavy Almond Bronze Eyes with Inlaid Pupils */}
      <path
        d="M21 34C24 32.5 27 32.5 29 34C27 35.5 24 35.5 21 34Z"
        fill="#f6f5ee"
        stroke="#292a23"
        strokeWidth="2"
      />
      <circle cx="25" cy="34" r="1.8" fill="#292a23" />

      <path
        d="M35 34C37 32.5 40 32.5 43 34C40 35.5 37 35.5 35 34Z"
        fill="#f6f5ee"
        stroke="#292a23"
        strokeWidth="2"
      />
      <circle cx="39" cy="34" r="1.8" fill="#292a23" />

      {/* Broad Regal Nose */}
      <path
        d="M30 32V40H34V32"
        stroke="#292a23"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Expressive Lips */}
      <path
        d="M27 44C29 45.5 35 45.5 37 44"
        stroke="#292a23"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Royal Coral Collar Neck Rings (Ikele) */}
      <path
        d="M18 47C22 50 42 50 46 47"
        stroke="#eb5757"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M20 51C24 54 40 54 44 51"
        stroke="#eb5757"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
