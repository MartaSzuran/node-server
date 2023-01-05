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
    const editedTask = req.body.task;
    mockupTasks = mockupTasks.map(task => {
        if (task.id === parseInt(editedTask.id.id)) {
            return editedTask.id;
        }
        return task;
    });
    res.send('success');
});

router.put('/dropTask', (req, res) => {
    const {id, dropResult} = req.body.task;
    mockupTasks = mockupTasks.map(task => {
        if (task.id === id) {
            task.type = dropResult;
            return task;
        }
        return task;
    });
    res.send('success');
});
    
router.get('/', (req, res) => {
    res.json(mockupTasks);
});

module.exports = router;