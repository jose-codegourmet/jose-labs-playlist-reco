import { Button } from "ui";
import usePlaylistStore from "../stores/playlist";

export default function Playlist(props: any) {
  const { playlist } = props;
  const mood = usePlaylistStore((state) => state.mood);
  const removePlaylist = usePlaylistStore((state) => state.removePlaylist);

  const renderSongs = () => {
    return playlist.map((s: any, k: string) => (
      <div
        className="card w-full bg-base-100 shadow-xl bg-black bg-opacity-10"
        key={k}
      >
        <div className="p-4 w-full">
          <div className="relative w-full pt-[55%]">
            <iframe
              width="560"
              height="315"
              className="absolute top-0 left-0 w-full h-full object-contain"
              src={`https://www.youtube.com/embed/${
                s.youtubeLink?.split("?v=")[1]
              }`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{s.title}</h2>
          <p>{s.artist}</p>
          <p>{s.album}</p>
          <p></p>
        </div>
      </div>
    ));
  };
  return (
    <div className="flex flex-col w-full">
      <div className="text-center w-full flex flex-col">
        <h1 className="text-4xl">
          If you feeling
          <span className="font-bold mx-[1ch]">
            "<span>{mood}</span>"
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
