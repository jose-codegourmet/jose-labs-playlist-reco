import { StatusCodes } from "http-status-codes";
import { rest } from "msw";
import type { RestHandler } from "msw";
import { GENERATE_PLAYLIST_RESPONSE } from "../../constants/generatePlaylistRes";

export const getPlaylistHandlers = (): RestHandler[] => [
  rest.post(
    `${process.env.envAiApiUrl}/generate-spotify-mood`,
    (_, res, ctx) => {
      return res(
        ctx.status(StatusCodes.OK),
        ctx.json(GENERATE_PLAYLIST_RESPONSE)
      );
    }
  ),
];
