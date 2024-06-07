const dataSource = require('../models');
require('dotenv').config();
const axios = require('axios');
const fs = require('fs').promises;


class EmailServices{

    async salvarErro(exception, mensagem) {
        const erro = {
            exception: exception,
            message: mensagem,
        };
        try {
            await dataSource.Fracaso.create(erro);
            console.log('Erro salvo com sucesso');
        } catch (error) {
            console.error('Falha ao salvar o erro no banco de dados:', error);
        }
    }
    
    async buscarEmail(id_reservista) {
        // Método para buscar o email a partir do id_reservista
        const participante = await dataSource.Participante.findOne({
            attributes: ['email'],
            where: { id: id_reservista}
        });
        if(!participante)
            throw new Error('Participante não encontrado');
    
        return participante.email;
    }
    
    async enviarEmail(toUserEmail, body) {
        // nao sei como vai funcionar o disparo do email em si entao so escrevi alguma coisa aqui como
        // imagino que as informações seriam passadas 
        const from = process.env.EMAIL_FROM;
        const senha = process.env.EMAIL_SENHA;
        const dominio = process.env.EMAIL_DOMINIO;
        const subject = 'Confirmação de reserva - CIPT';
    
        return await axios.post(process.env.EMAIL_API,{
            dominio: dominio,
            from: from,
            to: toUserEmail,
            subject: subject,
            html: body,
            auth: {
                username: from,
                password: senha
            }
        });
    }
    
    /*
    Tentei refatorar o código ao maximo para evitar repetir os mesmos trechos de código
    que fora definidos nos metodos acima, apenas fiz os metodos mais basicos e mais urgentes
    que são os  de Confirmacao e Cancelamento.
    */

    async enviarEmailConfirmacao(novoRegistro){
        try{
            const toUserEmail = await this.buscarEmail(novoRegistro.id_reservista);
            const body = await fs.readFile('../app/email/corpo_email/confirmacao.html', 'utf8');
            return await this.enviarEmail(toUserEmail, body);
        }catch(error){
            await this.salvarErro(error.name, error.message);
            throw error;
        }
    }

    async enviarEmailCancelamento(reserva){
        try{
            const toUserEmail = await this.buscarEmail(reserva.id_reservista);
            const body = await fs.readFile('../app/email/corpo_email/cancelamento.html', 'utf8');
            return await this.enviarEmail(toUserEmail, body);
        }catch(error){
            await this.salvarErro(error.name, error.message);
            throw error;
        }
    }
}
module.exports = EmailServices;

