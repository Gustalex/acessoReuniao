const express = require('express');

const salaRoutes = require('./salaRoutes.js');
const admRoutes = require('./admRoutes.js');
const reservaRoutes = require('./reservaRoutes.js');
const reservistaRoutes = require('./reservistaRoutes.js');

const routes = (app) => {
    app.use(express.json());
    app.use(salaRoutes);
    app.use(admRoutes);
    app.use(reservaRoutes);
    app.use(reservistaRoutes);
};

module.exports = routes;