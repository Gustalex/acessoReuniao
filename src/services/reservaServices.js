const Services=require('./services.js');
const dataSource=require('../models');

class ReservaServices extends Services{
    constructor(){
        super('Reserva'); // nome do modelo
    }

    async reservaStatus(situacao){
        return await dataSource.Reserva.findAll({where:{situacao:situacao}});
    }

    async verificaHorarioReserva(id_sala, dataReservada) {
        const reservas = await dataSource.Reserva.findAll({
            where: {
                id_sala: id_sala,
                dataReservada: dataReservada,
                situacao: ['confirmada', 'pendente']
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
                situacao: ['confirmada', 'pendente']
            }
        });
        return reserva;
    }
    
    async criaRegistro(novoRegistro) {
        const response = await this.verificaDisponibilidade(novoRegistro.id_sala, novoRegistro.dataReservada, novoRegistro.horaReservada);
        if (response) return { error: 'Sala já reservada' };
        novoRegistro.situacao = 'pendente';

        const [hours, minutes] = novoRegistro.horaReservada.split(":").map(Number);
        const novaHora = (hours + 3) % 24; // Adiciona 3 horas e garante que a hora permaneça dentro do intervalo de 0 a 23
        const novaHoraString = `${novaHora.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        
        novoRegistro.horaFim = novaHoraString;
        
    
        const createdReserva = await dataSource.Reserva.create(novoRegistro);
        return createdReserva;
    }
    
    
}

module.exports=ReservaServices;