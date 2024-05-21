const Controller=require('./controller.js');
const ReservaServices=require('../services/reservaServices.js');
const reservaServices=new ReservaServices();
const { sendMail } = require('../services/emailServices.js');
const emailBody = require('../utils/emailTemplate.js');

class ReservaController extends Controller {
    constructor(){
        super(reservaServices);
    }
    
    async reservasStatus(req, res) {
        const situacao=req.params.status;
        try{
            const reservas=await reservaServices.reservaStatus(situacao);
            return res.status(200).json(reservas);
        }catch(erro){
            return res.status(500).json({message: erro.message,name: erro.name,});
        }
    }

    async verificaHorarioReservaExistente(req, res) {
        const {idSala, dataReservada}=req.params; 
        try {
            const response=await reservaServices.verificaHorarioReserva(idSala, dataReservada);
            return res.status(200).json(response);
        } catch (erro) {
            return res.status(500).json({message: erro.message,name: erro.name,});
        }
    }

    async verificaDisponibilidade(req, res) {
        const {idSala, dataReservada, horaReservada}=req.params;
        try {
            const response=await reservaServices.verificaDisponibilidade(idSala, dataReservada, horaReservada);
            return res.status(200).json(response);
        } catch (erro) {
            return res.status(500).json({message: erro.message,name: erro.name,});
        }
    }
    
    async cria(req, res){
        const novoRegistro = req.body;
        try{
            const novoRegistroCriado = await reservaServices.criaRegistro(novoRegistro);
            const reservista = await reservaServices.buscarReservista(novoRegistro.id_reservista);
            if(novoRegistroCriado){
                try{
                    const subject = 'Confirmação de Reserva CIPT'
                    const message = emailBody;
                    const email = reservista.email
                    await sendMail(subject, message, email);
                }catch(erro){
                    console.error(`Erro ao enviar o email: ${erro}`);
                    throw erro;
                }
            }
            return res.status(200).json(novoRegistroCriado);
        }catch(erro){
            return res.status(500).json({message: erro.message,name: erro.name,stack:erro.stack});
        }
    }
}

module.exports = ReservaController;
