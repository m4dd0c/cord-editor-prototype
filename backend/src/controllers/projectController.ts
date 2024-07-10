import { catchAsync } from "../utils/catchAsync";
import { Request, Response, NextFunction } from "express";
import CordEError from "../utils/CordEError";

export const createProject = catchAsync(
  (req: Request, res: Response, next: NextFunction) => {},
);
export const getProject = catchAsync(
  (req: Request, res: Response, next: NextFunction) => {
    res.send("working...");
  },
);
export const deleteProject = catchAsync(
  (req: Request, res: Response, next: NextFunction) => {},
);
export const updateProject = catchAsync(
  (req: Request, res: Response, next: NextFunction) => {},
);
export const syncProject = catchAsync(
  (req: Request, res: Response, next: NextFunction) => {},
);
