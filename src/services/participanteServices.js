const Services = require('./services.js');
const z=require('zod');
class participanteServices extends Services {
    constructor() {
        super('Participante', z.object({
            nome: z.string().min(4).max(100),
            sobrenome: z.string().min(4).max(100),
            email: z.string().email(),
            numTelefone: z.string().min(8).max(20),
        })); //nome do modelo
    }
}
module.exports = participanteServices;