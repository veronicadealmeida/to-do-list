import express from "express";
import { promises as fs } from "fs";

import tasksRouter from "./routes/tasks.route.js";

const app = express();

global.fileNameTasks = "./files/tasks.db.json";

app.use(express.json()); // uso de middleware

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "*");

  next();
});

app.use("/tasks", tasksRouter);

app.listen(3002, async () => {
  console.log("3002 - API Started!");
});

app.use((err, req, res, next) => {
  console.log(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});
