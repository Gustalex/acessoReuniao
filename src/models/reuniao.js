'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reuniao extends Model {
    static associate(models) {
      Reuniao.belongsTo(models.Reserva, {
        foreignKey: 'reservaId',
        as: 'Reserva',
      });
      Reuniao.belongsTo(models.Participante, {
        foreignKey: 'idParticipante',
        as: 'Participante',
      });
    }
  }
  Reuniao.init({
    reservaId: DataTypes.INTEGER,
    idParticipante: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Reuniao',
    tableName: 'reunioes',
  });
  return Reuniao;
};
