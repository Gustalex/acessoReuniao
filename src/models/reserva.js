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
    dataReservada: DataTypes.Date,
    horaInicio: DataTypes.Date, //pegar apenas horas e minutos
    horaFimReserva:  DataTypes.Date,
    statusReserva: DataTypes.STRING,
    dataModificacaoStatus: DataTypes.DATE,
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