const Services = require('./services.js');

class nivelAcessoServices extends Services {
    constructor() {
        super('NivelAcesso'); //nome do modelo
    }
}
module.exports = nivelAcessoServices;