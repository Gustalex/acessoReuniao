'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Participante extends Model {
    static associate(models) {
      Participante.hasMany(models.Reserva, {
        foreignKey: 'id_reservista',
      });
      Participante.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'User',
      });
      Participante.hasMany(models.ListaNegra, {
        foreignKey: 'idResponsavel',
      });
    }
  }
  Participante.init({
    userId: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    email: DataTypes.STRING,
    numTelefone: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Participante',
    tableName: 'participantes',
  });
  return Participante;
};
