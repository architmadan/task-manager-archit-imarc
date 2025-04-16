const Task = require("../models/Task");

//CRUD OPERATIONS ON TASK
exports.createTask = async (req, res) => {
  const { title, description, status, dueDate } = req.body;
  const userId = req.user.id;
  try {
    const taskId = await Task.create(
      title,
      description,
      status,
      dueDate,
      userId
    );
    res.status(201).json({ id: taskId, title, description, status, dueDate });
  } catch (error) {
    res.status(500).json({ message: "Error creating task" });
  }
};

// exports.getTasks = async (req, res) => {
//   const userId = req.user.id;
//   try {
//     const tasks = await Task.findByUserId(userId);
//     res.json(tasks);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching tasks" });
//   }
// };

exports.getTasks = async (req, res) => {
  const userId = req.user.id;

  const { page = 1, limit = 10, status } = req.query;
  const offset = (page - 1) * limit; // Calculate the offset for pagination

  try {
    // Check if pagination and filtering parameters are provided - (BONUS by am)
    let tasks;
    if (status) {
      tasks = await Task.findByUserId(userId, limit, offset, status);
    } else {
      tasks = await Task.findByUserId(userId);
    }
    if (tasks.length === 0) res.json({ message: "No task found" });
    res.json(tasks);
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: "Error fetching tasks" });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status, dueDate } = req.body;
  const userId = req.user.id;
  try {
    const affectedRows = await Task.update(
      id,
      title,
      description,
      status,
      dueDate,
      userId
    );
    if (affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Task not found or not authorized" });
    }
    res.json({ message: "Task updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating task" });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  try {
    const affectedRows = await Task.delete(id, userId);
    if (affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Task not found or not authorized" });
    }
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task" });
  }
};
