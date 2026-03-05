const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('Member', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true }
  }, { tableName: 'Members', timestamps: true });
};
