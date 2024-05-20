const Services = require('./services.js');
const z = require('zod');


class TipoUsuarioServices extends Services {
    constructor() {
        super('TipoUsuario', z.object({
            tipoUser: z.number().int().nonnegative(),
            glossarioTipo: z.string().min(4).max(20),
        })); //nome do modelo
    }
}

module.exports = TipoUsuarioServices;