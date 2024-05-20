const Services = require('./services.js');
const z=require('zod');

class nivelAcessoServices extends Services {
    constructor() {
        super('NivelAcesso', z.object({
            nivelAcesso: z.number().int().nonnegative(),
            glossarioNivel: z.string().min(4).max(20),
        })); //nome do modelo
    }
}
module.exports = nivelAcessoServices;