const Controller=require('./controller.js');
const ReservaServices=require('../services/reservaServices.js');
const reservaServices=new ReservaServices();

class ReservaController extends Controller {
    constructor(){
        super(reservaServices);
    }
    
    async reservasStatus(req, res) {
        const situacao=req.params.status;
        try{
            const reservas=await reservaServices.reservaStatus(situacao);
            return res.status(200).json(reservas);
        }catch(error){
            return res.status(500).json({error:error.message});
        }
    }
    
    async cria(req, res) {
        const novoRegistro=req.body;
        try{
            const novoRegistroCriado=await reservaServices.criaRegistro(novoRegistro);
            return res.status(201).json(novoRegistroCriado);
        }catch (error){
            return res.status(500).json({ error: error.message});
        }
    }

    async verificaHorarioReservaExistente(req, res) {
        const {idSala, dataReservada}=req.params; 
        try {
            const response=await reservaServices.verificaHorarioReservaExistente(idSala, dataReservada);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ReservaController;
