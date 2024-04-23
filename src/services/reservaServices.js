const Services = require('./services.js');

class reservaServices extends Services {
    constructor() {
        super('Reserva'); //nome do modelo
    }
}
module.exports = reservaServices;