const Services=require('./services.js');
const dataSource=require('../models');

class ReservaServices extends Services{
    constructor(){
        super('Reserva'); // nome do modelo
    }

    async reservaStatus(situacao){
        try{
            return await dataSource.Reserva.findAll({where:{situacao:situacao}});
        }catch (error){
            throw error;
        }
    }

    async verificaDisponibilidade(id_sala, dataReservada){
        try{
            const reservas=await dataSource.Reserva.findAll({where:{id_sala:id_sala,dataReservada:dataReservada}});
            if(reservas.length===0) return false;
            const reserva=reservas.find(reserva=>reserva.dataReservada===dataReservada && (reserva.situacao==='confirmada' || reserva.situacao==='pendente'));
            return !reserva;
        }catch (error){
            throw error;
        }
    }

    async criaRegistro(novoRegistro){
        try{
            const response=await this.verificaDisponibilidade(novoRegistro.id_sala, novoRegistro.dataReservada);
            if (response) return{error: 'Sala já reservada'};
            return dataSource.Reserva.create(novoRegistro);
        }catch (error){
            throw error;
        }
    }
}

module.exports=ReservaServices;