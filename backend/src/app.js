const express = require('express');
const taskRouter = require('./routes/tasks');
const errorHandler = require('./middlewares/errorHandler');
const app = express();
app.use(express.json());
app.use('/api/tasks', taskRouter);
app.use(errorHandler);
module.exports = app;
