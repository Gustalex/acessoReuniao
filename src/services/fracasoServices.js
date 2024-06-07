const Services=require('./services.js');
const z=require('zod');

class FracasoServices extends Services{
    constructor(){
        super('Fracaso', z.object({
            exception :z.string(),
            mensage : z.nullable(z.string()),
            tabelaRelacionada: z.string(),
            funcaoRelacionada: z.string(),
        }));
    }
}

module.exports=FracasoServices;