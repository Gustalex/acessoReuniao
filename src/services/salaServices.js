const Services = require('./services.js');

class salaServices extends Services {
    constructor() {
        super('Sala'); //nome do modelo
    }
}
module.exports = salaServices;