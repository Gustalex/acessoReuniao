const Services = require('./services.js');
const dataSource=require('../models');

class admServices extends Services {
    constructor() {
        super('Adm'); //nome do modelo
    }
    async login(login, senha) {
        return dataSource.Adm.findOne({ where: {login, senha } });
    }
}
module.exports = admServices;