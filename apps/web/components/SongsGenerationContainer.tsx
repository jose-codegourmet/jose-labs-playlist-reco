import { Button } from "ui";
import usePlaylistStore, {
  IPlaylistStoreState,
  SongModel,
} from "../stores/playlist";
import SongCard from "./SongCard";

export interface SongsGenerationContainerProps {
  suggestedSongs: IPlaylistStoreState["suggestedSongs"];
}

export default function SongsGenerationContainer(
  props: SongsGenerationContainerProps
) {
  const { suggestedSongs } = props;
  const mood = usePlaylistStore((state) => state.mood);
  const removePlaylist = usePlaylistStore(
    (state) => state.clearSongSuggestions
  );

  const handleAddToPlaylist = (song: SongModel) => {
    console.log("song to add ! === ", song);
  };

  const renderSongs = () => {
    return suggestedSongs.map((song, k) => (
      <SongCard
        {...song}
        isFromGenerated
        key={`${song.title.toLowerCase().replace(" ", "-")}-${k}`}
        onHandleAddToPlaylist={() => handleAddToPlaylist(song)}
      />
    ));
  };
  return (
    <div className="flex flex-col w-full">
      <div className="text-center w-full flex flex-col">
        <h1 className="text-4xl">
          If you feeling
          <span className="font-bold mx-[1ch]">
            <span>{`"${mood}"`}</span>
          </span>
          listen to these songs..
        </h1>
      </div>
      <div className="mt-10 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {renderSongs()}
      </div>
      <Button
        label="Clear"
        className="max-w-[300px] mt-8 mx-auto w-full"
        onClick={() => {
          removePlaylist();
        }}
      />
    </div>
  );
}
