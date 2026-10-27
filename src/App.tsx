import { useState } from 'react';
import { Header } from './components/Header';
import { HeroRiddle } from './components/HeroRiddle';
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
    }, 550);
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
          {/* Start.ng Official Brand Headline */}
          <h1 className="hero-headline">
            Good vibes. <mark>Good games.</mark>
          </h1>

          {/* Single Star Storyteller Capsule: Mascot + Bronze Head + 5-Word Riddle */}
          <HeroRiddle onPlayRoots={handlePlayRootsDirect} />
        </section>

        {/* 3D Tactile Cartridge Shelf across Diverse Community Genres */}
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
          <p>© 2026 Start.ng • Free browser games made by the community</p>
        </div>
      </footer>
    </div>
  );
}
