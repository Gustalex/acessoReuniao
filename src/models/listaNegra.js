'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListaNegra extends Model {
    static associate(models) {
      ListaNegra.belongsTo(models.Responsavel, {
        foreignKey: 'idResponsavel',
        as: 'responsavel'
      });
      ListaNegra.belongsTo(models.ReservaMotivo, {
        foreignKey: 'idReservaMotivo',
        as: 'reservaMotivo'
      });
    }
  }
  ListaNegra.init({
    idResponsavel: DataTypes.INTEGER,
    idReservaMotivo: DataTypes.INTEGER,
    codBloqueio: DataTypes.STRING,
    motivo: DataTypes.STRING,
    dataBloqueio: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ListaNegra',
    tableName: 'listaNegras'
  });
  return ListaNegra;
};