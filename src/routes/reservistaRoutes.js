const {Router} = require('express');
const ReservistaController = require('../controller/reservistaController.js');
const reservistaController = new ReservistaController();
const router = Router();

router.get('/reservista', (req, res) => reservistaController.pegaTodos(req, res));
router.get('/reservista/:id', (req, res) => reservistaController.pegaPorId(req,res));
router.post('/reservista', (req, res) => reservistaController.cria(req, res));
router.put('/reservista/:id', (req, res) => reservistaController.atualiza(req, res));
router.delete('/reservista/:id', (req, res) => reservistaController.deleta(req,res));

module.exports = router;