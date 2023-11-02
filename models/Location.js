const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
    class Location extends Model {}

    Location.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Location'
    });

    return Location;
};