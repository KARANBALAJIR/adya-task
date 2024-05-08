const User = require('./user');
const Restaurant = require('./restaurant');
const Table = require('./table');
const Reservation = require('./reservation');



Restaurant.hasMany(Table, { foreignKey: 'restaurant_id' });
Table.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });

Restaurant.hasMany(Reservation, { foreignKey: 'restaurant_id' });
Reservation.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });

Reservation.belongsTo(Table, { foreignKey: 'table_id' });
Table.hasMany(Reservation, { foreignKey: 'table_id' });

Reservation.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Reservation, { foreignKey: 'user_id' });