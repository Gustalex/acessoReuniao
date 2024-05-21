const Services = require('./services.js');
const z=require('zod');

class fracasoServices extends Services {
    constructor() {
        super('Fracaso', z.object({
            exception: z.string(),
            mensagem : z.string(),
        })); //nome do modelo
    }
}
module.exports = fracasoServices;