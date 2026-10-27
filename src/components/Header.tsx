import React, { useEffect, useState } from 'react';
import { isAudioMuted, setAudioMuted, playShekere } from '../audio';
import { SpeakerOnIcon, SpeakerOffIcon, SunIcon, MoonIcon } from './Icons';

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
    const initialTheme = savedTheme || 'light';
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
        <a className="logo-wrap" href="#arcade" aria-label="Start.ng Home">
          {/* Authentic Start.ng Mark: Rounded lime tile with charcoal play triangle */}
          <svg width="34" height="34" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="64" height="64" rx="14" fill="#d8fd71" stroke="#292a23" strokeWidth="4" />
            <path d="M26 19.5v25c0 1.6 1.7 2.5 3 1.7l19.5-12.5c1.2-.8 1.2-2.6 0-3.4L29 17.8c-1.3-.8-3 .1-3 1.7z" fill="#292a23" />
          </svg>

          <span className="logo-text">
            <b>start</b>
            {dotDocked ? (
              <span
                className="logo-dot-trigger"
                onClick={(e) => {
                  e.preventDefault();
                  onTriggerDot();
                }}
                role="button"
                tabIndex={0}
                aria-label="Interactive dot"
              />
            ) : (
              <span className="logo-dot-placeholder" />
            )}
            <span className="logo-ng">ng</span>
          </span>
        </a>

        <div className="header-actions">
          <button
            className="btn-chunky"
            onClick={toggleSound}
            aria-label={muted ? 'Unmute sound effects' : 'Mute sound effects'}
          >
            {muted ? <SpeakerOffIcon size={16} /> : <SpeakerOnIcon size={16} />}
            <span className="btn-label">{muted ? 'Muted' : 'Sound'}</span>
          </button>

          <button
            className="btn-chunky"
            onClick={toggleTheme}
            aria-label="Toggle dark and light theme"
          >
            {theme === 'light' ? <MoonIcon size={16} /> : <SunIcon size={16} />}
            <span className="btn-label">{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
