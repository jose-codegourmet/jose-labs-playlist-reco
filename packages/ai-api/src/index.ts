import cors from "cors";
import bodyParser from "body-parser";
import express from "express";

import { userRouter } from "./user/user.router";
import { errorHandler } from "./middleware/error.middleware";
import { gptRouter } from "./gpt/gpt.router";

const app = express();
const port = 9999;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/user", userRouter);
app.use("/api/gpt", gptRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
