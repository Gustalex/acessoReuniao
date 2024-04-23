const Services = require('./services.js');

class reservistaServices extends Services {
    constructor() {
        super('Reservista'); //nome do modelo
    }
}
module.exports = reservistaServices;