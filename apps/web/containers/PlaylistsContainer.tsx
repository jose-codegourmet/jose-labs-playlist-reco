import { PlaylistModel } from "models";

export interface SongsGenerationContainerProps {
  playlists: PlaylistModel[];
}

export default function PlaylistsContainer(
  props: SongsGenerationContainerProps
) {
  const { playlists } = props;

  const renderPlaylists = () => {
    return playlists.map((playlist, k) => (
      <div key={`${playlist.title.toLowerCase().replace(" ", "-")}-${k}`}>
        <p>{playlist.id}</p>
        <p>{playlist.handle}</p>
        <p>{playlist.isVisible}</p>
        <ul>
          {playlist.songs.map((s, sk) => (
            <li key={sk}>{s.title}</li>
          ))}
        </ul>
      </div>
    ));
  };
  return (
    <div className="playlist-container flex flex-col w-full">
      {renderPlaylists()}
    </div>
  );
}
