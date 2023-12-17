const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;
const router = require('./routes/tasks');

const path = require("path");
const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "/build");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/api/tasks', router);

app.use(express.static(buildPath));

app.get("/*", function(req, res) {
  res.sendFile(
    path.join(__dirname, "/build.index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
})

app.listen(port, () => console.log(`listening on port ${port}`));