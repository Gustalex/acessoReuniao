'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Reserva, {
        foreignKey: 'id_reservista',
      });
      User.belongsTo(models.TipoUsuario, {
        foreignKey: 'tipo',
        as: 'TipoUsuario',
      });
      User.belongsTo(models.NivelAcesso, {
        foreignKey: 'nivelAcesso',
        as: 'NivelAcesso',
      });
      User.hasMany(models.ListaNegra, {
        foreignKey: 'idResponsavel',
      });
    }
  }
  User.init({
    login: DataTypes.STRING,
    senha: DataTypes.STRING,
    identificador: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    tipo: DataTypes.INTEGER,
    nivelAcesso: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });
  return User;
};
