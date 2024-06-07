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
    dataReservada: DataTypes.STRING,
    horaInicio: DataTypes.STRING,
    horaFimReserva:  DataTypes.STRING,
    statusReserva: DataTypes.STRING,
    dataModificacaoStatus: DataTypes.STRING,
    motivoReserva: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reserva',
    tableName: 'reservas'
  });
  return Reserva;
};