export interface PlayerStats {
  pace: number;
  dribbling: number;
  shooting: number;
  passing: number;
  defending: number;
  physicality: number;
}

export interface Player {
  id: string;
  name: string;
  fullName: string;
  age: number;
  country: string;
  flagUrl: string;
  club: string;
  position: 'Forward' | 'Midfielder' | 'Defender' | 'Goalkeeper';
  number: number;
  role: string;
  bio: string;
  skills: PlayerStats;
  strengths: string[];
  weaknesses: string[];
  achievements: string[];
  worldCupMatches: number;
  worldCupGoals: number;
  worldCupAssists: number;
  heatmapCoords: { x: number; y: number; intensity: number }[]; // coordinates on a 100x100 pixel grid
  themeColor: string; // e.g., 'from-blue-600 to-amber-500' representation
}
