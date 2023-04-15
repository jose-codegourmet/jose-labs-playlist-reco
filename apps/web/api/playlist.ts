import axios from "axios";

const config = {
  baseURL: process.env.envAiApiUrl,
};
console.log("[+] config === ", config);

export const API = axios.create(config);

export const createPlaylistsByMood = async (mood: string) => {
  const res = await API.post("/generate-spotify-mood", {
    mood,
  });
  return res.data;
};
