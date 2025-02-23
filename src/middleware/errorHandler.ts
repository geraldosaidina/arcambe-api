
import { NextFunction, Request, Response } from "express";
import { BaseError, HttpStatusCode } from "./erroModel";

export function errorHandler(
  err,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);

  if (err instanceof BaseError) {
    res.status(err.httpCode).json({
      error: err.name,
      message: err.message,
    });
  } else {
    res.status(HttpStatusCode.INTERNAL_SERVER).json({
      error: "INTERNAL SERVER ERROR",
      message: "An unexpected error occurred",
    });
  }
}

// Register the error handler as the last middleware