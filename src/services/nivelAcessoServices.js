const Services=require('./services.js');
const z=require('zod');

class NivelAcessoServices extends Services{
    constructor(){
        super('NivelAcesso',z.object({
            nivelAcesso:z.number().int({message:"O campo de NIVEL DE ACESSO só aceita valores naturais"}).positive({message:"O campo de NIVEL DE ACESSO necessita ser um numero inteiro positivo"}),
            glossarioNivel:z.string().min(5,{message:"O campo de descrição de nivel de acesso necessita de NO MINIMO 5 caracteres"}).max(255,{message:"O campo de descrição de nivel de acesso  necessita de NO MAXIMO 255 caracteres"}),
        }));
    }
}

module.exports=NivelAcessoServices;