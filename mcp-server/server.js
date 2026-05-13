const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];

app.post("/add-task", (req, res) => {
  const { task } = req.body;

  tasks.push(task);

  res.json({
    success: true,
    message: "Task added successfully",
    tasks,
  });
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(3000, () => {
  console.log("MCP Server running on port 3000");
});