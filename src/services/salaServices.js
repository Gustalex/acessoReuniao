const Services=require('./services.js');
const z=require('zod');

class salaServices extends Services{
    constructor(){
        super('Sala',z.object({
            nome:z.string().min(5,{message:"o campo nome necessita de NO MINIMO 5 caracteres"}).max(255,{message:"o campo nome necessita de NO MAXIMO 255 caracteres"}),
            andar:z.number().int().nonnegative(),
            area:z.string().min(5,{message:"o campo area necessita de NO MINIMO 5 caracteres"}).max(255,{message:"o campo area necessita de NO MAXIMO 255 caracteres"}),
            capMax:z.number().int().positive({message:"o campo capMax necessita ser um numero inteiro positivo"}).default(0,{message:"o campo capMax necessita ser um numero inteiro positivo ou vazio",refine:(v)=>v==null?0:v}),
            situacao:z.string().length(1),
        }));
    }
}
module.exports=salaServices;