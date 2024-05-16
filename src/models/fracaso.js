'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fracaso extends Model {
    static associate(models) {
      Fracaso.belongsTo(models.User, {
        foreignKey: 'idUser',
      });
    }
  }
  Fracaso.init({
    idUser: DataTypes.INTEGER,
    exception: DataTypes.STRING,
    mensage: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Fracaso',
    tableName: 'fracasos',
  });
  return Fracaso;
};
