const {Router} = require('express');
const ReservistaController = require('../controller/reservistaController.js');
const reservistaController = new ReservistaController();
const router = Router();

router.get('/Reservista', (req, res) => reservistaController.pegaTodos(req, res));
router.get('/Reservista/:id', (req, res) => reservistaController.pegaPorId(req,res));
router.post('/Reservista', (req, res) => reservistaController.cria(req, res));
router.put('/Reservista/:id', (req, res) => reservistaController.atualiza(req, res));
router.delete('/Reservista/:id', (req, res) => reservistaController.deleta(req,res));

module.exports = router;