const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/sequelize');

const User = db.define('User', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  db,
  timestamps:true,
  createdAt: true,
  updatedAt: true,
  freezeTableName: true
});

module.exports = User