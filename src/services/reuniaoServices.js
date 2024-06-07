const Services=require('./services.js');
const z=require('zod');	

class ReuniaoServices extends Services{
    constructor(){
        super('Reuniao',z.object({
            reservaId:z.number().int({message:"O campo de reservaId necessita ser um numero inteiro"}).positive({message:"O campo de reservaId necessita ser um numero inteiro positivo"}),
            idParticipante:z.array(z.number().int({message:"O campo de idParticipante necessita ser um numero inteiro"}).positive({message:"O campo de idParticipante necessita ser um numero inteiro positivo"})),
        }));
    }
}
module.exports=ReuniaoServices;