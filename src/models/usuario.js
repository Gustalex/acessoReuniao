'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.belongsTo(models.NivelAcesso, {
        foreignKey: 'idNivelAcesso',
        as: 'nivelAcesso'
      });
      Usuario.hasMany(models.Reserva, {
        foreignKey: 'idUsuario',
        as: 'reservas'
      });
    }
  }
  Usuario.init({
    identificador: DataTypes.STRING,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    numTelefone: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios'
  });
  return Usuario;
};