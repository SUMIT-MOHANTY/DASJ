const express = require('express');
const cors = require('cors');
const tasksRouter = require('./routes/tasks');
const errorHandler = require('./middlewares/errorHandler');

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use('/api/tasks', tasksRouter);
  app.use(errorHandler);
  return app;
}

module.exports = { createApp };
