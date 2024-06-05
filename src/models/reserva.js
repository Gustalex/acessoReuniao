'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    static associate(models) {
      Reserva.belongsTo(models.Sala, {
        foreignKey: 'idSala',
        as: 'sala'
      });
      Reserva.belongsTo(models.Usuario, {
        foreignKey: 'idUsuario',
        as: 'usuario'
      });
    }
  }
  Reserva.init({
    idSala: DataTypes.INTEGER,
    idUsuario: DataTypes.INTEGER,
    dataInicio: DataTypes.DATE,
    dataFim: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reserva',
    tableName: 'reservas'
  });
  return Reserva;
};