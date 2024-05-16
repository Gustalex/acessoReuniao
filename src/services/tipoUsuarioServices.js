const Services = require('./services.js');

class tipoUsuarioServices extends Services {
    constructor() {
        super('TipoUsuario'); //nome do modelo
    }
}
module.exports = tipoUsuarioServices;