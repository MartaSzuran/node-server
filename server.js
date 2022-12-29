const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const tasksRouter = require('./routes/tasks');

app.use('/api/tasks', tasksRouter);
app.use(cors());

app.get('/api', (req, res) => {
    res.end();
});

app.listen(port, () => console.log(`listening on port ${port}`));