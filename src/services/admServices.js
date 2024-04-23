const Services = require('./services.js');

class admServices extends Services {
    constructor() {
        super('Adm'); //nome do modelo
    }
}
module.exports = admServices;