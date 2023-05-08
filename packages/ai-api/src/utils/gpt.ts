import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import { pick } from "lodash";

dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.ENV_OPENAI_API_KEY,
});

export const gpt = new OpenAIApi(configuration);

export type PromptConfig = {
  prompt: string;
  promptModel?: string;
  selectKeysFromResponse?: string[];
};

export const doPrompt = async (promptConfig: PromptConfig) => {
  const {
    prompt,
    promptModel: model = "gpt-3.5-turbo",
    selectKeysFromResponse = ["id", "model", "usage", "choices"],
  } = promptConfig;

  try {
    const completion = await gpt.createChatCompletion({
      model,
      messages: [{ role: "user", content: prompt }],
    });

    return {
      status: 200,
      response: {
        message: {
          ...pick(completion.data, selectKeysFromResponse),
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
};
