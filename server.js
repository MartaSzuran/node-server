const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const tasksRouter = require('./routes/tasks');

app.use(cors());

app.use('/api/tasks', tasksRouter);

app.listen(port, () => console.log(`listening on port ${port}`));