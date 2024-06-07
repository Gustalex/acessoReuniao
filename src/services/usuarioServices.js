const Services=require('./services.js');
const z=require('zod');

class UsuarioServices extends Services{
    constructor(){
        super('Usuario',z.object({
            nome:z.string().min(5,{message:"o campo nome necessita de NO MINIMO 5 caracteres"}).max(255,{message:"o campo nome necessita de NO MAXIMO 255 caracteres"}),
            sobrenome:z.string().min(5,{message:"o campo sobrenome necessita de NO MINIMO 5 caracteres"}).max(255,{message:"o campo sobrenome necessita de NO MAXIMO 255 caracteres"}),
            email:z.string().email({message:"o campo email necessita ser um email valido"}),
            senha:z.string().min(5,{message:"o campo senha necessita de NO MINIMO 5 caracteres"}).max(255,{message:"o campo senha necessita de NO MAXIMO 255 caracteres"}),
            ativo:z.boolean(),
            nivelAcesso:z.number().int({message:"o campo nivel de acesso necessita ser um numero inteiro"}).positive({message:"o campo nivel de acesso necessita ser um numero inteiro positivo"}),
        }));
    }
}

module.exports=UsuarioServices;