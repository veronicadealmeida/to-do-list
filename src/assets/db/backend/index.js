const express = require("express");
// const request = require('request');

const server = express();

const tasks = require("./src/data/tasks.json");

const atasks = [tasks.items];

server.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "*");

  next();
});

server.get("/tasks", (req, res, next) => {
  const pagina = +req.query.page || 1;
  const limite = +req.query.pageSize || 50;
  const salto = (pagina - 1) * limite;

  const post = tasks.items.slice(salto, salto + limite);
  let resp = {
    hasNext: pagina * salto < tasks.items.length,
    items: post,
  };
  console.log(`${req.method} ${req.baseUrl}`, pagina, limite, salto);

  return res.json(resp);
});

server.listen(3003, async () => {
  console.log("API Started!");
});

server.use((err, req, res, next) => {
  console.log(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});
