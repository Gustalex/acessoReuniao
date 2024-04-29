const Services=require('./services.js');
const dataSource=require('../models');

class ReservaServices extends Services{
    constructor(){
        super('Reserva'); // nome do modelo
    }

    async reservaStatus(situacao){
        return await dataSource.Reserva.findAll({where:{situacao:situacao}});
    }

    async verificaDisponibilidade(id_sala, dataReservada){
        const reservas=await dataSource.Reserva.findAll({where:{id_sala:id_sala}});
        if (!reservas) return false;
        const reserva=reservas.find(reserva=>reserva.dataReservada===dataReservada && (reserva.situacao==='confirmada' || reserva.situacao==='pendente'));
        return !!reserva;
    }

    async criaRegistro(novoRegistro){
        const response=await this.verificaDisponibilidade(novoRegistro.id_sala, novoRegistro.dataReservada);
        if (response) return{error: 'Sala já reservada'};
        return !!dataSource.Reserva.create(novoRegistro);
    }
}

module.exports=ReservaServices;