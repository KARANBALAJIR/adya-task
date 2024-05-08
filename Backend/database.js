const Sequlize = require('sequelize');

const sequelize = new Sequlize("db_aa871f_karan12", "aa871f_karan12", "Password@123", {
     host: 'mysql8010.site4now.net',
   // host: 'localhost',
    dialect: "mysql",
    logging: false,
    timezone: '+05:30',
   

}) 
module.exports = sequelize