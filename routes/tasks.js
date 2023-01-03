const express = require('express');
const router = express.Router();
let mockupTasks = require('../constants/mockupTasks');
const randomFunction = require('../utils/randomFunction.js');

const newTaskPrototype = {
    'id': randomFunction(),
    'type': 'todo',
  }

router.post('/addNew', (req, res) => {
    const newTaskPayload = req.body.task;
    const newTask = Object.assign(newTaskPrototype, newTaskPayload);
    mockupTasks.push(newTask)
    res.send('success');
})

router.get('/', (req, res) => {
    res.json(mockupTasks);
})

module.exports = router;