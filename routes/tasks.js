const express = require('express');
const router = express.Router();
let mockupTasks = require('../constants/mockupTasks');
const generateId = require('../utils/generateId.js');

router.post('/addNew', (req, res) => {
    const newTaskPayload = req.body.task;
    const newTask = {id: generateId(), ...newTaskPayload, type: 'toDo'};
    mockupTasks.push(newTask);
    res.send('success');
});
    
router.put('/editTask', (req, res) => {
    const newTask = req.body.task;
    mockupTasks = mockupTasks.map(task => {
        if (task.id === parseInt(newTask.id)) {
            return newTask;
        }
        return task;
    });
    res.send(newTask);
});
    
router.get('/', (req, res) => {
    res.json(mockupTasks);
});

module.exports = router;