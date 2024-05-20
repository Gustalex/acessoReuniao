const Services=require('./services.js');
const dataSource=require('../models');
const z=require('zod');
class ReservaServices extends Services{
    constructor(){
        super('Reserva', z.object({
            id_reservista: z.number().int().positive(),
            id_sala: z.number().int().positive(),
            id_adm: z.number().int().positive(),
            dataReserva: z.date(),
            dataReservada: z.date(),
            horaInicio: z.string(),
            horaFimReserva: z.string(),
            statusReserva: z.string(),
            dataModificacaoStatus: z.date(),
            motivoReserva: z.string()
        })); // nome do modelo
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

        const [hours, minutes] = novoRegistro.horaInicio.split(":").map(Number);
        const novaHora = (hours + 3) % 24; // Adiciona 3 horas e garante que a hora permaneça dentro do intervalo de 0 a 23
        const novaHoraString = `${novaHora.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        
        novoRegistro.horaFimReserva = novaHoraString;
        
    
        const createdReserva = await dataSource.Reserva.create(novoRegistro);
        return createdReserva;
    }
    
    
}

module.exports=ReservaServices;