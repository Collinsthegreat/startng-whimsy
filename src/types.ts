export interface GameCartridge {
  id: string;
  title: string;
  subtitle: string;
  creator: string;
  color: string;
  url: string;
  artType: 'roots' | 'hangout' | 'space' | 'wordle' | 'racing' | 'temple';
  legendary?: boolean;
}

export type MascotHat = 'fila' | 'gele' | 'cap' | 'crown' | 'shades';

export interface RiddleOption {
  id: string;
  label: string;
  correct: boolean;
}
