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
    const editedTask = req.body.task.id;
    mockupTasks.find(task => {
        if (task.id === editedTask.id) {
            task.title = editedTask.title
            task.description = editedTask.description
            task.type = editedTask.type
        }
    });
    res.send('success');
});

router.put('/dropTask', (req, res) => {
    const {id, dropResult} = req.body.task;
    mockupTasks.find(task => {
        if (task.id === id) {
            task.type = dropResult;
        }
    });
    res.send('success');
});
    
router.get('/', (req, res) => {
    res.json(mockupTasks);
});

module.exports = router;