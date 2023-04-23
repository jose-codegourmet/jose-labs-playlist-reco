import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IPlaylistStoreState {
  playlist?: any;
  mood?: string;
  addPlaylist: (newPlaylist: any) => void;
  removePlaylist: () => void;
  setMood: (newMood: string) => void;
}

const usePlaylistStore = create<IPlaylistStoreState>()(
  devtools(
    (set) => ({
      playlist: [],
      mood: "",
      addPlaylist: (newPlaylist) => set({ playlist: newPlaylist }),
      removePlaylist: () => set({ playlist: [] }),
      setMood: (newMood) => set({ mood: newMood }),
    }),
    { name: "my store" }
  )
);

export default usePlaylistStore;
