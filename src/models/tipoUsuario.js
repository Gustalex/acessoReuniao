'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoUsuario extends Model {
    static associate(models) {
      TipoUsuario.hasMany(models.User, {
        foreignKey: 'tipo',
      });
    }
  }
  TipoUsuario.init({
    tipoUser: DataTypes.INTEGER,
    glossarioTipo: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'TipoUsuario',
    tableName: 'tipo_usuarios',
  });
  return TipoUsuario;
};
