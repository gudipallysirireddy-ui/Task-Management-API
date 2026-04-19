const Task = require('../models/Task');

// Create
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      ...req.body,
      user: req.userId
    });
    res.json(task);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Get
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.userId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      { new: true }
    );
    res.json(task);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Delete
exports.deleteTask = async (req, res) => {
  try {
    await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.userId
    });
    res.json("Deleted");
  } catch (error) {
    res.status(500).json(error.message);
  }
};