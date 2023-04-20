import type { RestHandler } from "msw";
import { getPlaylistHandlers } from "./handlers/playlist";

export const getHandlers = (): RestHandler[] => [...getPlaylistHandlers()];
