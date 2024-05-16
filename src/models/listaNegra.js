'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListaNegra extends Model {
    static associate(models) {
      ListaNegra.belongsTo(models.Participante, {
        foreignKey: 'idResponsavel',
      });
      ListaNegra.belongsTo(models.Reserva, {
        foreignKey: 'idReservaMotivo',
      });
    }
  }
  ListaNegra.init({
    idResponsavel: DataTypes.INTEGER,
    idReservaMotivo: DataTypes.INTEGER,
    motivo: DataTypes.STRING,
    dataBloqueio: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'ListaNegra',
    tableName: 'listaNegras',
  });
  return ListaNegra;
};
