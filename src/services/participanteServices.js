const Services = require('./services.js');

class participanteServices extends Services {
    constructor() {
        super('Participante'); //nome do modelo
    }
}
module.exports = participanteServices;