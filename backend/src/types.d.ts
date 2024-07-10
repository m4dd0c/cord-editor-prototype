import { Request, Response, NextFunction } from "express";

export type TCatchAsync = (
  func: (req: Request, res: Response, next: NextFunction) => void,
) => (req: Request, res: Response, next: NextFunction) => void;
