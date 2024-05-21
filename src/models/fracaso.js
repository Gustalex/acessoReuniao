'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fracaso extends Model {
    static associate(models) {
      // define association here
    }
  }
  Fracaso.init({
    exception: DataTypes.STRING,
    message: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Fracaso',
    tableName: 'fracasos',
  });
  return Fracaso;
};
