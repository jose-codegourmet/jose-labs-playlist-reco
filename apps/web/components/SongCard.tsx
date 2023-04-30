import { Button } from "ui";
import { SongModel } from "../stores/playlist";

export interface PlaylistCardProps extends SongModel {
  isFromGenerated?: boolean;
  onHandleAddToPlaylist?: () => void;
}

export default function SongCard(props: PlaylistCardProps) {
  const {
    youtubeLink,
    title,
    artist,
    album,
    isFromGenerated,
    onHandleAddToPlaylist,
  } = props;
  return (
    <div className="card w-full bg-base-100 shadow-xl bg-black bg-opacity-10">
      <div className="p-4 w-full">
        <div className="relative w-full pt-[55%]">
          <iframe
            width="560"
            height="315"
            className="absolute top-0 left-0 w-full h-full object-contain"
            src={`https://www.youtube.com/embed/${
              youtubeLink?.split("?v=")[1]
            }`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{artist}</p>
        <p>{album}</p>
        {isFromGenerated && (
          <Button
            className="btn-primary"
            label="Add to playlist"
            onClick={onHandleAddToPlaylist}
          />
        )}
      </div>
    </div>
  );
}
