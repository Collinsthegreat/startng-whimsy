import React, { useEffect, useState } from 'react';
import { isAudioMuted, setAudioMuted, playShekere } from '../audio';

interface HeaderProps {
  onTriggerDot: () => void;
  dotDocked: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onTriggerDot, dotDocked }) => {
  const [muted, setMuted] = useState<boolean>(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setMuted(isAudioMuted());
    const savedTheme = localStorage.getItem('startng-theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  const toggleSound = () => {
    const next = !muted;
    setMuted(next);
    setAudioMuted(next);
    if (!next) {
      playShekere();
    }
  };

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem('startng-theme', next);
    playShekere();
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo-wrap">
          <div className="logo-badge">⚡</div>
          <div className="logo-text">
            <span>Start</span>
            {dotDocked ? (
              <span
                className="logo-dot-trigger"
                onClick={onTriggerDot}
                title="Click me: Micro-Delight Easter Egg!"
                role="button"
                tabIndex={0}
              />
            ) : (
              <span style={{ display: 'inline-block', width: '13px' }} />
            )}
            <span>ng</span>
          </div>
        </div>

        <div className="header-actions">
          <button
            className="btn-chunky"
            onClick={toggleSound}
            aria-label={muted ? 'Unmute sound effects' : 'Mute sound effects'}
            title={muted ? 'Click to enable authentic Nigerian percussion' : 'Mute SFX'}
          >
            <span>{muted ? '🔇' : '🔊'}</span>
            <span className="btn-label">{muted ? 'SFX: OFF' : 'SFX: ON'}</span>
          </button>

          <button
            className="btn-chunky"
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            title="Toggle theme"
          >
            <span>{theme === 'light' ? '🌙' : '☀️'}</span>
            <span className="btn-label">{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
