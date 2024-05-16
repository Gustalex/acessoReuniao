const {Router} = require('express');
const ListaNegraController = require('../controller/listaNegraController.js');
const listaNegraController = new ListaNegraController();
const router = Router();

router.get('/participante', (req, res) => listaNegraController.pegaTodos(req, res));
router.get('/participante/:id', (req, res) => listaNegraController.pegaPorId(req,res));
router.post('/participante', (req, res) => listaNegraController.cria(req, res));
router.put('/participante/:id', (req, res) => listaNegraController.atualiza(req, res));
router.delete('/participante/:id', (req, res) => listaNegraController.deleta(req,res));

module.exports = router;