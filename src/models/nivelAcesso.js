'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NivelAcesso extends Model {
    static associate(models) {
      NivelAcesso.hasMany(models.Usuario, {
        foreignKey: 'idNivelAcesso',
        as: 'usuarios'
      });
    }
  }
  NivelAcesso.init({
    nivelAcesso: DataTypes.INTEGER,
    glossarioNivel: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'NivelAcesso',
    tableName: 'nivelAcessos'
  });
  return NivelAcesso;
};