import express from "express";
import cors from "cors";
import { error } from "./middleware/error";
import { includeRoutes } from "./routes";

export const app = express();

const corsOpts = {
  credentials: true,
  origin: "*",
};
app.use(express.json());
app.use(cors(corsOpts));

// importing all routes
includeRoutes();
// error handling middleware
app.use(error);
