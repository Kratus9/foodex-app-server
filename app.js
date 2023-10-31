import "./db/index.js";
import dotenv from "dotenv";
dotenv.config();

import configApp from "./config/index.js";

import express from "express";
const app = express();

configApp(app);

import indexRouter from "./routes/index.routes.js";

app.use("/api", indexRouter);

import { notFoundMiddleware, errorMiddleware } from "./error-handling/index.js";

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
