import { NextFunction, Request, Response } from "express";

export default function logger(req: Request, res: Response, next: NextFunction): void {
  console.log(`Request headers:\n`);
  console.dir(req.headers);
  console.log(`Request body:\n`);
  console.dir(req.body);
  next();
}