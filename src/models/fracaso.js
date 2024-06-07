'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fracaso extends Model {
    static associate(models) {
    }
  }
  Fracaso.init({
    exception: DataTypes.STRING,
    mensage: DataTypes.STRING,
    tabelaRelacionada: DataTypes.STRING,
    funcaoRelacionada: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Fracaso',
    tableName: 'fracasos'
  });
  return Fracaso;
};