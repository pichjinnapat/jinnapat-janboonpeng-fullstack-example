import { Response } from "express";

export const responseHandler = <T>(res: Response, result: T) =>
  res.status(res.statusCode || 200).send(result);
