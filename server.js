const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;
const tasksRouter = require('./routes/tasks');


app.use(cors());

app.use('/api/tasks', tasksRouter);

app.listen(port, () => console.log(`listening on port ${port}`));