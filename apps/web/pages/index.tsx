import React from "react";
import GeneratePlaylistForm from "../components/GeneratePlaylistForm";
import usePlaylistStore from "../stores/playlist";
import SongsGenerationContainer from "../components/SongsGenerationContainer";
import Layout from "../layout/Layout";

export default function Web() {
  const { suggestedSongs } = usePlaylistStore((state) => ({
    suggestedSongs: state.suggestedSongs,
  }));

  return (
    <Layout>
      <section className="h-auto min-h-screen flex items-center justify-center">
        <div className="container flex items-center justify-center flex-col">
          <article className="prose mb-10">
            <h1>What are you feeling?</h1>
          </article>
          <GeneratePlaylistForm hasPlaylist={suggestedSongs.length > 0} />
          {suggestedSongs.length > 0 && (
            <SongsGenerationContainer suggestedSongs={suggestedSongs} />
          )}
        </div>
      </section>
    </Layout>
  );
}
