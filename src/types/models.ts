/* ---------===== custom props ====--------- */



/* ---------===== auth models =====--------- */

export interface Lyric {
  lyric: string;
  name: string;
  profileId: number;
  createdAt: string;
  updatedAt: string;
  id: number;
}

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  lyrics: Lyric[];
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}
