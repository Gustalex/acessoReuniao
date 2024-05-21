const Services = require('./services.js');
const dataSource = require('../models');
const z=require('zod');

class listaNegraServices extends Services {
    constructor() {
        const validador=z.object({
            idResponsavel: z.number().int().positive(),
            idReservaMotivo: z.number().int().positive(),
            motivo: z.string(),
            dataBloqueio: z.date(),
        })
        super('ListaNegra', validador); //nome do modelo
    }
    validarDados(dados) {
        if (dados.dataBloqueio && typeof dados.dataBloqueio === 'string') dados.dataBloqueio = new Date(dados.dataBloqueio);
        try {
            this.validador.parse(dados);
        } catch (error) {
            const invalidFields = error.errors.map(err => `${err.path}: ${err.message}`).join(', ');
            throw new Error(`Dados inválidos: ${invalidFields}`);
        }
    }
    async criaRegistro(dados){
        this.validarDados(dados);

        dados.createdAt = new Date();
        dados.updatedAt = new Date();
        return dataSource.ListaNegra.create(dados);    }

    async consultarResponsavel(idResponsavel){
        return await dataSource.ListaNegra.findOne({where:{idResponsavel:idResponsavel}});
    }
}
module.exports = listaNegraServices;