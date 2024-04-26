const axios = require('axios');

const enviaWhatsApp = async (numero_cel, mensagem_txt) => {
  const response = await axios.post(`http://localhost:5000/send_message`, {
    phone_number: numero_cel,
    message: mensagem_txt,
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};

module.exports = { enviaWhatsApp }