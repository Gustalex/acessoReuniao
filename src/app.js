const express=require('express');
const routes=require('./routes');
const cors=require('cors');
const app=express();

app.use(cors()); // Usar o middleware CORS antes de qualquer outro middleware

app.use((request, response, next) => {
    // Permite chamadas de qualquer origem, porém reduz a segurança
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.status(200).send({ mensagem: 'Enéas é foda!' });
});

routes(app);

module.exports = app;