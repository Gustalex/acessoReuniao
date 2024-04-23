const express = require('express');
const routes = require('./routes');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({ mensagem: 'Enéas é foda!' });
});

routes(app);

module.exports = app;