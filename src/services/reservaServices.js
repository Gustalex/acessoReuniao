const Services=require('./services.js');
const dataSuorce=require('../models');
const z=require('zod');

class ReservaServices extends Services{
    constructor(){
        super('Reserva',z.object({
            idSala:z.number().int({message:"O campo de idSala necessita ser um numero inteiro"}).positive({message:"O campo de idSala necessita ser um numero inteiro positivo"}),
            idUsuario:z.number().int({message:"O campo de idUsuario necessita ser um numero inteiro"}).positive({message:"O campo de idUsuario necessita ser um numero inteiro positivo"}),
            dataReservada:z.string().date({message:"O campo dataReservada necessita do time yyyy-mm-dd"}),
            horaInicio:z.string().time({message:"O campo horaInicio necessita do time hh:mm:ss"}),
            horaFimReserva:z.string().time({message:"O campo horaFimReserva necessita do time hh:mm:ss"}),
            statusReserva:z.string().length(1,{message:"o campo statusReserva necessita de apenas um caracter"}),
            dataModificacaoStatus:z.string().date({message:"O campo dataModificacaoStatus necessita do time yyyy-mm-dd"}),
            motivoReserva:z.string().min(5,{message:"o campo motivoReserva necessita de NO MINIMO 5 caracteres"}).max(255,{message:"o campo motivoReserva necessita de NO MAXIMO 255 caracteres"}),
          }));
    }
    async reservaStatus(situacao){
        return await dataSource.Reserva.findAll({where:{statusReserva:situacao}});
    }

    async verificaHorarioReserva(id_sala, dataReservada) {
        const reservas = await dataSource.Reserva.findAll({
            where: {
                id_sala: id_sala,
                dataReservada: dataReservada,
                statusReserva: ['confirmada', 'pendente']
            }
        });
        return reservas.length > 0;
    }
    
    async verificaDisponibilidade(id_sala, dataReservada, horaReservada) {
        const reservaDia = await this.verificaHorarioReserva(id_sala, dataReservada);
        if (!reservaDia) return false;
        const reserva = await dataSource.Reserva.findOne({
            where: {
                id_sala: id_sala,
                dataReservada: dataReservada,
                horaReservada: horaReservada,
                statusReserva: ['confirmada', 'pendente']
            }
        });
        return reserva;
    }
    
    async criaRegistro(novoRegistro) {
        const response = await this.verificaDisponibilidade(novoRegistro.id_sala, novoRegistro.dataReservada, novoRegistro.horaInicio);
        if (response) return { error: 'Sala já reservada' };
        novoRegistro.statusReserva = 'pendente';

        //Por isso separado 
        const [hours, minutes] = novoRegistro.horaInicio.split(":").map(Number);
        const novaHora = (hours + 3) % 24; // Adiciona 3 horas e garante que a hora permaneça dentro do intervalo de 0 a 23
        const novaHoraString = `${novaHora.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        
        novoRegistro.horaFimReserva = novaHoraString;
        
    
        const createdReserva = await dataSource.Reserva.create(novoRegistro);
        return createdReserva;
    }
    
    async buscarReservista(id_reservista){
        return await dataSource.Reserva.findOne({where:{id_reservista:id_reservista}});
    }
}

module.exports=ReservaServices;