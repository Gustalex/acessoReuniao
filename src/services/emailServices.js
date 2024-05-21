const axios = require('axios');

const sendMail = async(subject, message, email) => {
    try{
        const response = await axios.post(`http://127.0.0.1:8000/email/`, {
            subject: subject,
            message: message,
            recipient: email,
        }, {
            headers:{
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (erro){
        console.error(`Erro ao enviar o email: ${erro}`);
        throw erro; 
    }
};

module.exports = { sendMail };