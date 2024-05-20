const Services = require('./services.js');
const z=require('zod');
class salaServices extends Services {
    constructor() {
        super('Sala', z.object({
            nome: z.string().min(4).max(20),
            andar: z.number().int().nonnegative(),
            area: z.string().min(4).max(20),
            capMax: z.number().int().positive(),
            observacao: z.string().max(100),
            situacao: z.string().length(1),
        })); //nome do modelo
    }
}
module.exports = salaServices;