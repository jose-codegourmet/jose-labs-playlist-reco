import { create } from "zustand";

interface IPlaylistStoreState {
  playlist?: any;
  addPlaylist: (newPlaylist: any) => void;
  removePlaylist: () => void;
}

const usePlaylistStore = create<IPlaylistStoreState>()((set) => ({
  playlist: [],
  addPlaylist: (newPlaylist) => set({ playlist: newPlaylist }),
  removePlaylist: () => set({ playlist: null }),
}));

export default usePlaylistStore;
