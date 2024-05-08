const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./user')

const Restaurant = sequelize.define('Restaurant', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  module.exports = Restaurant
  
  