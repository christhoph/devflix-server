const express = require('express');
const config = require('./config');

const app = express();

app.use('/hello', (_, res) => res.send('Hello, welcome to my app :D'));

app.listen(config.port, () =>
  console.log(`API Server listening in http://localhost:${config.port}`)
);
