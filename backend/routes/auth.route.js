import express from "express";
import authController from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/", authController.get);
// router.get("/:id?", authController.getTask);
// router.post("/", tasksController.post);
// router.delete("/:id?", tasksController.deleteTask);
// router.put('/:id?', tasksController.updateTask); //2

router.use((err, req, res, next) => {
  console.log(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

export default router;
