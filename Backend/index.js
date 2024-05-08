const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./database');

const user = require('./model/user');
const restaurant = require('./model/restaurant');
const table = require('./model/table');
const reservation = require('./model/reservation');

//end of print

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user', require('./router/user'));
app.use('/restaurant', require('./controller/restaurant'));
app.use('/table', require('./controller/table'));
app.use('/reservation', require('./controller/reservation'));


// Use your routes

app.listen(8000, async () => {
    console.log("Server running at http://localhost:8000");
    await sequelize.authenticate();
    console.log("Database synced");
});