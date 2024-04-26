const Services = require('./services.js');
const dataSource=require('../models');

class admServices extends Services {
    constructor() {
        super('Adm'); //nome do modelo
    }
    async login(login, senha) {
        try {
            const adm = dataSource.Adm.findOne({ where: {login, senha } });
            return adm;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = admServices;