const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.post('/create', async (req, res) => {
  try {
    const { title } = req.body;
    const task = new Task({ title });
    await task.save();
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error' });
  }
});

router.get('/id/:_id', async (req, res) => {
  try {
    const task = await Task.findById(req.params._id);
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error' });
  }
});

router.put('/markAsCompleted/:_id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params._id, { completed: true }, { new: true });
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error' });
  }
});


router.put('/id/:_id', async (req, res) => {
  try {
    const { title } = req.body;
    const task = await Task.findByIdAndUpdate(req.params._id, { title }, { new: true });
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error' });
  }
});


router.delete('/id/:_id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params._id);
    res.json({ message: 'Tarea eliminada' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error' });
  }
});

module.exports = router;