const Services = require('./services.js');
const dataSource=require('../models');

class admServices extends Services {
    constructor() {
        super('Adm'); //nome do modelo
    }
    async login(login, senha) {
        const adm = dataSource.Adm.findOne({ where: {login, senha } });
        return !!adm;
    }
}
module.exports = admServices;