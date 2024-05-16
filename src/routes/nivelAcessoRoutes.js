const {Router} = require('express');
const NivelAcessoController = require('../controller/nivelAcessoController.js');
const nivelAcessoController = new NivelAcessoController();
const router = Router();

router.get('/participante', (req, res) => nivelAcessoController.pegaTodos(req, res));
router.get('/participante/:id', (req, res) => nivelAcessoController.pegaPorId(req,res));
router.post('/participante', (req, res) => nivelAcessoController.cria(req, res));
router.put('/participante/:id', (req, res) => nivelAcessoController.atualiza(req, res));
router.delete('/participante/:id', (req, res) => nivelAcessoController.deleta(req,res));

module.exports = router;