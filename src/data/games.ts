import { GameCartridge } from '../types';

export const FEATURED_GAMES: GameCartridge[] = [
  {
    id: 'naija-roots',
    title: 'ROOTS 3D',
    subtitle: 'Naija Tribes & Africa 54',
    creator: 'Abuchi Collins Nwajagu',
    genre: '3D Cultural Geography',
    color: '#d8fd71', // Start.ng Lime
    url: 'https://naija-roots.start.ng',
    legendary: true,
    plays: '14,820',
    tags: ['Daily Seed', '3D Diorama', 'Heritage Plaza'],
  },
  {
    id: 'the-hangout',
    title: 'THE HANGOUT',
    subtitle: 'Multiplayer 3D Town Plaza',
    creator: 'Start.ng Core',
    genre: 'Social MMO',
    color: '#346fdf', // Rare Blue
    url: 'https://start.ng/hangout',
    plays: '38,100',
    tags: ['Avatars', 'Realtime Chat', '3D World'],
  },
  {
    id: 'africa-54',
    title: 'AFRICA 54',
    subtitle: 'All 54 Sovereign Nations',
    creator: 'ROOTS Studio',
    genre: 'Map Guessing',
    color: '#278546', // Uncommon Green
    url: 'https://naija-roots.start.ng',
    plays: '9,450',
    tags: ['Expedition', 'Hex Map', 'Streaks'],
  },
  {
    id: 'wordle-naija',
    title: 'WORDLE NAIJA',
    subtitle: 'Nigerian Slang & Culture',
    creator: 'Lagos Labs',
    genre: 'Word Puzzle',
    color: '#f5a623', // Gold
    url: 'https://start.ng/games/wordle-naija',
    plays: '22,600',
    tags: ['Daily Word', 'Pidgin', '6 Guesses'],
  },
  {
    id: 'danfo-dash',
    title: 'DANFO DASH',
    subtitle: 'Oshodi to Obalende Traffic',
    creator: 'Yellow Bus Games',
    genre: 'Arcade Runner',
    color: '#eb5757', // Coral
    url: 'https://start.ng/games/danfo-dash',
    plays: '18,340',
    tags: ['Conductor Voice', 'Speed', 'High Score'],
  },
];
