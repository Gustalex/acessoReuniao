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
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reservista',
    tableName: "reservistas",
  });
  return Reservista;
};