import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPlaylistsByMood } from "../api/playlist";
import usePlaylistStore from "../stores/playlist";

const usePlaylist = () => {
  const queryClient = useQueryClient();
  const addPlaylist = usePlaylistStore(
    (state) => state.generateSongsSuggestion
  );

  const {
    mutate: createPlaylist,
    isLoading,
    isSuccess,
    isError,
    data: playlistData,
  } = useMutation({
    mutationKey: ["create-playlist"],
    mutationFn: createPlaylistsByMood,
    onSuccess: (data, variables) => {
      console.log("data === ", data);
      console.log("variables === ", variables);
      queryClient.setQueryData(["playlist", { mood: variables }], data);
      addPlaylist(data.response.playlist);
    },
  });

  return {
    createPlaylist,
    isLoading,
    isSuccess,
    isError,
    playlistData,
  };
};

export default usePlaylist;
