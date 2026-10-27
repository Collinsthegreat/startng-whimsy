import React, { useEffect, useRef } from 'react';
import { playDundun } from '../audio';

interface BouncingDotProps {
  active: boolean;
  onFinish: () => void;
}

export const BouncingDot: React.FC<BouncingDotProps> = ({ active, onFinish }) => {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;

    let x = window.innerWidth * 0.25;
    let y = 30;
    let vx = 8 + Math.random() * 4;
    let vy = 6 + Math.random() * 4;
    const radius = 10;
    let bounces = 0;
    const MAX_BOUNCES = 10;
    let rafId: number;

    const pitches = [180, 220, 260, 310, 370, 440];

    const step = () => {
      x += vx;
      y += vy;

      // Screen edge collisions
      let collided = false;
      if (x - radius <= 0) {
        x = radius;
        vx = -vx;
        collided = true;
      } else if (x + radius >= window.innerWidth) {
        x = window.innerWidth - radius;
        vx = -vx;
        collided = true;
      }

      if (y - radius <= 0) {
        y = radius;
        vy = -vy;
        collided = true;
      } else if (y + radius >= window.innerHeight) {
        y = window.innerHeight - radius;
        vy = -vy;
        collided = true;
      }

      if (collided) {
        bounces++;
        const pitch = pitches[bounces % pitches.length]!;
        playDundun(pitch, pitch - 60, 0.18);
      }

      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }

      if (bounces >= MAX_BOUNCES) {
        // Return dot to home
        cancelAnimationFrame(rafId);
        onFinish();
      } else {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [active, onFinish]);

  if (!active) return null;

  return (
    <div
      ref={dotRef}
      className="bouncing-dot-active"
      aria-hidden="true"
    />
  );
};
