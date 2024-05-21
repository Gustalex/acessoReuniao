const Services = require('./services.js');
const dataSource = require('../models');
const z = require('zod');

class ReservaServices extends Services {
    constructor() {
        const validador=z.object({
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
        });
        super('Reserva', validador);
    }

    validarDados(dados) {
        if (dados.dataReserva && typeof dados.dataReserva === 'string') dados.dataReserva = new Date(dados.dataReserva);
        if (dados.dataReservada && typeof dados.dataReservada === 'string') dados.dataReservada = new Date(dados.dataReservada);
        if (dados.dataModificacaoStatus && typeof dados.dataModificacaoStatus === 'string') dados.dataModificacaoStatus = new Date(dados.dataModificacaoStatus);
        try {
            this.validador.parse(dados);
        } catch (error) {
            const invalidFields = error.errors.map(err => `${err.path}: ${err.message}`).join(', ');
            throw new Error(`Dados inválidos: ${invalidFields}`);
        }
    }

    async reservaStatus(situacao) {
        return await dataSource.Reserva.findAll({ where: { statusReserva: situacao } });
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

        // Validação com Zod
        this.validarDados(novoRegistro);

        const createdReserva = await dataSource.Reserva.create(novoRegistro);
        return createdReserva;
    }

    async atualizaRegistro(dadosAtualizados, id) {
        const dadosExistentes = await this.pegaUmRegistro(id);
        if (!dadosExistentes) {
            throw new Error('Registro não encontrado');
        }
        
        const dadosParaAtualizar = {
            ...dadosExistentes.toJSON(), // Convertendo os dados existentes para um objeto simples
            ...dadosAtualizados, // Mesclando com os dados atualizados
            updatedAt: new Date() // Atualizando o campo updatedAt
        };
        
        const [hours, minutes] = dadosParaAtualizar.horaInicio.split(":").map(Number);
        const novaHora = (hours + 3) % 24; // Adiciona 3 horas e garante que a hora permaneça dentro do intervalo de 0 a 23
        const novaHoraString = `${novaHora.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        dadosParaAtualizar.horaFimReserva = novaHoraString;
        
        this.validarDados(dadosParaAtualizar);
    
        return await dadosExistentes.update(dadosParaAtualizar);
    }
    
    
}

module.exports = ReservaServices;
