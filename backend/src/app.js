require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

// Existing task routes (preserve if they exist)
const taskRouter = require('./routes/tasks');
app.use('/api/tasks', taskRouter);

// Books routes
const booksRouter = require('./routes/books');
app.use('/api/books', booksRouter);

// Central error handler
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

module.exports = app;
