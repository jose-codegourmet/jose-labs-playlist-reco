export interface SongModel {
  youtubeLink: string;
  title: string;
  artist: string;
  album: string;
}

export interface PlaylistModel {
  id: string;
  title: string;
  handle: string;
  isVisible: boolean;
  createdDate: string;
  songs: SongModel[];
}
