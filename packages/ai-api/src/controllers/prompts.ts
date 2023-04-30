import { pick } from "lodash";
import csvToObject from "../utils/csvStringToObject";
import doPrompt from "./gpt";
import dotenv from "dotenv";
import {
  ChatCompletionResponseMessage,
  CreateChatCompletionResponse,
} from "openai";

dotenv.config();

type SuccessfulContent = {
  csv?: string;
  hexcodes?: string[];
};

export default async function generateMoodPlaylistFromPrompt(mood: string) {
  const prompt = `
    Generate a ${process.env.ENV_SONGS_LIMIT} song playlist based on this mood "${mood}" in csv format with this schema and escape the commas inside the values
    {
        title: string;
        artist: string;
        album: string;
        youtubeLink: string
    }
    where in youtubeLink is a public url from youtube

    and suggest a 6 palette hexcode based on the mood

    where the return value is
    {
      "hexcodes": string[];
      "csv": string;
    }
    `;

  const { status, response } = await doPrompt(prompt.trim());

  if (response?.message) {
    const { id, model, usage, choices } = response.message;

    let successfullContent: SuccessfulContent = {};

    if (choices[0]) {
      console.log("choices ==", choices);

      successfullContent = {
        ...JSON.parse(choices[0].message.content),
      };

      console.log("successfullContent ==", successfullContent);
    }

    const responseObject = {
      id,
      usage,
      playlist: csvToObject(
        successfullContent.csv?.replace(`'`, `"'"`) as string
      ),
      hexcodes: successfullContent.hexcodes as string[],
    };

    return {
      status,
      response: { ...responseObject },
      mood,
    };
  }

  return {
    status,
    response,
    mood,
  };
}
