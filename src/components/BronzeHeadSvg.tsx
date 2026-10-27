import React from 'react';

export const BronzeHeadSvg: React.FC<{ size?: number }> = ({ size = 36 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Crown / Headdress */}
      <path
        d="M12 18C12 10 36 10 36 18H12Z"
        fill="#f5a623"
        stroke="#292a23"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Crown decorative beads */}
      <circle cx="16" cy="14" r="2" fill="#eb5757" stroke="#292a23" strokeWidth="1.5" />
      <circle cx="24" cy="12" r="2.5" fill="#eb5757" stroke="#292a23" strokeWidth="1.5" />
      <circle cx="32" cy="14" r="2" fill="#eb5757" stroke="#292a23" strokeWidth="1.5" />

      {/* Main Face Contour */}
      <path
        d="M14 18V28C14 35 24 39 24 39C24 39 34 35 34 28V18H14Z"
        fill="#f5a623"
        stroke="#292a23"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Facial scarification marks (Ichi/tribal marks above eyes) */}
      <line x1="20" y1="19" x2="20" y2="22" stroke="#292a23" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="19" x2="24" y2="22" stroke="#292a23" strokeWidth="2" strokeLinecap="round" />
      <line x1="28" y1="19" x2="28" y2="22" stroke="#292a23" strokeWidth="2" strokeLinecap="round" />

      {/* Almond Eyes */}
      <path
        d="M17 25C19 24 21 24 23 25C21 26 19 26 17 25Z"
        fill="#292a23"
      />
      <path
        d="M25 25C27 24 29 24 31 25C29 26 27 26 25 25Z"
        fill="#292a23"
      />

      {/* Broad Nose */}
      <path
        d="M23 24V29H25V24"
        stroke="#292a23"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Royal Coral Choker Collar */}
      <path
        d="M16 35C16 35 24 38 32 35"
        stroke="#eb5757"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
