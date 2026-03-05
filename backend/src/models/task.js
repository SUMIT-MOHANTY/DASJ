const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Task = db.define('Task', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  completed: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = Task;
