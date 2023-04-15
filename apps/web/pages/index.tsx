import React from "react";
import GeneratePlaylistForm from "../components/GeneratePlaylistForm";
import usePlaylistStore from "../stores/playlist";
import Playlist from "../components/Playlist";

export default function Web() {
  const { playlist } = usePlaylistStore((state) => ({
    playlist: state.playlist,
  }));

  console.log("playlist === ", playlist);
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="container flex items-center justify-center flex-col">
        <article className="prose mb-10">
          <h1>What are you feeling?</h1>
        </article>
        <GeneratePlaylistForm />
        {playlist.length > 0 && <Playlist playlist={playlist} />}
      </div>
    </section>
  );
}
