require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

const Location = require('./Location')(sequelize);
const Traveller = require('./Traveller')(sequelize);
const Trips = require('./Trips')(sequelize);

Traveller.belongsToMany(Location, { through: Trips });
Location.belongsToMany(Traveller, { through: Trips });

module.exports = {
    sequelize,
    Location,
    Traveller,
    Trips
};