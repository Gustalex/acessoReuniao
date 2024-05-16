const {Router} = require('express');
const ReuniaoController = require('../controller/reuniaoController.js');
const reuniaoController = new ReuniaoController();
const router = Router();

router.get('/participante', (req, res) => reuniaoController.pegaTodos(req, res));
router.get('/participante/:id', (req, res) => reuniaoController.pegaPorId(req,res));
router.post('/participante', (req, res) => reuniaoController.cria(req, res));
router.put('/participante/:id', (req, res) => reuniaoController.atualiza(req, res));
router.delete('/participante/:id', (req, res) => reuniaoController.deleta(req,res));

module.exports = router;