require('dotenv').config();
const express = require('express');
const tasksRouter = require('./routes/tasks');
const authRouter = require('./routes/auth');
const { authenticateToken } = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

// Public auth routes
app.use('/api/auth', authRouter);

// Protected task routes
app.use('/api/tasks', authenticateToken, tasksRouter);

// Central error handling
app.use(errorHandler);

module.exports = app;
