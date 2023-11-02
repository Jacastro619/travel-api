const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Trip extends Model {}

Trip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    traveller_amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true,
      },
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "traveller",
        key: "id",
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "location",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "trip",
  }
);

module.exports = Trip;
