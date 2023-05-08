import axios from "axios";

const GPT_API_CONFIG = {
  baseURL: process.env.AI_API_URL,
};

console.log("[+] config === ", GPT_API_CONFIG);

export const API = axios.create(GPT_API_CONFIG);

export const createPlaylistsByMood = async (mood: string) => {
  const res = await API.post("/generate-spotify-mood", {
    mood,
  });
  return res.data;
};
