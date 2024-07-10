import { TCatchAsync } from "../types";
export const catchAsync: TCatchAsync = (func) => (req, res, next) => {
  Promise.resolve(func(req, res, next)).catch(next);
};
