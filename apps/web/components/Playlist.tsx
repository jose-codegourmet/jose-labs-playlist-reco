export default function Playlist(props: any) {
  const { playlist } = props;

  const renderSongs = () => {
    return playlist.map((s: any, k: string) => (
      <div className="card w-96 bg-base-100 shadow-xl" key={k}>
        <div className="px-10 relative w-full pt-[55%]">
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
    <div className="mt-10 pt-10 grid grid-cols-3 gap-4">{renderSongs()}</div>
  );
}
