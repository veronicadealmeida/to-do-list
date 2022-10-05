import express from "express";
import { promises as fs } from "fs";

import tasksRouter from "./routes/tasks.route.js";
import authRouter from "./routes/auth.route.js";
import cors from "cors";

const app = express();

global.fileNameTasks = "./db/tasks.db.json";
global.fileNameAuth = "./db/auth.db.json";

app.use(express.json()); // uso de middleware
app.use(cors());
app.use(express.static("public"));

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Delete", "*");
  res.set("strict-origin-when-cross-origin", "*");

  next();
});

app.use("/tasks", tasksRouter);
app.use("/auth", authRouter);

app.listen(3002, async () => {
  console.log("3002 - API Started!");
});

app.use((err, req, res, next) => {
  console.log(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});
