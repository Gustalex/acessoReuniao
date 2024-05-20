const Services = require('./services.js');
const dataSource = require('../models');
const z=require('zod');

class listaNegraServices extends Services {
    constructor() {
        super('ListaNegra', z.object({
            idResponsavel: z.number().int().positive(),
            motivo: z.string(),
            dataInicio: z.date(),
            dataFim: z.date(),
        })); //nome do modelo
    }

    async consultarResponsavel(idResponsavel){
        return await dataSource.ListaNegra.findOne({where:{idResponsavel:idResponsavel}});
    }
}
module.exports = listaNegraServices;