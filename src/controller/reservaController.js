const Controller=require('./controller.js');
const ReservaServices=require('../services/reservaServices.js');
const reservaServices=new ReservaServices();
const { enviaWhatsApp } = require('../services/whatsappServices');

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

    async verificaHorarioReservaExistente(req, res) {
        const {idSala, dataReservada}=req.params; 
        try {
            const response=await reservaServices.verificaHorarioReserva(idSala, dataReservada);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async verificaDisponibilidade(req, res) {
        const {idSala, dataReservada, horaReservada}=req.params;
        try {
            const response=await reservaServices.verificaDisponibilidade(idSala, dataReservada, horaReservada);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    
    async cria(req, res){
        const novoRegistro = req.body;
        try{
            const novoRegistroCriado = await reservaServices.criaRegistro(novoRegistro);
            /*if(novoRegistroCriado){
                const regrasCoworking = `

            As chaves das salas de estudo só podem ser entregues se for realizada uma reserva prévia, que é feita por aqui mesmo, e se tiverem no mínimo 3 pessoas presentes, e no máximo 5. O tempo máximo de permanência são 3 horas. Temos um tempo de tolerância para a retirada da chave de 30 MINUTOS, passando disso, se chegar algum grupo com no mínimo 3 pessoas presentes, e pedir a sala, entregaremos.

            Lembrando que se ao chegar tiverem as 3 pessoas, mas durante o uso da sala uma for embora, não poderá permanecer na sala com duas pessoas e terá que devolver a chave!

            Dentro das salas não é permitida a alimentação, assim como em todo o espaço de coworking. Por favor, ao utilizar o coworking mantenha o máximo de silêncio possível, pois é uma área onde todos estão tentando se concentrar em suas atividades ou trabalho. Agradeço desde já!
            `;
                let numero_cel = '+5582993540802'
                let mensagem_txt = `Olá! Uma nova reserva foi feita. Confira as regras do coworking: ${regrasCoworking}`;
                await enviaWhatsApp(numero_cel, mensagem_txt);
            }*/
            return res.status(201).json(novoRegistroCriado);
        }catch(error){
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ReservaController;
