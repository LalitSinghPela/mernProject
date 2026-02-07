const express = require("express");
const Todo = require("../models/Todo");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const todos = await Todo.find({ userId: req.user.id });
  res.json(todos);
});

router.post("/", auth, async (req, res) => {
  const todo = await Todo.create({
    userId: req.user.id,
    title: req.body.title
  });
  res.json(todo);
});

router.put("/:id", auth, async (req, res) => {
  await Todo.findByIdAndUpdate(req.params.id, req.body);
  res.json({ msg: "Updated" });
});

router.delete("/:id", auth, async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

module.exports = router;
