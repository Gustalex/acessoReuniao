const Services=require('./services.js');
const dataSource=require('../models');
const z=require('zod');

class NivelAcessoServices extends Services{
    constructor(){
        super('NivelAcesso',z.object({
            nivelAcesso:z.string().min(5,{message:"O campo de nivel de acesso necessita de NO MINIMO 5 caracteres"}).max(255,{message:"O campo de nivel de acesso de NO MAXIMO 255 caracteres"}),
            glossarioNivel:z.string().min(5,{message:"O campo de descrição de nivel de acesso necessita de NO MINIMO 5 caracteres"}).max(255,{message:"O campo de descrição de nivel de acesso  necessita de NO MAXIMO 255 caracteres"}),
        }));
    }
}

module.exports=NivelAcessoServices();