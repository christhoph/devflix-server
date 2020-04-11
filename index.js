const express = require('express');
const config = require('./config');
const videosRoute = require('./routes/videos');

const app = express();

app.use(express.json());

videosRoute(app);

app.listen(config.port, () =>
  console.log(`API Server listening in http://localhost:${config.port}`)
);
