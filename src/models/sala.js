'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sala extends Model {
    static associate(models) {
      Sala.hasMany(models.Reserva, {
        foreignKey: 'id_sala',
      });
    }
  }
  Sala.init({
    nome: DataTypes.STRING,
    andar: DataTypes.INTEGER,
    area: DataTypes.STRING,
    capMax: DataTypes.INTEGER,
    observacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sala',
    tableName: "salas",
  });
  return Sala;
};