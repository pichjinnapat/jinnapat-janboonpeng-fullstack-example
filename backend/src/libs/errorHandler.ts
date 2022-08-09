import { NextFunction, Request, Response } from "express";

export const errorResponder = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.header("Content-Type", "application/json");
  res.status(err.statusCode || 500).send(err); // pretty print
};
