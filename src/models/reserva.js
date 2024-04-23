'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    static associate(models) {
      Reserva.belongsTo(models.Sala, {
        foreignKey: 'id_sala',
        as: 'salas'
      });
      Reserva.belongsTo(models.Adm, {
        foreignKey: 'id_adm',
        as: 'adms'
      });
      Reserva.belongsTo(models.Reservista, {
        foreignKey: 'id_reservista',
        as: 'reservistas'
      });
    }
  }
  Reserva.init({
    id_reservista: DataTypes.INTEGER,
    id_sala: DataTypes.INTEGER,
    id_adm: DataTypes.INTEGER,
    dataReservada: DataTypes.DATE,
    situacao: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reserva',
    tableName: "reservas",
  });
  return Reserva;
};