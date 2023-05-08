import express, { NextFunction } from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import * as GPTService from "./gpt.service";

export const gptRouter = express.Router();

gptRouter.post(
  "/playlist-and-hex",
  body("mood").isString(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    try {
      const aiResponse = await GPTService.generatePlaylistAndPaletteByMood(
        request.body.mood
      );

      return response.status(200).json(aiResponse);
    } catch (error: any) {
      return response.status(500).json(error.message);
    }
  }
);
