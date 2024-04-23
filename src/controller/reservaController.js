const Controller = require('./controller.js');
const dataSource = require('../models');
const axios = require('axios');
const Reserva = require('../models/reserva.js');
const ReservaServices = require('../services/reservaServices.js');
const reservaServices = new ReservaServices();

class ReservaController extends Controller {
    constructor() {
        super(reservaServices);
    }
    async reservasStatus(req, res) {
        const situacao = req.params.status;
        try {
            const reservas = await dataSource.Reserva.findAll({where: {situacao: situacao}});
            return res.status(200).json(reservas);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async verificaHorarioReservaExistente(req, res) {
        const idSala = Number(req.params.idSala);
        const dataReservada = (req.params.dataReservada);       
        try {
            const response = await axios.get(`http://localhost:3000/sala/${idSala}`);
            const sala = response.data; 
            if(!sala) return res.status(404).json({ error: 'Sala não encontrada' });
            const reservas = await dataSource.Reserva.findAll({where: {id_sala: idSala}});
            if(!reservas) return res.status(404).json({ error: 'Reserva não encontrada' });
            const reserva = reservas.find(reserva => reserva.dataReservada === dataReservada && reserva.situacao === 'confirmada' || reserva.situacao === 'pendente');
            if (reserva) return res.status(200).json(true);
            return res.status(200).json(false);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ReservaController;
