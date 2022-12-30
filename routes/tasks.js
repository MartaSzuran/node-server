const express = require('express');
const router = express.Router();
const mockupTasks = require('../constants/mockupTasks');

router.get('/', (req, res) => {
    res.json(mockupTasks);
})
router.post('/addNew', (req, res) => {
    res.send('hi')
})

module.exports = router;