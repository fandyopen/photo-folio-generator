
export interface LeaderboardEntry {
  rank: number;
  name: string;
  value: number;
  isTop?: boolean;
}

export interface Banner {
  id: number;
  imageUrl: string;
  title: string;
}

export type TimeFrame = 'month' | 'week';
