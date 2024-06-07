const express = require('express');

const fracasoRoutes=require('./fracasoRoutes.js');
const listaNegraRoutes=require('./listaNegraRoutes.js');
const nivelAcessoRoutes = require('./nivelAcessoRoutes.js');
const estadoSalaRoutes = require('./estadoSalaRoutes.js');
const reservaRoutes = require('./reservaRoutes.js');
const reuniaoRoutes = require('./reuniaoRoutes.js');
const salaRoutes = require('./salaRoutes.js');
const usuarioRoutes = require('./usuarioRoutes.js');
const recepcionistaRoutes = require('./recepcionistaRoutes.js');


const routes = (app) => {
    app.use(express.json());
    app.use(nivelAcessoRoutes);
    app.use(reuniaoRoutes);
    app.use(estadoSalaRoutes);
    app.use(salaRoutes);
    app.use(reservaRoutes);
    app.use(usuarioRoutes);
    app.use(participanteRoutes);
    app.use(fracasoRoutes);
    app.use(listaNegraRoutes);
    app.use(recepcionistaRoutes);

};

module.exports = routes;