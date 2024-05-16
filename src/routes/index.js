const express = require('express');

const fracasoRoutes=require('./fracasoRoutes.js');
const listaNegraRoutes=require('./listaNegraRoutes.js');
const nivelAcessoRoutes = require('./nivelAcessoRoutes.js');
const participanteRoutes = require('./participanteRoutes.js');
const reservaRoutes = require('./reservaRoutes.js');
const reuniaoRoutes = require('./reuniaoRoutes.js');
const salaRoutes = require('./salaRoutes.js');
const tipoUsuarioRoutes = require('./tipoUsuarioRoutes.js');
const userRoutes = require('./userRoutes.js');


const routes = (app) => {
    app.use(express.json());
    app.use(nivelAcessoRoutes);
    app.use(reuniaoRoutes);
    app.use(tipoUsuarioRoutes);
    app.use(salaRoutes);
    app.use(reservaRoutes);
    app.use(userRoutes);
    app.use(participanteRoutes);
    app.use(fracasoRoutes);
    app.use(listaNegraRoutes);

};

module.exports = routes;