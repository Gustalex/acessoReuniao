const Services=require('./services.js');
const dataSource=require('../models');
class reuniaoServices extends Services {
    constructor() {
        super('Reuniao'); //nome do modelo
    }
    //Adicionar mettodo de verificação de cpf, e também chegar se a reserva ainda está disponivel (pendente ou confirmada)
}
module.exports=reuniaoServices;