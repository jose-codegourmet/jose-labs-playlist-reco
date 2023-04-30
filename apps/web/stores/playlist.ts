import { create } from "zustand";
import { devtools } from "zustand/middleware";

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

export interface IPlaylistStoreState {
  mood: string;
  suggestedSongs: SongModel[];
  generateSongsSuggestion: (songSuggestions: SongModel[]) => void;
  clearSongSuggestions: () => void;
  setMood: (newMood: string) => void;
}

const usePlaylistStore = create<IPlaylistStoreState>()(
  devtools(
    (set) => ({
      mood: "",
      suggestedSongs: [],
      generateSongsSuggestion: (songSuggestions) =>
        set({ suggestedSongs: songSuggestions }),
      clearSongSuggestions: () => set({ suggestedSongs: [] }),
      setMood: (newMood) => set({ mood: newMood }),
    }),
    { name: "my store" }
  )
);

export default usePlaylistStore;
