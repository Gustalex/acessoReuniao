const Services = require('./services.js');
const dataSource = require('../models');

class listaNegraServices extends Services {
    constructor() {
        super('ListaNegra'); //nome do modelo
    }

    async consultarResponsavel(idResponsavel){
        return await dataSource.ListaNegra.findOne({where:{idResponsavel:idResponsavel}});
    }
}
module.exports = listaNegraServices;