const express = require('express');

const estadoSalaRoutes = require('./estadoSalaRoutes.js');
const fracasoRoutes=require('./fracasoRoutes.js');
const listaNegraRoutes=require('./listaNegraRoutes.js');
const nivelAcessoRoutes = require('./nivelAcessoRoutes.js');
const recepcionistaRoutes = require('./recepcionistaRoutes.js');
const reservaRoutes = require('./reservaRoutes.js');
const reuniaoRoutes = require('./reuniaoRoutes.js');
const salaRoutes = require('./salaRoutes.js');
const usuarioRoutes = require('./usuarioRoutes.js');


const routes = (app) => {
    app.use(express.json());
    app.use(estadoSalaRoutes);
    app.use(fracasoRoutes);
    app.use(listaNegraRoutes);    
    app.use(nivelAcessoRoutes);
    app.use(recepcionistaRoutes);
    app.use(reuniaoRoutes);
    app.use(reservaRoutes);
    app.use(salaRoutes);
    app.use(usuarioRoutes);
};

module.exports = routes;