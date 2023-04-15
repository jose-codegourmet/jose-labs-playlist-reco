import doPrompt from "./gpt";
import dotenv from "dotenv";

dotenv.config();

export default async function generateMoodPlaylistFromPrompt(mood: string) {
  const prompt = `
    Generate a ${process.env.SONGS_LIMIT} song playlist based on this mood "${mood}" in csv format with this schema
    {
        title: string;
        artist: string;
        album: string;
        youtubeLink: string
    }
    where in youtubeLink is a public url from youtube
    `;
  return await doPrompt(prompt.trim());
}
