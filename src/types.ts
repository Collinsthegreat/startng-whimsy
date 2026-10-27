export interface GameCartridge {
  id: string;
  title: string;
  subtitle: string;
  creator: string;
  color: string;
  url: string;
  artType: 'roots' | 'hangout' | 'danfo' | 'whot' | 'racing' | 'space';
  legendary?: boolean;
}

export interface RiddleOption {
  id: string;
  label: string;
  correct: boolean;
}
