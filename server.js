const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;
const router = require('./routes/tasks');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/api/tasks', router);

app.get('/', (res, req) => {
  res.setEncoding('welcome')
});

app.listen(port, () => console.log(`listening on port ${port}`));