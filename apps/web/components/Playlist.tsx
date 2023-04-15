export default function Playlist(props: any) {
  const { playlist } = props;

  const renderSongs = () => {
    return playlist.map((s: any, k: string) => (
      <div className="card w-96 bg-base-100 shadow-xl" key={k}>
        <div className="card-body">
          <h2 className="card-title">{s.title}</h2>
          <p>{s.artist}</p>
          <p>{s.album}</p>
          <p>{s.youtubeLink}</p>
        </div>
      </div>
    ));
  };
  return <div className="flex w-full flex-col">{renderSongs()}</div>;
}
