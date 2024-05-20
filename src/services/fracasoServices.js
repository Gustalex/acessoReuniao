const Services = require('./services.js');
const z=require('zod');

class fracasoServices extends Services {
    constructor() {
        super('Fracaso', z.object({
            idUser: z.number().int().positive(),
            exception: z.string(),
            mensage: z.string(),
        })); //nome do modelo
    }
}
module.exports = fracasoServices;