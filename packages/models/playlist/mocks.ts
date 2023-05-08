import { PlaylistModel, SongModel } from "./types";

export const SAMPLE_SONG_1: SongModel = {
  title: "Don't Worry Be Happy",
  artist: " Bobby McFerrin",
  album: " Simple Pleasures",
  youtubeLink: " https://www.youtube.com/watch?v=d-diB65scQU",
};

export const SAMPLE_SONG_2: SongModel = {
  title: "Good Vibrations",
  artist: " The Beach Boys",
  album: " Smile",
  youtubeLink: " https://www.youtube.com/watch?v=Eab_beh07HU",
};

export const SAMPLE_SONG_3: SongModel = {
  title: "Can't Stop The Feeling!",
  artist: " Justin Timberlake",
  album: " Trolls: Original Motion Picture Soundtrack",
  youtubeLink: " https://www.youtube.com/watch?v=ru0K8uYEZWw",
};

export const SAMPLE_PLAYLIST: PlaylistModel = {
  id: "123",
  title: "sample playlist",
  handle: "sample-playlist",
  createdDate: "2022-02-10",
  isVisible: true,
  songs: [SAMPLE_SONG_1, SAMPLE_SONG_2, SAMPLE_SONG_3],
};
