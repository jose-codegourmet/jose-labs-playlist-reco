import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import generateMoodPlaylistFromPrompt from "./controllers/prompts";

const app = express();
const port = 9999;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/generate-spotify-mood", async (req, res) => {
  const aiResponse = await generateMoodPlaylistFromPrompt(req.body.mood);
  res.send(aiResponse);
});

app.get("/get-playlist", async (req, res) => {
  res.send({
    example: "123",
  });
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
