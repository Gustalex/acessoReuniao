'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservista extends Model {
    static associate(models) {
      Reservista.hasMany(models.Reserva, {
        foreignKey: 'id_reservista',
      });
    }
   }
  Reservista.init({
    cpf: DataTypes.STRING,
    telefone: DataTypes.STRING,
    nome: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reservista',
    tableName: "reservistas",
  });
  return Reservista;
};