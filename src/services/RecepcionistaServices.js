const Services=require("./services.js");
const z=require('zod');

class recepcionistaServices extends Services{
    constructor(){
        super('Recepcionista',z.object({
            login:z.string().min(5,{message:"O campo de login necessita de NO MINIMO 5 caracteres"}).max(255,{message:"O campo de login necessita de NO MAXIMO 255 caracteres"}),
            senha:z.string().min(5,{message:"O campo de senha necessita de NO MINIMO 5 caracteres"}).max(255,{message:"O campo de senha necessita de NO MAXIMO 255 caracteres"}),
            nome:z.string().min(5,{message:"O campo de nome necessita de NO MINIMO 5 caracteres"}).max(255,{message:"O campo de nome necessita de NO MAXIMO 255 caracteres"}),
            sobrenome:z.string().min(5,{message:"O campo de sobrenome necessita de NO MINIMO 5 caracteres"}).max(255,{message:"O campo de sobrenome necessita de NO MAXIMO 255 caracteres"}),
            ativo:z.boolean(),
            nivelAcesso:z.number().int({message:"O campo de nivel de acesso necessita ser um numero inteiro"}).positive({message:"O campo de nivel de acesso necessita ser um numero inteiro positivo"}),
        }));
    }
}

module.exports=recepcionistaServices;