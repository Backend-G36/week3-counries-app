const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const City = sequelize.define('city', { //-> cities 
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  area: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  isCapital: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  //countryId  -> no la escribo
});

module.exports = City;