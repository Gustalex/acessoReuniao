'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adm extends Model {
    static associate(models) {
      Adm.hasMany(models.Reserva, {
        foreignKey: 'id_adm',
      });
    }
  }
  Adm.init({
    login: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Adm',
    tableName: "adms",
  });
  return Adm;
};