import { useState } from 'react';
import { Header } from './components/Header';
import { HeroRiddle } from './components/HeroRiddle';
import { Mascot } from './components/Mascot';
import { CartridgeShelf } from './components/CartridgeShelf';
import { ConsoleSlot } from './components/ConsoleSlot';
import { BouncingDot } from './components/BouncingDot';
import { GameCartridge } from './types';
import { playCartridgeInsert } from './audio';
import { FEATURED_GAMES } from './data/games';
import './styles.css';

export default function App() {
  const [activeCartridge, setActiveCartridge] = useState<GameCartridge | null>(null);
  const [inserting, setInserting] = useState<boolean>(false);
  const [dotRunning, setDotRunning] = useState<boolean>(false);

  const handleSelectCartridge = (cart: GameCartridge) => {
    setActiveCartridge(cart);
    setInserting(true);
    playCartridgeInsert();

    setTimeout(() => {
      setInserting(false);
    }, 600);
  };

  const handleLaunchGame = () => {
    if (!activeCartridge) return;
    window.open(activeCartridge.url, '_blank', 'noopener,noreferrer');
  };

  const handlePlayRootsDirect = () => {
    const rootsGame = FEATURED_GAMES.find((g) => g.id === 'naija-roots') || FEATURED_GAMES[0]!;
    handleSelectCartridge(rootsGame);
  };

  return (
    <div className="app-root">
      <Header
        onTriggerDot={() => setDotRunning(true)}
        dotDocked={!dotRunning}
      />

      <BouncingDot
        active={dotRunning}
        onFinish={() => setDotRunning(false)}
      />

      <main className="container">
        <section className="hero-section">
          <div className="hero-pill-badge">
            <span className="dot" />
            <span>Interactive Micro-Arcade</span>
          </div>

          <h1 className="hero-headline">
            Play African & Nigerian <mark>Indie Games</mark>
          </h1>

          {/* 2-Second Playable Micro-Riddle */}
          <HeroRiddle onPlayRoots={handlePlayRootsDirect} />

          {/* Interactive Mascot Attire Swapper */}
          <Mascot />
        </section>

        {/* 3D Tactile Cartridge Shelf */}
        <CartridgeShelf onSelectCartridge={handleSelectCartridge} />
      </main>

      <ConsoleSlot
        activeCartridge={activeCartridge}
        inserting={inserting}
        onLaunch={handleLaunchGame}
        onClose={() => setActiveCartridge(null)}
      />

      <footer className="footer">
        <div className="container">
          <p>
            <b>Start.ng Whimsical Showcase</b> — Designed for authentic human-agent playability & 2-second comprehension.
          </p>
          <p style={{ marginTop: '6px', fontSize: '0.8rem', opacity: 0.8 }}>
            Featuring <b>ROOTS 3D: Naija Heritage</b> by Abuchi Collins Nwajagu.
          </p>
        </div>
      </footer>
    </div>
  );
}
