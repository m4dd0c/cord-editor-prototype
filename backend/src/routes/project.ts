import express from "express";
import {
  createProject,
  deleteProject,
  getProject,
  syncProject,
  updateProject,
} from "../controllers/projectController";
const app = express.Router();

app
  .route("/")
  .post(createProject)
  .get(getProject)
  .put(updateProject)
  .delete(deleteProject);

app.route("/sync").put(syncProject);

export default app;
