const Services=require('./services.js');
const z=require('zod');
class reuniaoServices extends Services {
    constructor() {
        super('Reuniao', z.object({
            reservaId: z.number().int().positive(),
            idParticipante: z.number().int().positive(),
        })); //nome do modelo
    }
    //Adicionar mettodo de verificação de cpf, e também chegar se a reserva ainda está disponivel (pendente ou confirmada)
}
module.exports=reuniaoServices;