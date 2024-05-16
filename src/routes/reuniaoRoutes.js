const {Router} = require('express');
const ReuniaoController = require('../controller/reuniaoController.js');
const reuniaoController = new ReuniaoController();
const router = Router();

router.get('/reuniao', (req, res) => reuniaoController.pegaTodos(req, res));
router.get('/reuniao/:id', (req, res) => reuniaoController.pegaPorId(req,res));
router.post('/reuniao', (req, res) => reuniaoController.cria(req, res));
router.put('/reuniao/:id', (req, res) => reuniaoController.atualiza(req, res));
router.delete('/reuniao/:id', (req, res) => reuniaoController.deleta(req,res));

module.exports = router;