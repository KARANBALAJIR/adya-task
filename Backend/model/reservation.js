
// const Sequlize = require('sequelize');
const { checkpass, hashed } = require('../hashpassword')
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = require('./user');
const Restaurant = require('./restaurant');
const Table = require('./table');
const Reservation = sequelize.define('Reservation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    table_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_date_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    guests: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    special_requests: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });


  
  
  
  Restaurant.hasMany(Table, { foreignKey: 'restaurant_id' });
  Table.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });
  
  Restaurant.hasMany(Reservation, { foreignKey: 'restaurant_id' });
  Reservation.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });
  
  Reservation.belongsTo(Table, { foreignKey: 'table_id' });
  Table.hasMany(Reservation, { foreignKey: 'table_id' });
  
  Reservation.belongsTo(User, { foreignKey: 'user_id' });
  User.hasMany(Reservation, { foreignKey: 'user_id' });
  
module.exports = Reservation

