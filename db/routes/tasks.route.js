import express from "express";
import tasksController from "../controllers/tasks.controller.js";

const router = express.Router();

router.get("/", tasksController.get);
router.post("/", tasksController.post);

export default router;
