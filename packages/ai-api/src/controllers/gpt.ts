import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import { pick } from "lodash";

dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.ENV_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function doPrompt(prompt: string) {
  if (!configuration.apiKey) {
    return {
      status: 500,
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    };
  }

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    return {
      status: 200,
      response: {
        message: {
          ...pick(completion.data, ["id", "model", "usage", "choices"]),
        },
      },
    };
  } catch (error: any) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      return {
        status: error.response.status,
        response: { message: error.response.data },
      };
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);

      return {
        status: 500,
        response: { message: "An error occurred during your request." },
      };
    }
  }
}
