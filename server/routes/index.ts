import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();

  res.send(tasks);
});

router.post("/tasks", async (req, res) => {
  const { title, description } = req.body;

  const task = new Task({
    title,
    description,
  });

  await task.save();

  res.send(task);
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).send({ message: "Task not found" });
    }

    res.send(task);
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).send({ message: "Task not found" });
    }

    task.delete();

    res.status(204).send();
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedTask) {
      return res.status(404).send({ message: "Task not found" });
    }

    res.send(updatedTask);
  } catch (e) {
    return res.status(500).send(e);
  }
});
export default router;
