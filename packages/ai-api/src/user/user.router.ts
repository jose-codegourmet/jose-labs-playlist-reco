import express, { NextFunction } from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import * as UserService from "./user.service";

export const userRouter = express.Router();

userRouter.get("/", async (request: Request, response: Response) => {
  try {
    let sortConfig = null;
    if (Object.keys(request.query).includes("sort")) {
      console.log("request.query.sort === ", request.query.sort);
      console.log("typeof === ", typeof request.query.sort);

      const sortConfigFromParams = JSON.parse(request.query.sort as string);
      sortConfig = sortConfigFromParams.map(([key, value]: string[]) => ({
        [key]: value,
      }));
      console.log("sortConfig === ", sortConfig);
    }

    const users = await UserService.listUsers(sortConfig);
    return response.status(200).json(users);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});

userRouter.get("/:id", async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id, 10);
  try {
    const user = await UserService.getUser(id);
    if (user) {
      return response.status(200).json(user);
    }
    return response.status(404).json("User could not be found");
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});

// POST: Create a User
// Params: email, name, age
userRouter.post(
  "/",
  body("email").isString(),
  body("name").isString(),
  body("age").isInt(),
  async (request: Request, response: Response, next: NextFunction) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    try {
      const user = request.body;
      const newUser = await UserService.createUser(user);
      return response.status(201).json(newUser);
    } catch (error: any) {
      next(error);
    }
  }
);

// POST: Update a User
// Params: email, name, age
userRouter.put(
  "/:id",
  body("email").isString(),
  body("name").isString(),
  body("age").isInt(),
  async (request: Request, response: Response, next: NextFunction) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const id: number = parseInt(request.params.id);

    try {
      const user = request.body;
      const updatedUser = await UserService.updateUser(user, id);
      return response.status(201).json(updatedUser);
    } catch (error: any) {
      next(error);
    }
  }
);

// DELETE: Delete an author based on the id
userRouter.delete(
  "/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const id: number = parseInt(request.params.id, 10);
    try {
      await UserService.deleteUser(id);
      return response.status(204);
    } catch (error: any) {
      next(error);
    }
  }
);
