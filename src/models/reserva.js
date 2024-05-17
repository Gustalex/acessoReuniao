'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    static associate(models) {
      Reserva.belongsTo(models.Sala, {
        foreignKey: 'id_sala',
        as: 'Sala',
      });
      Reserva.belongsTo(models.User, {
        foreignKey: 'id_adm',
        as: 'User',
      });
      Reserva.belongsTo(models.Participante, {
        foreignKey: 'id_reservista',
        as: 'Participante',
      });
    }
  }
  Reserva.init({
    id_reservista: DataTypes.INTEGER,
    id_sala: DataTypes.INTEGER,
    id_adm: DataTypes.INTEGER,
    dataReserva: DataTypes.DATE,
    dataReservada: DataTypes.DATE,
    horaInicio: DataTypes.TIME,
    horaFimReserva: DataTypes.TIME,
    statusReserva: DataTypes.STRING,
    dataModificacaoStatus: DataTypes.DATE,
    motivoReserva: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Reserva',
    tableName: 'reservas',
  });
  return Reserva;
};
