const express = require('express');
const taskRoutes = require('./routes/tasks');
const errorHandler = require('./middlewares/errorHandler');
const app = express();
app.use(express.json());
app.use('/api/tasks', taskRoutes);
app.use(errorHandler);
module.exports = app;
