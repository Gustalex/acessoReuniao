const Services=require('./services.js');
const dataSource=require('./services.js');
const z=require('zod');

class EstadoSalaServices extends Services{
    constructor(){
        super('EstadoSala', z.object({
            id:z.number().optional(),
            idSala:z.string().min(3).max(100),
        }));
    }
}

module.exports=EstadoSalaServices();