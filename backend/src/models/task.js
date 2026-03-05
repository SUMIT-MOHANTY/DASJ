const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Task = sequelize.define('Task', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  title: { type: DataTypes.STRING(150), allowNull: false },
  description: { type: DataTypes.STRING(1000), allowNull: true },
  status: { type: DataTypes.ENUM('pending','in_progress','completed'), defaultValue: 'pending' }
}, {
  timestamps: true,
});
module.exports = Task;
