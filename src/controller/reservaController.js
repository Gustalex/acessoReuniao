const Controller=require('./controller.js');
const ReservaServices=require('../services/reservaServices.js');
const reservaServices=new ReservaServices();
const nodemailer = require('nodemailer');

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
        const novoRegistro = req.body;
        try {
            const novoRegistroCriado = await reservaServices.criaRegistro(novoRegistro);
            if (novoRegistroCriado) {
                const regrasCoworking = `
                    As chaves das salas de estudo só podem ser entregues se for realizada uma reserva prévia, que é feita por aqui mesmo, e se tiverem no mínimo 3 pessoas presentes, e no máximo 5. O tempo máximo de permanência são 3 horas. Temos um tempo de tolerância para a retirada da chave de 30 MINUTOS, passando disso, se chegar algum grupo com no mínimo 3 pessoas presentes, e pedir a sala, entregaremos.
    
                    Lembrando que se ao chegar tiverem as 3 pessoas, mas durante o uso da sala uma for embora, não poderá permanecer na sala com duas pessoas e terá que devolver a chave!
    
                    Dentro das salas não é permitida a alimentação, assim como em todo o espaço de coworking. Por favor, ao utilizar o coworking mantenha o máximo de silêncio possível, pois é uma área onde todos estão tentando se concentrar em suas atividades ou trabalho. Agradeço desde já!
                `;
                const { email, assunto, mensagem } = {
                    email: novoRegistroCriado.email,
                    assunto: 'Reserva Confirmada',
                    mensagem: `Sua reserva foi confirmada.\n\nDetalhes da Reserva:\n${JSON.stringify(novoRegistroCriado)}\n\n${regrasCoworking}`
                };
                await this.enviaEmail({ body: { email, assunto, mensagem } }, res);
            }
            return res.status(201).json(novoRegistroCriado);
        } catch (error) {
            return res.status(500).json({ error: error.message });
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

    async enviaEmail(req, res) {
        const { email, assunto, mensagem } = req.body;
    
        // Configurações de transporte
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'SeuEmailAQUI@gmail.com',
                pass: 'suaSenhaAQUI'
            }
        });
    
        // Configurações do e-mail
        const mailOptions = {
            from: 'Enéas FROM api',
            to: email,
            subject: assunto,
            text: mensagem
        };
    
        try {
            // Envio do e-mail
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Email enviado com sucesso' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ReservaController;
