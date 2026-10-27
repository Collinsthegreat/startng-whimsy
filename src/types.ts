export interface GameCartridge {
  id: string;
  title: string;
  subtitle: string;
  creator: string;
  genre: string;
  color: string;
  url: string;
  legendary?: boolean;
  plays: string;
  tags: string[];
}

export type MascotHat = 'fila' | 'gele' | 'cap' | 'crown' | 'shades';

export interface RiddleOption {
  id: string;
  label: string;
  correct: boolean;
}
