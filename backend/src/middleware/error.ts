import { NextFunction, Request, Response } from "express";
import CordEError from "../utils/CordEError";
import CordERes from "../utils/CordERes";

export const error = (
  err: CordEError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const cordERes = new CordERes(res);
    if (error instanceof CordEError) {
      cordERes.status = err.statusCode;
      cordERes.message = err.message || "Internal server error";
    } else {
      cordERes.status = err.statusCode;
      cordERes.message = err.message || "Something went wrong";
    }
    cordERes.send();
  } catch (error: any) {
    res
      .status(500)
      .json({ success: false, message: "Something went really bad." });
  }
};
