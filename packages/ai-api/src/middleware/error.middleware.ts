import { Prisma } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message = "";

  if (err.code === "P2002") {
    message = `Unique constraint failed on the keys: ${err.meta?.target?.join(
      ","
    )}`;
  } else {
    message = `[${err.code}] ${err.meta.cause}`;
  }

  res.status(500).send({
    ...err,
    message,
  });
};
