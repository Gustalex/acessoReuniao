const Services=require('./services.js');
const dataSource=require('../models');
const z=require('zod');

class NivelAcessoServices extends Services{
    constructor(){
        super('NivelAcesso',z.object({
            descricao:z.string().min(5,{message:"O campo de descrição necessita de NO MINIMO 5 caracteres"}).max(255,{message:"O campo de descrição necessita de NO MAXIMO 255 caracteres"}),
            createdAt:z.string().date({message:"O campo de data de criação necessita do time yyyy-mm-dd"}),
            updatedAt:z.string().date({message:"O campo de data de atualização necessita do time yyyy-mm-dd"}),
        }));
    }
}

module.exports=NivelAcessoServices();