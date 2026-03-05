const express = require('express');
const path = require('path');
const tasksRouter = require('./routes/tasks');
const errorHandler = require('./middlewares/errorHandler');
const app = express();
app.use(express.json());
// API routes
app.use('/api/tasks', tasksRouter);
// Health / hello route
app.get('/', (req, res) => res.send('Hi sumit'));
// Serve static React build (production)
app.use(express.static(path.join(__dirname, '../../frontend/dist')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../frontend/dist/index.html')));
// Central error handling
app.use(errorHandler);
module.exports = app;
