const Services=require('./services.js');
const dataSource=require('../models');
const { enviaWhatsApp } = require('../services/whatsappServices');


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
            const reservas=await dataSource.Reserva.findAll({where:{id_sala:id_sala}});
            if (!reservas) return false;
            const reserva=reservas.find(reserva=>reserva.dataReservada===dataReservada && (reserva.situacao==='confirmada' || reserva.situacao==='pendente'));
            return reserva;
        }catch (error){
            throw error;
        }
    }

    async criaRegistro(novoRegistro){
        try{
            const response=await this.verificaDisponibilidade(novoRegistro.id_sala, novoRegistro.dataReservada);
            if (response) return{error: 'Sala já reservada'};
            return dataSource.Reserva.create(novoRegistro);
            /*
            pensar depois numa maneira melhor de  como enviar mensagem para o whatsapp
            if(novoRegistroCriado){
                const regrasCoworking = `

    As chaves das salas de estudo só podem ser entregues se for realizada uma reserva prévia, que é feita por aqui mesmo, e se tiverem no mínimo 3 pessoas presentes, e no máximo 5. O tempo máximo de permanência são 3 horas. Temos um tempo de tolerância para a retirada da chave de 30 MINUTOS, passando disso, se chegar algum grupo com no mínimo 3 pessoas presentes, e pedir a sala, entregaremos.
                
    Lembrando que se ao chegar tiverem as 3 pessoas, mas durante o uso da sala uma for embora, não poderá permanecer na sala com duas pessoas e terá que devolver a chave!
                
    Dentro das salas não é permitida a alimentação, assim como em todo o espaço de coworking. Por favor, ao utilizar o coworking mantenha o máximo de silêncio possível, pois é uma área onde todos estão tentando se concentrar em suas atividades ou trabalho. Agradeço desde já!
`;
                let numero_cel = '+5582993640802'
                const mensagem_txt = `Olá! Uma nova reserva foi feita. Confira as regras do coworking: ${regrasCoworking}`;
                await enviaWhatsApp(numero_cel, mensagem_txt);
            }*/
        }catch (error){
            throw error;
        }
    }
}

module.exports=ReservaServices;