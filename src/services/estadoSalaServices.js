const Services=require('./services.js');
const dataSource=require('./services.js');
const z=require('zod');

class EstadoSalaServices extends Services{
    constructor(){
        super('EstadoSala', z.object({
            observacao:z.string().min(5,{message:"O campo de observação necessita de NO MINIMO 5 caracteres"}).max(255,{message:"O campo de observação necessita de NO MAXIMO 255 caracteres"}),
            idSala:z.number().int({message:"O campo de id de sala só aceita valores naturais"}).positive({message:"O campo id de sala necessita ser um numero inteiro positivo"}),
        }));
    }
}

module.exports=EstadoSalaServices();