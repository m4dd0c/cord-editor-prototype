import express from "express";
import project from "./project";
import { app } from "../app";

const routes = [{ path: "/project", route: project }];
export const includeRoutes = () => {
  routes.forEach((obj) => {
    console.log(!!app);
    app.use(`/api/v1${obj.path}`, obj.route);
  });
};
